<template>
  <q-markup-table
    dense
    bordered
    square
    wrap-cells
    separator="cell"
    class="table"
  >
    <caption class="border-bottom q-pa-md">
      <div>
        {{ questionnaireModel }}
      </div>
    </caption>
    <tbody>
      <tr v-for="q in questions" :key="q">
        <td>{{ q.N }}</td>
        <td>{{ q.Q }}</td>
        <td>{{ qAnswer(q) }}</td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
import { Questionnaire, Question } from 'src/helpers/models';
import { HEADER_LABELS, PASC } from 'src/helpers/constants';
import { invertOption } from 'src/helpers/kidscreen';

export default defineComponent({
  name: 'ScoreTable',
  setup() {
    const store = useStore();

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    const questionnaireModel = computed(
      () => 'Kidescreen ' + String(questionnaire.value.model)
    );

    const questions = computed(() => questionnaire.value.questions);

    function qAnswer(question: Question) {
      const labels = HEADER_LABELS[question.H];
      const option =
        question.P === PASC ? question.A : invertOption(question.A);
      return labels[option - 1];
      //return labels[option - 1] + ` (${question.A})`;
    }

    return { questionnaireModel, questions, qAnswer };
  },
});
</script>

<style lang="scss" scoped>
.table {
  tbody {
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    td {
      text-align: center;
      &:nth-child(2) {
        text-align: left;
      }
    }
  }
}
</style>
