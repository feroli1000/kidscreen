<template>
  <q-page class="q-px-sm q-pt-md q-pb-xl">
    <q-markup-table
      v-if="showScore52"
      bordered
      separator="cell"
      wrap-cells
      class="tb-score"
    >
      <caption>
        <div class="text-h4 q-py-md">
          Kidscreen 52 <small class="text-grey">{{ personTypeLabel }}</small>
        </div>
        <ScoreCaption class="q-mt-md" />
      </caption>
      <tbody>
        <tr>
          <td>
            1 - Bem-estar Físico<br /><small
              >Prática de atividade física, energia e aptidão física</small
            >
            <div v-if="debug">
              <ScoreDebug v-if="debug" :dimension="1" :divisor="25" />
            </div>
          </td>
          <td>{{ questionnaire.score.Q52_1 }}</td>
        </tr>
        <tr>
          <td>
            2 - Bem-estar Psicológico<br /><small
              >Sentimentos positivos e satisfação com a vida</small
            >
            <ScoreDebug v-if="debug" :dimension="2" :divisor="30" />
          </td>
          <td>
            {{ questionnaire.score.Q52_2 }}
          </td>
        </tr>
        <tr>
          <td>
            3 - Estado Emocional<br /><small
              >Equilíbrio emocional e de estresse</small
            >
            <ScoreDebug v-if="debug" :dimension="3" :divisor="35" />
          </td>
          <td>{{ questionnaire.score.Q52_3 }}</td>
        </tr>
        <tr>
          <td>
            4 - Auto Percepção<br /><small
              >Percepção de si mesmo e satisfação com aparência corporal</small
            >
            <ScoreDebug v-if="debug" :dimension="4" :divisor="25" />
          </td>
          <td>{{ questionnaire.score.Q52_4 }}</td>
        </tr>
        <tr>
          <td>
            5 - Autonomia<br /><small
              >Oportunidade de criar e gerir seu tempo social e de lazer</small
            >
            <ScoreDebug v-if="debug" :dimension="5" :divisor="25" />
          </td>
          <td>{{ questionnaire.score.Q52_5 }}</td>
        </tr>
        <tr>
          <td>
            6 - Família/Ambiente Familiar<br /><small
              >Qualidade das relações com os pais e no ambiente familiar</small
            >
            <ScoreDebug v-if="debug" :dimension="6" :divisor="30" />
          </td>
          <td>{{ questionnaire.score.Q52_6 }}</td>
        </tr>
        <tr>
          <td>
            7 - Aspectos Financeiros<br /><small
              >Percepção acerca dos recursos financeiros disponíveis</small
            >
            <ScoreDebug v-if="debug" :dimension="7" :divisor="15" />
          </td>
          <td>{{ questionnaire.score.Q52_7 }}</td>
        </tr>
        <tr>
          <td>
            8 - Amigos e Apoio Social<br /><small
              >Natureza das relações sociais e percepção do grupo de
              pares</small
            >
            <ScoreDebug v-if="debug" :dimension="8" :divisor="30" />
          </td>
          <td>{{ questionnaire.score.Q52_8 }}</td>
        </tr>
        <tr>
          <td>
            9 - Ambiente Escolar<br /><small
              >Satisfação com sua competência e desempenho escolar</small
            >
            <ScoreDebug v-if="debug" :dimension="9" :divisor="30" />
          </td>
          <td>{{ questionnaire.score.Q52_9 }}</td>
        </tr>
        <tr>
          <td>
            10 - Provocação/Bullyng<br /><small
              >Aspectos acerca dos sentimentos de rejeição pelos pares</small
            >
            <ScoreDebug v-if="debug" :dimension="10" :divisor="15" />
          </td>
          <td>{{ questionnaire.score.Q52_10 }}</td>
        </tr>
        <tr>
          <td>
            Índice Global<br /><small
              >Saúde geral percebida pelos jovens associada à qualidade de
              vida</small
            >
            <ScoreDebug v-if="debug" :is_index="true" :divisor="260" />
          </td>
          <td>{{ questionnaire.score.index }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <q-markup-table
      v-if="showScore27"
      bordered
      separator="cell"
      wrap-cells
      class="tb-score"
    >
      <caption class="q-py-md">
        <div class="text-h4">
          Kidscreen 27 <small class="text-grey">{{ personTypeLabel }}</small>
        </div>
        <ScoreCaption class="q-mt-md" />
      </caption>
      <tbody>
        <tr>
          <td>
            1 - Bem-estar Físico<br /><small
              >Prática de atividade física, energia e aptidão física</small
            >
            <ScoreDebug v-if="debug" :dimension="1" :divisor="25" />
          </td>
          <td>{{ questionnaire.score.Q27_1 }}</td>
        </tr>
        <tr>
          <td>
            2 - Bem-estar Psicológico<br /><small
              >Sentimentos positivos, satisfação com a vida e equilíbrio
              emocional</small
            >
            <ScoreDebug v-if="debug" :dimension="2" :divisor="35" />
          </td>
          <td>{{ questionnaire.score.Q27_2 }}</td>
        </tr>
        <tr>
          <td>
            3 - Autonomia e Relação com os Pais<br /><small
              >Percepção de autonomia para gerir seu tempo e recursos
              financeiros, qualidade da relação com os pais</small
            >
            <ScoreDebug v-if="debug" :dimension="3" :divisor="35" />
          </td>
          <td>{{ questionnaire.score.Q27_3 }}</td>
        </tr>
        <tr>
          <td>
            4 - Amigos e Apoio Social<br /><small
              >Natureza das relações sociais e percepção do grupo de
              pares</small
            >
            <ScoreDebug v-if="debug" :dimension="4" :divisor="20" />
          </td>
          <td>{{ questionnaire.score.Q27_4 }}</td>
        </tr>
        <tr>
          <td>
            5 - Ambiente Escolar<br /><small
              >Satisfação com sua competência e desempenho escolar</small
            >
            <ScoreDebug v-if="debug" :dimension="5" :divisor="20" />
          </td>
          <td>{{ questionnaire.score.Q27_5 }}</td>
        </tr>
        <tr>
          <td>
            Índice Global<br /><small
              >Saúde geral percebida pelos jovens associada à qualidade de
              vida</small
            >
            <ScoreDebug v-if="debug" :is_index="true" :divisor="135" />
          </td>
          <td>{{ questionnaire.score.index }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <q-markup-table
      v-if="showScore10"
      bordered
      separator="cell"
      wrap-cells
      class="tb-score"
    >
      <caption class="q-py-md">
        <div class="text-h4">
          Kidscreen 10 <small class="text-grey">{{ personTypeLabel }}</small>
        </div>
        <ScoreCaption  />
      </caption>
      <tbody>
        <tr>
          <td>
            Índice Global<br /><small
              >Saúde geral percebida pelos jovens associada à qualidade de
              vida</small
            >
            <ScoreDebug v-if="debug" :is_index="true" :divisor="50" />
          </td>
          <td>{{ questionnaire.score.index }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <ScoreTable class="q-mt-lg" :button_all="false" />

    <QuestionnaireDebug v-if="true" class="q-mt-lg" :button_all="false" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'src/store';
import ScoreDebug from 'components/ScoreDebug.vue';
import ScoreCaption from 'components/ScoreCaption.vue';
import ScoreTable from 'components/ScoreTable.vue';
import QuestionnaireDebug from 'components/QuestionnaireDebug.vue';
import {
  YOUNG_TYPE,
  QUESTIONNARIE_52,
  QUESTIONNARIE_27,
  QUESTIONNARIE_10,
} from 'src/helpers/constants';
import { Questionnaire } from 'src/helpers/models';

export default defineComponent({
  name: 'Score',
  components: {
    ScoreDebug,
    ScoreTable,
    ScoreCaption,
    QuestionnaireDebug,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const debug = ref(false);

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    const showScore52 = computed(
      () => questionnaire.value.model === QUESTIONNARIE_52
    );
    const showScore27 = computed(
      () => questionnaire.value.model === QUESTIONNARIE_27
    );
    const showScore10 = computed(
      () => questionnaire.value.model === QUESTIONNARIE_10
    );

    const personTypeLabel = computed(() =>
      questionnaire.value.person_type === YOUNG_TYPE ? 'Jovem' : 'Pais/Tutores'
    );

    onMounted(() => {
      // Deny direct url access
      if (questionnaire.value.model === 0) {
        router.push('/').catch(() => {
          /* Ignore */
        });
      }
    });

    return {
      questionnaire,
      showScore52,
      showScore27,
      showScore10,
      personTypeLabel,
      debug,
    };
  },
});
</script>

<style lang="scss" scoped>
.tb-score {
  caption {
    border-bottom: 1px solid #ddd;
  }
  tbody {
    tr {
      td {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        &:nth-child(1) {
          text-align: left;
        }
        div {
          font-size: 10px;
          font-weight: normal;
        }
        small {
          font-size: 14px;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
