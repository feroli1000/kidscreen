<template>
  <q-card class="q-pb-md">
    <q-card-section>
      <div class="text-center">
        {{ dimensionText }} <br />
        Considerando a última semana:
      </div>
      <div class="text-h6 text-bold q-mt-sm">{{ questionText }}</div>
    </q-card-section>
    <q-card-section
      ><div>
        <q-btn
          v-for="b in 5"
          :key="b"
          class="full-width q-my-sm"
          :text-color="textColorButton(b)"
          :color="colorButton(b)"
          :label="optionText(b)"
          @click="selectOption(b)"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { Question } from 'src/helpers/models';
import { invertOption } from 'src/helpers/kidscreen';
import {
  HEADER_LABELS,
  DIMENSIONS_52,
  PASC,
  PDESC,
} from 'src/helpers/constants';

export default defineComponent({
  name: 'QuestionContainer',
  emits: ['selected'],
  props: {
    question: {
      type: Object as () => Question | null,
    },
  },
  setup(props, { emit }) {
    const selected = ref(0);

    const dimensions = computed(() => {
      return DIMENSIONS_52;
    });

    const dimensionText = computed(() => {
      const question_dimension = props.question?.D ?? 0;
      const dimension = dimensions.value.find(
        (elem) => elem.D === question_dimension
      );
      return dimension?.T;
    });

    const questionText = computed(() => {
      const num = props.question?.N ?? '';
      const ques = props.question?.Q ?? '';
      return `${num} - ${ques}`;
    });

    function optionText(option: number) {
      const idx = props.question?.H ?? -1;
      const texts = HEADER_LABELS[idx];
      return texts[option - 1];
      //return texts[option - 1] + ` (${optionsValues()[option - 1]})`;
    }

    function colorButton(option: number) {
      if (props.question?.P === PDESC) {
        option = invertOption(option);
      }
      return option === props.question?.A ? 'purple' : 'white';
      //return option === selected.value ? 'purple' : 'white';
    }

    function textColorButton(option: number) {
      if (props.question?.P === PDESC) {
        option = invertOption(option);
      }
      return option === props.question?.A ? 'white' : 'black';
      //return option === selected.value ? 'white' : 'black';
    }

    function selectOption(option: number) {
      const options = optionsValues();
      selected.value = options[option - 1];
      emit('selected', selected.value);
    }

    function optionsValues() {
      return props.question?.P === PASC ? [1, 2, 3, 4, 5] : [5, 4, 3, 2, 1];
    }

    return {
      dimensionText,
      questionText,
      selectOption,
      optionText,
      colorButton,
      textColorButton,
    };
  },
});
</script>
