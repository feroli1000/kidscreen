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
      <!-- <div>{{ num }} - {{ selected }}</div> -->
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { QuestionInterface } from 'src/helpers/models';
import { HEADER_LABELS, DIMENSIONS_52 } from 'src/helpers/constants';

export default defineComponent({
  name: 'Question',
  emits: ['selected'],
  props: {
    question: {
      type: Object as () => QuestionInterface | null,
    },
  },
  setup(props, { emit }) {
    const selected = ref(0);

    const dimensions = computed(() => {
      return DIMENSIONS_52;
    });

    const dimensionText = computed(() => {
      const questionDimension = props.question?.D ?? 0;
      const dimension = dimensions.value.find(
        (elem) => elem.D === questionDimension
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
    }

    function colorButton(option: number) {
      return option === props.question?.A ? 'purple' : 'white';
      //return option === selected.value ? 'purple' : 'white';
    }

    function textColorButton(option: number) {
      return option === props.question?.A ? 'white' : 'black';
      //return option === selected.value ? 'white' : 'black';
    }

    function selectOption(option: number) {
      selected.value = option;
      emit('selected', selected.value);
    }

    return {
      dimensionText,
      questionText,
      selectOption,
      optionText,
      colorButton,
      textColorButton,
      selected,
    };
  },
});
</script>
