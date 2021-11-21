import {
  Question,
  Questionnaire,
  QuestionnaireInterface,
  Score,
  ScoreInterface,
} from './models';
import {
  YOUNG_TYPE,
  PARENT_TYPE,
  QUESTIONNARIE_52,
  QUESTIONNARIE_27,
  QUESTIONNARIE_10,
} from './constants';
import {
  Q52_YOUNG_QUESTIONS,
  Q52_PARENT_QUESTIONS,
  Q27_YOUNG_QUESTIONS,
  Q27_PARENT_QUESTIONS,
  Q10_YOUNG_QUESTIONS,
  Q10_PARENT_QUESTIONS,
} from './kidscreen-pt';
import { QUESTIONS as QUESTIONS_52 } from './kidscreen52';
import { QUESTIONS as QUESTIONS_27 } from './kidscreen27';
import { QUESTIONS as QUESTIONS_10 } from './kidscreen10';

function findQuestionByIndex(
  model: number,
  person_type: number,
  index: number
): Question {
  if (model === QUESTIONNARIE_52) {
    const question = <Question>{ ...QUESTIONS_52[index] };
    person_type === YOUNG_TYPE && (question.Q = Q52_YOUNG_QUESTIONS[index]);
    person_type === PARENT_TYPE && (question.Q = Q52_PARENT_QUESTIONS[index]);
    return question;
  }
  if (model === QUESTIONNARIE_27) {
    const question = <Question>{ ...QUESTIONS_27[index] };
    person_type === YOUNG_TYPE && (question.Q = Q27_YOUNG_QUESTIONS[index]);
    person_type === PARENT_TYPE && (question.Q = Q27_PARENT_QUESTIONS[index]);
    return question;
  }
  if (model === QUESTIONNARIE_10) {
    const question = <Question>{ ...QUESTIONS_10[index] };
    person_type === YOUNG_TYPE && (question.Q = Q10_YOUNG_QUESTIONS[index]);
    person_type === PARENT_TYPE && (question.Q = Q10_PARENT_QUESTIONS[index]);
    return question;
  }
  return new Question();
}

/*
Questionnaire 52
Dimension 1 = ((1.1 + 1.2 + 1.3 + 1.4 + 1.5) * 100) / 25
Dimension 2 = ((2.1 + 2.2 + 2.3 + 2.4 + 2.5 + 2.6) * 100) / 30
Dimension 3 = ((3.1 + 3.2 + 3.3 + 3.4 + 3.5 + 3.6 + 3.7) * 100) / 35
Dimension 4 = ((4.1 + 4.2 + 4.3 + 4.4 + 4.5) * 100) / 25
Dimension 5 = ((5.1 + 5.2 + 5.3 + 5.4 + 5.5) * 100) / 25
Dimension 6 = ((6.1 + 6.2 + 6.3 + 6.4 + 6.5 + 6.6) * 100) / 30
Dimension 7 = ((7.1 + 7.2 + 7.3) * 100) / 15
Dimension 8 = ((8.1 + 8.2 + 8.3 + 8.4 + 8.5 + 8.6) * 100) / 30
Dimension 9 = ((9.1 + 9.2 + 9.3 + 9.4 + 9.5 + 9.6) * 100) / 30
Dimension 10 = ((10.1 + 10.2 + 10.3) * 100) / 15
Index = (Sum of 52 items) * 100 / 260
*/

function calcDimensionQ52(
  questionnaire: QuestionnaireInterface,
  dimension: number
): number {
  const dimension_questions = questionnaire.questions.filter(
    (elem) => elem.D === dimension
  );
  let sum = 0;
  dimension_questions.forEach((elem) => {
    sum += elem.A;
  });
  //           [1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
  const divs = [25, 30, 35, 25, 25, 30, 15, 30, 30, 15];
  const ret = (sum * 100) / divs[dimension - 1];
  return parseFloat(ret.toFixed(1));
}

function calcIndex52(questionnaire: QuestionnaireInterface): number {
  let sum = 0;
  questionnaire.questions.forEach((elem) => {
    sum += elem.A;
  });
  const index = (sum * 100) / 260;
  return parseFloat(index.toFixed(1));
}

function calcScore52(questionnaire: Questionnaire): ScoreInterface {
  const score = new Score();
  score.Q52_1 = calcDimensionQ52(questionnaire, 1);
  score.Q52_2 = calcDimensionQ52(questionnaire, 2);
  score.Q52_3 = calcDimensionQ52(questionnaire, 3);
  score.Q52_4 = calcDimensionQ52(questionnaire, 4);
  score.Q52_5 = calcDimensionQ52(questionnaire, 5);
  score.Q52_6 = calcDimensionQ52(questionnaire, 6);
  score.Q52_7 = calcDimensionQ52(questionnaire, 7);
  score.Q52_8 = calcDimensionQ52(questionnaire, 8);
  score.Q52_9 = calcDimensionQ52(questionnaire, 9);
  score.Q52_10 = calcDimensionQ52(questionnaire, 10);
  score.index = calcIndex52(questionnaire);
  return score;
}

/*
Questionnaire 27
Dimension 1 = ((1.1 + 1.2 + 1.3 + 1.4 + 1.5) * 100) / 25
Dimension 2 = ((2.1 + 2.2 + 2.3 + 2.4 + 2.5 + 2.6 + 2.7) * 100) / 35
Dimension 3 = ((3.1 + 3.2 + 3.3 + 3.4 + 3.5 + 3.6 + 3.7) * 100) / 35
Dimension 4 = ((4.1 + 4.2 + 4.3 + 4.4) * 100) / 20
Dimension 5 = ((5.1 + 5.2 + 5.3 + 5.4) * 100) / 20
Index = (Sum of 27 items) * 100 / 135
*/

function calcDimensionQ27(
  questionnaire: QuestionnaireInterface,
  dimension: number
): number {
  const dimension_questions = questionnaire.questions.filter(
    (elem) => elem.D === dimension
  );
  let sum = 0;
  dimension_questions.forEach((elem) => {
    sum += elem.A;
  });
  //           [1,  2,  3,  4,  5]
  const divs = [25, 35, 35, 20, 20];
  const ret = (sum * 100) / divs[dimension - 1];
  return parseFloat(ret.toFixed(1));
}

function calcIndex27(questionnaire: QuestionnaireInterface): number {
  let sum = 0;
  questionnaire.questions.forEach((elem) => {
    sum += elem.A;
  });
  const index = (sum * 100) / 135;
  return parseFloat(index.toFixed(1));
}

function calcScore27(questionnaire: QuestionnaireInterface): ScoreInterface {
  const score = new Score();
  score.Q27_1 = calcDimensionQ27(questionnaire, 1);
  score.Q27_2 = calcDimensionQ27(questionnaire, 2);
  score.Q27_3 = calcDimensionQ27(questionnaire, 3);
  score.Q27_4 = calcDimensionQ27(questionnaire, 4);
  score.Q27_5 = calcDimensionQ27(questionnaire, 5);
  score.index = calcIndex27(questionnaire);
  return score;
}

/*
Questionnaire 10
Index = (Sum of 10 items) * 100 / 50
*/

function calcScore10(questionnaire: QuestionnaireInterface): ScoreInterface {
  const score = new Score();
  let sum = 0;
  questionnaire.questions.forEach((elem) => {
    sum += elem.A;
  });
  const index = (sum * 100) / 50;
  score.index = parseFloat(index.toFixed(1));
  return score;
}

export { findQuestionByIndex, calcScore52, calcScore27, calcScore10 };
