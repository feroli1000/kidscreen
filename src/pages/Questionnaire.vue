<template>
  <q-page class="q-px-lg q-pt-md q-pb-xl">
    <QuestionContainer
      :question="getQuestion()"
      :key="active"
      class="full-width"
      @selected="setAnswer"
    />
    <q-btn
      size="xl"
      :color="canForward ? 'green' : 'grey'"
      class="full-width q-mt-md"
      label="Avançar"
      icon-right="send"
      :disable="!canForward"
      @click="forward"
    />
    <div v-if="isDevelopmentMode()">
      {{ currentAnswer }} {{ canForward }} {{ getQuestion() }}
    </div>
    <div class="text-h5 text-center q-mt-md">{{ questionOfLength }}</div>
    <QuestionnaireDebug
      v-if="isDevelopmentMode()"
      class="q-mt-xl"
      :button_all="isDevelopmentMode()"
      @all="fillAllForDevelpment"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import { useQuasar } from 'quasar';
import { useStore } from 'src/store';
import QuestionContainer from 'components/QuestionContainer.vue';
import QuestionnaireDebug from 'components/QuestionnaireDebug.vue';
import { getRandomInt, isDevelopmentMode } from 'src/helpers';
import { Questionnaire, Question, Score } from 'src/helpers/models';
import {
  findQuestionByIndex,
  getQuestionnaireClone,
  calcScore52,
  calcScore27,
  calcScore10,
} from 'src/helpers/kidscreen';
import {
  QUESTIONNARIE_52,
  QUESTIONNARIE_27,
  QUESTIONNARIE_10,
} from 'src/helpers/constants';

export default defineComponent({
  name: 'Questionnaire',
  components: {
    QuestionContainer,
    QuestionnaireDebug,
  },
  setup() {
    const $q = useQuasar();
    const store = useStore();
    const router = useRouter();
    const active = ref(0);
    const currentAnswer = ref(0);

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    const questionnaireModel = computed(() => questionnaire.value.model);
    const questionnaireType = computed(() => questionnaire.value.person_type);
    const questionsLength = computed(() => questionnaire.value.model);

    const canForward = computed(
      () => currentAnswer.value > 0 && active.value < questionsLength.value
    );

    const isFinished = computed(
      () => active.value === questionsLength.value - 1
    );

    const questionOfLength = computed(
      () => `${active.value + 1} de  ${questionsLength.value}`
    );

    let currentQuestion: Question = reactive(
      findQuestionByIndex(questionnaireModel.value, questionnaireType.value, 0)
    );

    onMounted(() => {
      // Deny direct url access
      if (questionnaire.value.model === 0) {
        router.push('/').catch(() => {
          /* Ignore */
        });
        return;
      }
      // Fill all questions
      const questions_length = questionnaire.value.model;
      const actual_length = questionnaire.value.questions.length;
      const quest = getQuestionnaireClone(questionnaire.value);

      if (actual_length < questions_length) {
        for (let i = actual_length - 1; i < questions_length; i++) {
          quest.questions[i] = findQuestionByIndex(
            questionnaireModel.value,
            questionnaireType.value,
            i
          );
        }
        store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
      }
      currentQuestion = reactive({ ...quest.questions[0] });
    });

    onBeforeRouteLeave((/* to, from */) => {
      if (process.env.PROD && !isFinished.value) {
        const answer = window.confirm(
          'Questionário não finalizado. Deseja realmente sair?'
        );
        // Cancel the navigation and stay on the same page
        if (!answer) {
          return false;
        }
      }
    });

    function getQuestion() {
      return currentQuestion;
    }

    function forward() {
      if (!canForward.value) {
        $q.dialog({
          title: 'Atenção',
          message: 'A resposta deve ser selecionada',
        });
        return;
      }

      if (isFinished.value) {
        calculateScore();

        $q.dialog({
          message:
            '<div class="text-h5 q-my-lg text-center">Questionário concluído</div>',
          html: true,
          ok: {
            label: 'RESULTADOS',
            color: 'blue-10',
            size: 'lg',
            class: 'q-mx-xl full-width',
          },
        }).onDismiss(() => {
          router.push('/score').catch(() => {
            /* Ignore */
          });
        });
        return;
      }
      currentAnswer.value = 0;
      active.value++;
      currentQuestion = reactive({
        ...questionnaire.value.questions[active.value],
      });
    }

    function setAnswer(value: number) {
      if (typeof currentQuestion === 'object') {
        currentQuestion.A = value;
        currentAnswer.value = value;
        const quest = getQuestionnaireClone(questionnaire.value);
        quest.questions[active.value] = { ...currentQuestion };
        store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
      }
    }

    function calculateScore(): void {
      let score: Score;
      switch (questionnaireModel.value) {
        case QUESTIONNARIE_52:
          score = calcScore52(questionnaire.value);
          break;
        case QUESTIONNARIE_27:
          score = calcScore27(questionnaire.value);
          break;
        case QUESTIONNARIE_10:
          score = calcScore10(questionnaire.value);
          break;
        default:
          score = new Score();
      }
      const quest = getQuestionnaireClone(questionnaire.value);
      quest.score = { ...score };
      store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
    }

    function fillAllForDevelpment() {
      const quest = getQuestionnaireClone(questionnaire.value);
      for (let i = 0; i < questionsLength.value; i++) {
        quest.questions[i].A = getRandomInt(1, 5);
      }
      store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
      active.value = questionsLength.value - 1;
      currentAnswer.value = quest.questions[active.value].A;
      currentQuestion = reactive({
        ...questionnaire.value.questions[active.value],
      });
    }

    return {
      active,
      questionnaire,
      currentAnswer,
      canForward,
      questionOfLength,
      forward,
      setAnswer,
      getQuestion,
      isDevelopmentMode,
      fillAllForDevelpment,
    };
  },
});
</script>
