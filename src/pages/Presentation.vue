<template>
  <q-page class="q-px-md q-pb-lg">
    <div class="text-body1 text-bold q-my-md">
      QUALIDADE DE VIDA RELACIONADA À SAÚDE
    </div>

    <PresentationYoung v-if="isPersonTypeYoung" />

    <PresentationParent v-if="isPersonTypeParent" />

    <div v-if="isPersonTypeParent" class="q-mt-lg border-top">
      <q-list>
        <q-item>
          <q-item-section class="text-body1 text-bold"
            >Quem está respondendo este questionário?</q-item-section
          >
        </q-item>
        <q-item
          v-for="p in PARENTS_OPTIONS"
          :key="p.value"
          tag="label"
          v-ripple
        >
          <q-item-section>
            <div class="flex items-center text-body1">
              <q-radio
                v-model="parent"
                :val="p.value"
                color="orange"
                error-message="Campo obrigatório"
                :error="!parentValid()"
              />
              <div class="q-mr-md">{{ p.text }}</div>
              <q-input
                v-if="p.value === ANOTHER_PARENT_OPTION"
                v-model="parent_description"
                label="Quem?"
                stack-label
                error-message="Informe seu grau relacionamento"
                :error="
                  isAnotherParent &&
                  !parentDescriptionValid(parent_description)
                "
              />
            </div>
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
        <q-item
          v-for="g in GENDERS_OPTIONS"
          :key="g.value"
          tag="label"
          v-ripple
        >
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
            error-message="Valor entre 1 e 31"
            :error="day && !dayValid(day)"
          />
        </div>
        <div class="col">
          <q-input
            type="number"
            v-model="month"
            label="Mês"
            mask="##"
            error-message="Valor entre 1 e 12"
            :error="month && !monthValid(month)"
          />
        </div>
        <div class="col">
          <q-input
            type="number"
            v-model="year"
            label="Ano"
            mask="####"
            :error-message="errorYearMessage()"
            :error="year && !yearValid(year)"
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
        <q-item v-for="d in NO_YES_OPTIONS" :key="d.value" tag="label" v-ripple>
          <q-item-section>
            <div class="flex items-center text-body1">
              <q-radio
                v-model="disease"
                :val="d.value"
                color="orange"
                error-message="Campo obrigatório"
                :error="diseaseValid()"
              />
              <div class="q-mr-md">{{ d.text }}</div>
              <q-input
                v-if="d.value === HAS_DISEASE_OPTION"
                v-model="disease_description"
                label="Qual?"
                stack-label
                error-message="Informe seu problema"
                :error="
                  hasDisease && !diseaseDescriptionValid(disease_description)
                "
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
import { Questionnaire } from 'src/helpers/models';
import { formatDate, isDevelopmentMode } from 'src/helpers';
import { getQuestionnaireClone } from 'src/helpers/kidscreen';
import PresentationYoung from 'components/PresentationYoung.vue';
import PresentationParent from 'components/PresentationParent.vue';
import {
  PARENTS_OPTIONS,
  GENDERS_OPTIONS,
  NO_YES_OPTIONS,
} from 'src/helpers/constants';
import {
  PARENT_TYPE,
  YOUNG_TYPE,
  HAS_DISEASE_OPTION,
  ANOTHER_PARENT_OPTION,
} from 'src/helpers/constants';

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
    const parent_description = ref('');

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

    const hasDisease = computed(() => disease.value === HAS_DISEASE_OPTION);
    const isAnotherParent = computed(
      () => parent.value === ANOTHER_PARENT_OPTION
    );

    onMounted(() => {
      // Deny direct url access
      if (questionnaire.value.model === 0) {
        router.push('/').catch(() => {
          /* Ignore */
        });
      }
    });

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
        if (
          disease.value === HAS_DISEASE_OPTION &&
          disease_description.value.length < 1
        ) {
          return false;
        }
      }
      if (isPersonTypeParent.value) {
        if (parent.value < 1) {
          return false;
        }
        if (
          parent.value === ANOTHER_PARENT_OPTION &&
          parent_description.value.length < 1
        ) {
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
      const quest = getQuestionnaireClone(questionnaire.value);
      quest.gender = gender.value === 1 ? 'F' : 'M';
      quest.disease = disease.value;
      quest.disease_description = disease_description.value;
      quest.parent = parent.value;
      quest.parent_description = parent_description.value;
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
      parent_description.value = 'Fghijkl';
      day.value = 2;
      month.value = 10;
      year.value = 2010;
    }

    return {
      HAS_DISEASE_OPTION,
      ANOTHER_PARENT_OPTION,
      PARENTS_OPTIONS,
      GENDERS_OPTIONS,
      NO_YES_OPTIONS,
      isPersonTypeYoung,
      isPersonTypeParent,
      genderLabel,
      birthdayLabel,
      parent,
      gender,
      disease,
      day,
      month,
      year,
      questionnaire,
      parent_description,
      disease_description,
      parentValid,
      diseaseValid,
      hasDisease,
      isAnotherParent,
      parentDescriptionValid,
      diseaseDescriptionValid,
      isDevelopmentMode,
      forward,
      canForward,
      genderValidate,
      dayValid,
      monthValid,
      yearValid,
      errorYearMessage,
      fillAllForDevelpment,
    };
  },
});

// @TODO Implements validators
function genderValidate() {
  return false;
}

function dayValid(day: number) {
  return day >= 1 && day <= 31;
}

function monthValid(month: number) {
  return month >= 1 && month <= 12;
}

function yearValid(year: number) {
  const actual_year = new Date().getFullYear();
  return year >= actual_year - 18 && year <= actual_year - 6;
}

function errorYearMessage() {
  const actual_year = new Date().getFullYear();
  const min = actual_year - 18;
  const max = actual_year - 6;
  return `Ano deve estar entre ${min} e ${max}`;
}

function diseaseValid() {
  return false;
}

function diseaseDescriptionValid(value: string) {
  return value.length > 0;
}

function parentValid() {
  return false;
}

function parentDescriptionValid(value: string) {
  return value.length > 0;
}
</script>
