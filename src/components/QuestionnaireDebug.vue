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
        <td>{{ q.N }} - {{ q.A }}</td>
        <td :class="answer(1, q.A)">1</td>
        <td :class="answer(2, q.A)">2</td>
        <td :class="answer(3, q.A)">3</td>
        <td :class="answer(4, q.A)">4</td>
        <td :class="answer(5, q.A)">5</td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
import { Questionnaire } from 'src/helpers/models';

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

    function answer(option: number, answer: number) {
      return {
        'bg-orange': answer === option,
      };
    }

    return { questionnaireModel, questions, answer };
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
