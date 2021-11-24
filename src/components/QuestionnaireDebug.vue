<template>
  <q-markup-table dense bordered square separator="cell" class="table">
    <caption>
      <div>
        {{ questionnaireModel }}
        <q-btn
          v-if="button_all"
          label="Todas"
          size="xs"
          class="q-ma-sm"
          @click="$emit('all')"
        />
      </div>
    </caption>
    <tbody>
      <tr v-for="q in questions" :key="q">
        <td>{{ q.N }}</td>
        <td :class="qAnswer(1, q)">{{ qPunctuation(1, q.P) }}</td>
        <td :class="qAnswer(2, q)">{{ qPunctuation(2, q.P) }}</td>
        <td :class="qAnswer(3, q)">{{ qPunctuation(3, q.P) }}</td>
        <td :class="qAnswer(4, q)">{{ qPunctuation(4, q.P) }}</td>
        <td :class="qAnswer(5, q)">{{ qPunctuation(5, q.P) }}</td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
import { PASC } from 'src/helpers/constants';
import { invertOption } from 'src/helpers/kidscreen';
import { Questionnaire, Question } from 'src/helpers/models';

export default defineComponent({
  name: 'QuestionnaireDebug',
  emits: ['all'],
  props: {
    button_all: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const store = useStore();

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    const questionnaireModel = computed(
      () => 'Kidescreen ' + String(questionnaire.value.model)
    );

    const questions = computed(() => questionnaire.value.questions);

    function qAnswer(option: number, question: Question) {
      const val = question.P === PASC ? question.A : invertOption(question.A);
      return {
        'bg-orange': val === option,
      };
    }

    function qPunctuation(option: number, punctuation: number) {
      const values = punctuation === PASC ? [1, 2, 3, 4, 5] : [5, 4, 3, 2, 1];
      return String(values[option - 1]);
    }

    return { questionnaireModel, questions, qAnswer, qPunctuation };
  },
});
</script>

<style lang="scss" scoped>
.table {
  tbody {
    td {
      text-align: center;
      &:nth-child(1) {
        text-align: left;
      }
    }
  }
}
</style>
