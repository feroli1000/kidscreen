<template>
  <q-page class="row items-center justify-evenly q-px-lg q-pb-xl">
    <q-btn
      v-if="!isQuestionnaireSelected"
      size="xl"
      color="orange-10"
      class="full-width"
      @click="selectQuestionnaireNumber(52)"
      >Kidscreen 52</q-btn
    >
    <q-btn
      v-if="!isQuestionnaireSelected"
      size="xl"
      color="pink-10"
      class="full-width"
      @click="selectQuestionnaireNumber(27)"
      >Kidscreen 27</q-btn
    >
    <q-btn
      v-if="!isQuestionnaireSelected"
      size="xl"
      color="green-10"
      class="full-width"
      @click="selectQuestionnaireNumber(10)"
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
            @click="selectPersonType(1)"
            >Jovem</q-btn
          >
        </q-card-section>
        <q-card-section>
          <q-btn
            size="xl"
            color="purple-10"
            class="full-width q-my-xl"
            @click="selectPersonType(2)"
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
import { YOUNG_TYPE } from 'components/constants';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const router = useRouter();
    const store = useStore();
    const selected = ref(0);

    const isQuestionnaireSelected = computed(() => selected.value > 0);

    function selectQuestionnaireNumber(questionnaire_number: number) {
      store.commit(
        'questionnaire/SET_QUESTIONNAIRE_NUMBER',
        questionnaire_number
      );
      selected.value = questionnaire_number;
    }

    onMounted(() => {
      store.commit('questionnaire/SET_QUESTIONNAIRE_NUMBER', 0);
      store.commit('questionnaire/SET_PERSON_TYPE', 0);
    });

    function selectPersonType(type: number) {
      store.commit('questionnaire/SET_PERSON_TYPE', type);
      const person = type === YOUNG_TYPE ? 'young' : 'parent';
      router.push(`/presentation-${person}`).catch(() => {
        /* Ignore */
      });
    }

    return {
      selectQuestionnaireNumber,
      selectPersonType,
      isQuestionnaireSelected,
      selected,
    };
  },
});
</script>
