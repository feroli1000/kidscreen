import {
  Questionnaire,
  QuestionnaireInterface,
  Score,
  ScoreInterface,
} from './models';

/*
Questionnaire 52
Section 1 = ((1.1 + 1.2 + 1.3 + 1.4 + 1.5) * 100) / 25
Section 2 = ((2.1 + 2.2 + 2.3 + 2.4 + 2.5 + 2.6) * 100) / 30
Section 3 = ((3.1 + 3.2 + 3.3 + 3.4 + 3.5 + 3.6 + 3.7) * 100) / 35
Section 4 = ((4.1 + 4.2 + 4.3 + 4.4 + 4.5) * 100) / 25
Section 5 = ((5.1 + 5.2 + 5.3 + 5.4 + 5.5) * 100) / 25
Section 6 = ((6.1 + 6.2 + 6.3 + 6.4 + 6.5 + 6.6) * 100) / 30
Section 7 = ((7.1 + 7.2 + 7.3) * 100) / 15
Section 8 = ((8.1 + 8.2 + 8.3 + 8.4 + 8.5 + 8.6) * 100) / 30
Section 9 = ((9.1 + 9.2 + 9.3 + 9.4 + 9.5 + 9.6) * 100) / 30
Section 10 = ((10.1 + 10.2 + 10.3) * 100) / 15
Index = (Sum of 52 items) * 100 / 260
*/

function calcSectionQ52(
  questionnaire: QuestionnaireInterface,
  section: number
): number {
  const section_questions = questionnaire.questions.filter(
    (elem) => elem.S === section
  );
  let sum = 0;
  section_questions.forEach((elem) => {
    sum += elem.A;
  });
  //           [1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
  const divs = [25, 30, 35, 25, 25, 30, 15, 30, 30, 15];
  const ret = (sum * 100) / divs[section - 1];
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
  score.Q52_1 = calcSectionQ52(questionnaire, 1);
  score.Q52_2 = calcSectionQ52(questionnaire, 2);
  score.Q52_3 = calcSectionQ52(questionnaire, 3);
  score.Q52_4 = calcSectionQ52(questionnaire, 4);
  score.Q52_5 = calcSectionQ52(questionnaire, 5);
  score.Q52_6 = calcSectionQ52(questionnaire, 6);
  score.Q52_7 = calcSectionQ52(questionnaire, 7);
  score.Q52_8 = calcSectionQ52(questionnaire, 8);
  score.Q52_9 = calcSectionQ52(questionnaire, 9);
  score.Q52_10 = calcSectionQ52(questionnaire, 10);
  score.index = calcIndex52(questionnaire);
  return score;
}

/*
Questionnaire 27
Section 1 = ((1.1 + 1.2 + 1.3 + 1.4 + 1.5) * 100) / 25
Section 2 = ((2.1 + 2.2 + 2.3 + 2.4 + 2.5 + 2.6 + 2.7) * 100) / 35
Section 3 = ((3.1 + 3.2 + 3.3 + 3.4 + 3.5 + 3.6 + 3.7) * 100) / 35
Section 4 = ((4.1 + 4.2 + 4.3 + 4.4) * 100) / 20
Section 5 = ((5.1 + 5.2 + 5.3 + 5.4) * 100) / 20
Index = (Sum of 27 items) * 100 / 135
*/

function calcSectionQ27(
  questionnaire: QuestionnaireInterface,
  section: number
): number {
  const section_questions = questionnaire.questions.filter(
    (elem) => elem.S === section
  );
  let sum = 0;
  section_questions.forEach((elem) => {
    sum += elem.A;
  });
  //           [1,  2,  3,  4,  5]
  const divs = [25, 35, 35, 20, 20];
  const ret = (sum * 100) / divs[section - 1];
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
  score.Q27_1 = calcSectionQ27(questionnaire, 1);
  score.Q27_2 = calcSectionQ27(questionnaire, 1);
  score.Q27_3 = calcSectionQ27(questionnaire, 1);
  score.Q27_4 = calcSectionQ27(questionnaire, 1);
  score.Q27_5 = calcSectionQ27(questionnaire, 1);
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

export { calcScore52, calcScore27, calcScore10 };
