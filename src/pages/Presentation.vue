<template>
  <q-page padding>
    <PresentationYoung v-if="isPersonTypeYoung" />

    <PresentationParent v-if="isPersonTypeParent" />

    <div v-if="isPersonTypeParent" class="q-mt-lg border-top">
      <q-list>
        <q-item>
          <q-item-section class="text-body1 text-bold"
            >Quem está respondendo este questionário?</q-item-section
          >
        </q-item>
        <q-item v-for="p in parents_list" :key="p.value" tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="parent" :val="p.value" color="orange" />
          </q-item-section>
          <q-item-section class="text-body1">
            {{ p.text }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="q-mt-lg border-top">
      <q-list>
        <q-item>
          <q-item-section class="text-body1 text-bold">{{
            genderLabel
          }}</q-item-section>
        </q-item>
        <q-item v-for="g in genders_list" :key="g.value" tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="gender" :val="g.value" color="orange" />
          </q-item-section>
          <q-item-section class="text-body1">
            {{ g.text }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="q-mt-lg q-pt-md border-top">
      <p class="text-bold q-pl-md">{{ birthdayLabel }}</p>
      <div class="row q-gutter-x-sm">
        <div class="col">
          <q-input
            type="number"
            v-model="day"
            label="Dia"
            mask="##"
            error-message="Campo obrigatório"
            :error="dayValidate()"
          />
        </div>
        <div class="col">
          <q-input
            type="number"
            v-model="month"
            label="Mês"
            mask="##"
            error-message="Campo obrigatório"
            :error="monthValidate()"
          />
        </div>
        <div class="col">
          <q-input
            type="number"
            v-model="year"
            label="Ano"
            mask="####"
            error-message="Campo obrigatório"
            :error="yearValidate()"
          />
        </div>
      </div>
    </div>

    <div v-if="isPersonTypeYoung" class="q-mt-lg border-top">
      <q-list>
        <q-item>
          <q-item-section class="text-body1 text-bold"
            >Você tem alguma deficiência, doença ou problema médico
            crônico?</q-item-section
          >
        </q-item>
        <q-item v-for="d in no_yes_list" :key="d.value" tag="label" v-ripple>
          <q-item-section avatar>
            <div class="flex flex-center justify-between text-body1">
              <q-radio
                v-model="disease"
                :val="d.value"
                color="orange"
                error-message="Campo obrigatório"
                :error="diseaseValidate()"
              />
              <div class="q-mr-md">{{ d.text }}</div>
              <q-input
                v-if="d.value === 2"
                v-model="disease_description"
                label="Qual?"
                stack-label
                error-message="Informe seu problema"
                :error="diseaseDescriptionValidate()"
              />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <q-btn
      size="xl"
      :color="canForward() ? 'green' : 'grey'"
      class="full-width q-mt-md"
      label="Avançar"
      icon-right="send"
      :disable="!canForward()"
      @click="forward"
    />

    <div v-if="isDevelopmentMode()" class="q-my-xl">
      <q-btn
        size="md"
        color="grey"
        label="Todas"
        @click="fillAllForDevelpment"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useStore } from 'src/store';
import { formatDate, isDevelopmentMode } from 'src/helpers';
import { PARENT_TYPE, YOUNG_TYPE } from 'src/helpers/constants';
import PresentationYoung from 'components/PresentationYoung.vue';
import PresentationParent from 'components/PresentationParent.vue';
import {
  OptionsInterface,
  Questionnaire,
  QuestionnaireInterface,
} from 'src/helpers/models';

export default defineComponent({
  name: 'Presentation',
  components: {
    PresentationYoung,
    PresentationParent,
  },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const store = useStore();
    const day = ref();
    const month = ref();
    const year = ref();
    const gender = ref(0);
    const parent = ref(0);
    const disease = ref(0);
    const disease_description = ref('');
    const genders_list = ref<OptionsInterface[]>([
      { value: 1, text: 'Feminino' },
      { value: 2, text: 'Masculino' },
    ]);
    const no_yes_list = ref<OptionsInterface[]>([
      { value: 1, text: 'Não' },
      { value: 2, text: 'Sim' },
    ]);
    const parents_list = ref<OptionsInterface[]>([
      { value: 1, text: 'Mãe' },
      { value: 2, text: 'Pai' },
      { value: 3, text: 'Madrasta / Companheira do pai' },
      { value: 4, text: 'Padrasto / Companheiro da mãe' },
      { value: 5, text: 'Avó' },
      { value: 6, text: 'Avô' },
      { value: 7, text: 'Outro' },
    ]);

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    const personType = computed(() => questionnaire.value.person_type);
    const isPersonTypeYoung = computed(() => personType.value === YOUNG_TYPE);
    const isPersonTypeParent = computed(() => personType.value === PARENT_TYPE);

    const genderLabel = computed(() =>
      isPersonTypeYoung.value
        ? 'Qual é seu sexo?'
        : 'Qual o sexo do/a jovem entrevistado/a?'
    );

    const birthdayLabel = computed(() =>
      isPersonTypeYoung.value
        ? 'Qual é sua data de nascimento?'
        : 'Qual a data de nascimento do/a jovem entrevistado/a?'
    );

    onMounted(() => {
      // Deny direct url access
      if (questionnaire.value.model === 0) {
        router.push('/').catch(() => {
          /* Ignore */
        });
      }
    });

    function getQuestionnaireClone(): QuestionnaireInterface {
      return <Questionnaire>JSON.parse(JSON.stringify(questionnaire.value));
    }

    function genderValidate() {
      return false;
    }

    function dayValidate() {
      return false;
    }

    function monthValidate() {
      return false;
    }

    function yearValidate() {
      return false;
    }

    function diseaseValidate() {
      return false;
    }

    function diseaseDescriptionValidate() {
      return false;
    }

    function canForward(): boolean {
      const d = ~~day.value >= 1 && ~~day.value <= 31;
      const m = ~~month.value >= 1 && ~~month.value <= 12;
      const y = ~~year.value > 1900 && ~~year.value < 2100;

      if (gender.value < 1 || !d || !m || !y) {
        return false;
      }
      if (isPersonTypeYoung.value) {
        if (disease.value < 1) {
          return false;
        }
        if (disease.value === 2 && disease_description.value.length < 1) {
          return false;
        }
      }
      if (isPersonTypeParent.value) {
        if (parent.value < 1) {
          return false;
        }
      }
      return true;
    }

    function forward() {
      if (!canForward()) {
        $q.dialog({
          title: 'Atenção!',
          message: 'Todas os campos devem ser informados corretamente',
        });
        return;
      }
      const quest = getQuestionnaireClone();
      quest.gender = gender.value === 1 ? 'F' : 'M';
      quest.disease = disease.value;
      quest.disease_description = String(disease_description.value);
      quest.parent = parent.value;
      quest.birthday = formatDate(
        day.value || 0,
        month.value || 0,
        year.value || 0
      );
      quest.answered_at = formatDate(
        new Date().getDate(),
        new Date().getMonth() + 1,
        new Date().getFullYear()
      );

      store.commit('questionnaire/SET_QUESTIONNAIRE', quest);

      const person_type =
        questionnaire.value.person_type === YOUNG_TYPE ? 'young' : 'parent';
      const model = `kidscreen${questionnaire.value.model}`;
      router.push(`/questionnaire/${model}/${person_type}`).catch(() => {
        /* Ignore */
      });
    }

    function fillAllForDevelpment() {
      gender.value = 1;
      disease.value = 2;
      disease_description.value = 'Abcde';
      parent.value = 3;
      day.value = 2;
      month.value = 10;
      year.value = 2010;
    }

    return {
      isPersonTypeYoung,
      isPersonTypeParent,
      genderLabel,
      birthdayLabel,
      parent,
      gender,
      parents_list,
      genders_list,
      no_yes_list,
      disease,
      day,
      month,
      year,
      questionnaire,
      disease_description,
      isDevelopmentMode,
      forward,
      canForward,
      genderValidate,
      dayValidate,
      monthValidate,
      yearValidate,
      diseaseValidate,
      fillAllForDevelpment,
      diseaseDescriptionValidate,
    };
  },
});
</script>
