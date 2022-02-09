<template>
  <q-page class="row items-center justify-evenly q-px-lg q-pb-xl">
    <div class="full-width">
      <q-btn
        v-if="!isModelSelected"
        size="xl"
        color="orange-10"
        class="full-width"
        @click="selectModel(52)"
        >Kidscreen 52</q-btn
      >
      <div class="q-mt-md">
        Com 52 questões e identifica 10 domínios: bem-estar físico e
        psicológico, estado emocional, autopercepção, autonomia, ambiente
        familiar, aspecto financeiro, amigos, ambiente escolar e bullyng.
      </div>
    </div>
    <div class="full-width">
      <q-btn
        v-if="!isModelSelected"
        size="xl"
        color="pink-10"
        class="full-width"
        @click="selectModel(27)"
        >Kidscreen 27</q-btn
      >
      <div class="q-mt-md">
        Com 27 questões e identifica 5 domínios: bem-estar físico e psicológico,
        autonomia e ambiente familiar, amigos e apoio social e ambiente escolar.
      </div>
    </div>
    <div class="full-width">
      <q-btn
        v-if="!isModelSelected"
        size="xl"
        color="green-10"
        class="full-width"
        @click="selectModel(10)"
        >Kidscreen 10</q-btn
      >
      <div class="q-mt-md">
        Com 10 questões e um único domínio: Índice Global de Qualidade de Vida
        Relacionada à Saúde.
      </div>
    </div>
    <div v-if="isModelSelected" class="full-width">
      <q-card>
        <q-card-section>
          <div class="text-h2 text-center">Kidscreen {{ model_selected }}</div>
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
import { getQuestionnaireClone } from 'src/helpers/kidscreen';
import { Questionnaire } from 'src/helpers/models';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const router = useRouter();
    const store = useStore();
    const model_selected = ref(0);

    const isModelSelected = computed(() => model_selected.value > 0);

    onMounted(() => {
      store.commit('questionnaire/RESET');
    });

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    function selectModel(model: number) {
      const quest = getQuestionnaireClone(questionnaire.value);
      quest.model = model;
      store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
      model_selected.value = model;
    }

    function selectPersonType(type: number) {
      const quest = getQuestionnaireClone(questionnaire.value);
      quest.person_type = type;
      store.commit('questionnaire/SET_QUESTIONNAIRE', quest);

      router.push('/presentation').catch(() => {
        /* Ignore */
      });
    }

    return {
      selectModel,
      selectPersonType,
      isModelSelected,
      model_selected,
      questionnaire,
      YOUNG_TYPE,
      PARENT_TYPE,
    };
  },
});
</script>
