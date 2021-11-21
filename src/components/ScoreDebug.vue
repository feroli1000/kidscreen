<template>
  <div class="debug">
    <div>F: {{ formula }}</div>
    <div>R: <span v-html="answer"></span></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
import { Questionnaire } from 'src/helpers/models';

export default defineComponent({
  props: {
    dimension: {
      type: Number,
      default: 0,
    },
    divisor: {
      type: Number,
      default: 1, // avoid division by zero
    },
    is_index: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    const dimension_questions = props.is_index
      ? questionnaire.value.questions
      : questionnaire.value.questions.filter(
          (elem) => elem.D === props.dimension
        );

    const formula = computed(() => {
      let nums = '';
      dimension_questions.forEach((elem, index) => {
        nums += String(elem.N);
        index < dimension_questions.length - 1 && (nums += ' + ');
      });
      if (props.is_index) {
        return (
          '(( Soma de todas as respostas) * 100) / ' + String(props.divisor)
        );
      }
      return '((' + nums + ') * 100) / ' + String(props.divisor);
    });

    const answer = computed(() => {
      const divisor = props.divisor;
      let nums = '';
      let sum = 0;

      dimension_questions.forEach((elem, index) => {
        nums += String(elem.A);
        sum += elem.A;
        index < dimension_questions.length - 1 && (nums += ' + ');
      });

      const result = parseFloat(((sum * 100) / divisor).toFixed(1));
      return `((${nums} ) * 100) / ${divisor}<br>&nbsp;&nbsp;&nbsp;&nbsp;(${sum} * 100) / ${divisor} = ${result}`;
    });

    return { formula, answer };
  },
});
</script>

<style lang="scss" scoped>
.debug {
  font-size: 10px;
  font-weight: normal;
}
</style>
