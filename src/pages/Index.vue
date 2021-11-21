<template>
  <q-page class="row items-center justify-evenly q-px-lg q-pb-xl">
    <q-btn
      v-if="!isQuestionnaireSelected"
      size="xl"
      color="orange-10"
      class="full-width"
      @click="selectQuestionnaireModel(52)"
      >Kidscreen 52</q-btn
    >
    <q-btn
      v-if="!isQuestionnaireSelected"
      size="xl"
      color="pink-10"
      class="full-width"
      @click="selectQuestionnaireModel(27)"
      >Kidscreen 27</q-btn
    >
    <q-btn
      v-if="!isQuestionnaireSelected"
      size="xl"
      color="green-10"
      class="full-width"
      @click="selectQuestionnaireModel(10)"
      >Kidscreen 10</q-btn
    >
    <div v-if="isQuestionnaireSelected" class="full-width">
      <q-card>
        <q-card-section>
          <div class="text-h2 text-center">Kidscreen {{ selected }}</div>
        </q-card-section>
        <q-card-section>
          <q-btn
            size="xl"
            color="purple-10"
            class="full-width q-my-xl"
            @click="selectPersonType(YOUNG_TYPE)"
            >Jovem</q-btn
          >
        </q-card-section>
        <q-card-section>
          <q-btn
            size="xl"
            color="purple-10"
            class="full-width q-my-xl"
            @click="selectPersonType(PARENT_TYPE)"
            >Pais/Tutores</q-btn
          >
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'src/store';
import { YOUNG_TYPE, PARENT_TYPE } from 'src/helpers/constants';
import { Questionnaire } from 'src/helpers/models';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const router = useRouter();
    const store = useStore();
    const selected = ref(0);

    const isQuestionnaireSelected = computed(() => selected.value > 0);

    onMounted(() => {
      store.commit('questionnaire/RESET');
    });

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    function getQuestionnaireClone(): Questionnaire {
      return <Questionnaire>JSON.parse(JSON.stringify(questionnaire.value));
    }

    function selectQuestionnaireModel(model: number) {
      const quest = getQuestionnaireClone();
      quest.model = model;
      store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
      selected.value = model;
    }

    function selectPersonType(type: number) {
      const quest = getQuestionnaireClone();
      quest.person_type = type;
      store.commit('questionnaire/SET_QUESTIONNAIRE', quest);

      router.push('/presentation').catch(() => {
        /* Ignore */
      });
    }

    return {
      selectQuestionnaireModel,
      selectPersonType,
      isQuestionnaireSelected,
      selected,
      questionnaire,
      YOUNG_TYPE,
      PARENT_TYPE,
    };
  },
});
</script>
