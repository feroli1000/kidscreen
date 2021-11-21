<template>
  <q-page class="q-px-sm q-pt-md q-pb-xl">
    <div class="text-h3 text-center">Resultado</div>
    <q-markup-table
      v-if="showScore52"
      bordered
      separator="cell"
      wrap-cells
      class="q-mt-md tb-score"
    >
      <caption>
        <div class="text-h4 q-py-md">
          Kidscreen 52 <small class="text-grey">{{ personTypeLabel }}</small>
        </div>
      </caption>
      <tbody>
        <tr>
          <td>
            Bem-estar Físico
            <div v-if="debug">
              <ScoreDebug v-if="debug" :dimension="1" :divisor="25" />
            </div>
          </td>
          <td>{{ questionnaire.score.Q52_1 }}</td>
        </tr>
        <tr>
          <td>
            Bem-estar Psicológico
            <ScoreDebug v-if="debug" :dimension="2" :divisor="30" />
          </td>
          <td>
            {{ questionnaire.score.Q52_2 }}
          </td>
        </tr>
        <tr>
          <td>
            Estado Emocional
            <ScoreDebug v-if="debug" :dimension="3" :divisor="35" />
          </td>
          <td>{{ questionnaire.score.Q52_3 }}</td>
        </tr>
        <tr>
          <td>
            Auto Percepção
            <ScoreDebug v-if="debug" :dimension="4" :divisor="25" />
          </td>
          <td>{{ questionnaire.score.Q52_4 }}</td>
        </tr>
        <tr>
          <td>
            Autonomia
            <ScoreDebug v-if="debug" :dimension="5" :divisor="25" />
          </td>
          <td>{{ questionnaire.score.Q52_5 }}</td>
        </tr>
        <tr>
          <td>
            Família/Ambiente Familiar
            <ScoreDebug v-if="debug" :dimension="6" :divisor="30" />
          </td>
          <td>{{ questionnaire.score.Q52_6 }}</td>
        </tr>
        <tr>
          <td>
            Aspectos Financeiros
            <ScoreDebug v-if="debug" :dimension="7" :divisor="15" />
          </td>
          <td>{{ questionnaire.score.Q52_7 }}</td>
        </tr>
        <tr>
          <td>
            Amigos e Apoio Social
            <ScoreDebug v-if="debug" :dimension="8" :divisor="30" />
          </td>
          <td>{{ questionnaire.score.Q52_8 }}</td>
        </tr>
        <tr>
          <td>
            Ambiente Escolar
            <ScoreDebug v-if="debug" :dimension="9" :divisor="30" />
          </td>
          <td>{{ questionnaire.score.Q52_9 }}</td>
        </tr>
        <tr>
          <td>
            Provocação/Bullyng
            <ScoreDebug v-if="debug" :dimension="10" :divisor="15" />
          </td>
          <td>{{ questionnaire.score.Q52_10 }}</td>
        </tr>
        <tr>
          <td>
            Índice Global
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
      class="q-mt-lg tb-score"
    >
      <caption>
        <div class="text-h4 q-py-md">
          Kidscreen 27 <small class="text-grey">{{ personTypeLabel }}</small>
        </div>
      </caption>
      <tbody>
        <tr>
          <td>
            Bem-estar Físico
            <ScoreDebug v-if="debug" :dimension="1" :divisor="25" />
          </td>
          <td>{{ questionnaire.score.Q27_1 }}</td>
        </tr>
        <tr>
          <td>
            Bem-estar Psicológico
            <ScoreDebug v-if="debug" :dimension="2" :divisor="35" />
          </td>
          <td>{{ questionnaire.score.Q27_2 }}</td>
        </tr>
        <tr>
          <td>
            Autonomia e Relação com os Pais
            <ScoreDebug v-if="debug" :dimension="3" :divisor="35" />
          </td>
          <td>{{ questionnaire.score.Q27_3 }}</td>
        </tr>
        <tr>
          <td>
            Amigos e Apoio Social
            <ScoreDebug v-if="debug" :dimension="4" :divisor="20" />
          </td>
          <td>{{ questionnaire.score.Q27_4 }}</td>
        </tr>
        <tr>
          <td>
            Ambiente Escolar
            <ScoreDebug v-if="debug" :dimension="5" :divisor="20" />
          </td>
          <td>{{ questionnaire.score.Q27_5 }}</td>
        </tr>
        <tr>
          <td>
            Índice Global
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
      class="q-mt-lg tb-score"
    >
      <caption>
        <div class="text-h4 q-py-md">
          Kidscreen 10 <small class="text-grey">{{ personTypeLabel }}</small>
        </div>
      </caption>
      <tbody>
        <tr>
          <td>
            Índice Global
            <ScoreDebug v-if="debug" :is_index="true" :divisor="50" />
          </td>
          <td>{{ questionnaire.score.index }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <QuestionnaireDebug class="q-mt-lg" :button_all="false" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'src/store';
import ScoreDebug from 'components/ScoreDebug.vue';
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
    QuestionnaireDebug,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const debug = ref(true);

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
      }
    }
  }
}
</style>
