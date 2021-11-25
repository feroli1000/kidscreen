<template>
  <div class="row text-left q-px-md">
    <div class="col">
      <div>
        <label>Data Nascimento:</label>
        <b>{{ birthday }}</b>
      </div>
      <div>
        <label>Sexo:</label>
        <b>{{ gender }}</b>
      </div>
    </div>
    <div class="col">
      <div>
        <label>Data Questionário:</label>
        <b>{{ answered }}</b>
      </div>
      <div v-if="isPersonTypeYoung">
        <label>Deficiência, doença ou problema médico crônico:</label>
        <b>{{ diseaseLabel }}</b>
      </div>
      <div v-if="isPersonTypeParent">
        <label>Pai / Tutor:</label>
        <b>{{ parentLabel }}</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
import { Questionnaire } from 'src/helpers/models';
import {
  YOUNG_TYPE,
  PARENT_TYPE,
  PARENTS_OPTIONS,
  ANOTHER_PARENT_OPTION,
} from 'src/helpers/constants';

export default defineComponent({
  setup() {
    const store = useStore();

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    const isPersonTypeYoung = computed(
      () => questionnaire.value.person_type === YOUNG_TYPE
    );
    const isPersonTypeParent = computed(
      () => questionnaire.value.person_type === PARENT_TYPE
    );

    const answered = questionnaire.value.answered_at;
    const birthday = questionnaire.value.birthday;
    const gender = computed(() =>
      questionnaire.value.gender === 'F' ? 'FEMININO' : 'MASCULINO'
    );

    const diseaseLabel = computed(() => {
      return questionnaire.value.disease === 1
        ? 'NÃO'
        : 'SIM - ' + questionnaire.value.disease_description;
    });

    const parentLabel = computed(() => {
      const parent = PARENTS_OPTIONS[questionnaire.value.parent - 1];
      return parent.value === ANOTHER_PARENT_OPTION
        ? parent.text + ' - ' + questionnaire.value.parent_description
        : parent.text;
    });

    return {
      answered,
      birthday,
      gender,
      diseaseLabel,
      parentLabel,
      isPersonTypeYoung,
      isPersonTypeParent,
    };
  },
});
</script>

<style lang="scss" scoped>
label {
  display: block;
}
</style>
