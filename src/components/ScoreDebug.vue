<template>
  <div class="debug">
    <div>F: {{ formula }}</div>
    <div>R: <span v-html="answer"></span></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Questionnaire } from 'src/helpers/models';

export default defineComponent({
  props: {
    questionnaire: {
      type: Questionnaire,
      default: new Questionnaire(),
    },
    section: {
      type: Number,
      default: 0,
    },
    divider: {
      type: Number,
      default: 1, // avoid division by zero
    },
    is_index: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const section_questions = props.is_index
      ? props.questionnaire.questions
      : props.questionnaire.questions.filter(
          (elem) => elem.S === props.section
        );

    const formula = computed(() => {
      let nums = '';
      section_questions.forEach((elem, index) => {
        nums += String(elem.N);
        index < section_questions.length - 1 && (nums += ' + ');
      });
      if (props.is_index) {
        return (
          '(( Soma de todas as respostas) * 100) / ' + String(props.divider)
        );
      }
      return '((' + nums + ') * 100) / ' + String(props.divider);
    });

    const answer = computed(() => {
      const divider = props.divider;
      let nums = '';
      let sum = 0;

      section_questions.forEach((elem, index) => {
        nums += String(elem.A);
        sum += elem.A;
        index < section_questions.length - 1 && (nums += ' + ');
      });

      const result = parseFloat(((sum * 100) / divider).toFixed(1));
      return `((${nums} ) * 100) / ${divider}<br>&nbsp;&nbsp;&nbsp;&nbsp;(${sum} * 100) / ${divider} = ${result}`;
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
