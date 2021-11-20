<template>
  <q-page class="row items-center q-px-lg q-pb-xl">
    <Question
      :question="getQuestion()"
      :num="question.N"
      :key="active"
      class="full-width"
      @selected="setAnswer"
    />
    <q-btn
      size="xl"
      :color="canForward() ? 'green' : 'grey'"
      class="full-width"
      :label="'Avançar (' + active + ')'"
      icon-right="send"
      :disable="!canForward()"
      @click="forward"
    />
    <!-- <pre>{{ getQuestion() }}</pre> -->
    <QuestionnaireDebug class="q-mt-md" @all="fillAllQuestions" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import { useQuasar } from 'quasar';
import { useStore } from 'src/store';
import Question from 'components/Question.vue';
import QuestionnaireDebug from 'components/QuestionnaireDebug.vue';
import { findByPosition } from '../helpers/kidscreen52-young';
import { getRandomInt } from 'src/helpers';
import { calcScore52, calcScore27, calcScore10 } from 'src/helpers/kidscreen';
import {
  Questionnaire,
  QuestionInterface,
  Score,
  ScoreInterface,
} from 'src/helpers/models';
import {
  QUESTIONNARIE_52,
  QUESTIONNARIE_27,
  QUESTIONNARIE_10,
} from 'src/helpers/constants';

export default defineComponent({
  name: 'Questionnaire',
  components: {
    Question,
    QuestionnaireDebug,
  },
  setup() {
    const $q = useQuasar();
    const store = useStore();
    const router = useRouter();
    const active = ref(0);

    let question: QuestionInterface | undefined;
    question = reactive(findByPosition(0));

    const questionnaire = computed<Questionnaire>(
      () => store.state.questionnaire.questionnaire
    );

    const questionnaireModel = computed(() => questionnaire.value.model);

    onMounted(() => {
      // Deny direct url access
      if (questionnaire.value.model === 0) {
        router.push('/').catch(() => {
          /* Ignore */
        });
        return;
      }
      const questions_length = questionnaire.value.model;
      const actual_length = questionnaire.value.questions.length;
      const quest = getQuestionnaireClone();
      if (actual_length < questions_length) {
        for (let i = actual_length - 1; i < questions_length; i++) {
          quest.questions[i] = findByPosition(i);
        }
        store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
      }
      question = reactive({ ...quest.questions[0] });
    });

    onBeforeRouteLeave((/* to, from */) => {
      if (process.env.PROD && !isFinished()) {
        const answer = window.confirm(
          'Questionário não finalizado. Deseja realmente sair?'
        );
        // Cancel the navigation and stay on the same page
        if (!answer) {
          return false;
        }
      }
    });

    function getQuestionnaireClone() {
      return <Questionnaire>JSON.parse(JSON.stringify(questionnaire.value));
    }

    function questionsLength(): number {
      return questionnaire.value?.model;
    }

    function canForward() {
      //const answer = question?.A ?? 0;
      const answer = 1;
      return answer > 0 && active.value < questionsLength();
    }

    function getQuestion() {
      return question;
    }

    function isFinished(): boolean {
      return active.value === questionsLength() - 1;
    }

    function forward() {
      if (!canForward()) {
        $q.dialog({
          title: 'Atenção',
          message: 'A resposta deve ser selecionada',
        });
        return;
      }
      if (isFinished()) {
        calculateScore();

        $q.dialog({
          title: 'Questionário concluído',
          message: 'Muito obrigado pela sua participação',
        }).onDismiss(() => {
          router.push('/score').catch(() => {
            /* Ignore */
          });
        });
        return;
      }
      active.value++;
      question = reactive({ ...questionnaire.value.questions[active.value] });
    }

    function setAnswer(value: number) {
      if (typeof question === 'object') {
        question.A = value;
        const quest = getQuestionnaireClone();
        quest.questions[active.value] = { ...question };
        store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
      }
    }

    function calculateScore() {
      let score: ScoreInterface;
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
      console.log(questionnaireModel.value, score);
      const quest = getQuestionnaireClone();
      quest.score = { ...score };
      store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
    }

    function fillAllQuestions() {
      const quest = getQuestionnaireClone();
      for (let i = 0; i < questionsLength(); i++) {
        quest.questions[i].A = getRandomInt(1, 5);
      }
      store.commit('questionnaire/SET_QUESTIONNAIRE', quest);
      active.value = questionsLength() - 1;
      //forward();
      //typeof question === 'object' && (question.A = 3);
    }

    return {
      question,
      active,
      questionnaire,
      forward,
      canForward,
      setAnswer,
      getQuestion,
      fillAllQuestions,
    };
  },
});
</script>
