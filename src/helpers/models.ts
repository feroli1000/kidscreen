export interface QuestionInterface {
  S: number; // Section
  N: string; // Number ('1.1', '2.6' ... )
  Q: string; // Question
  A: number; // Answer
  H: number; // Headers
}

export interface QuestionnaireInterface {
  model: number;
  person_type: number;
  gender: string;
  birthday: string;
  disease: number;
  disease_description: string;
  questions: QuestionInterface[];
  score: ScoreInterface;
}

export class Questionnaire implements QuestionnaireInterface {
  public model: number;
  public person_type: number;
  public gender: string;
  public birthday: string;
  public disease: number;
  public disease_description: string;
  public questions: QuestionInterface[];
  public score: ScoreInterface;

  constructor() {
    this.model = 0;
    this.person_type = 0;
    this.gender = '';
    this.birthday = '';
    this.disease = 0;
    this.disease_description = '';
    this.questions = [];
    this.score = new Score();
  }
}

export interface ScoreInterface {
  // Questionário 52 = 10 dimensões
  Q52_1: number;
  Q52_2: number;
  Q52_3: number;
  Q52_4: number;
  Q52_5: number;
  Q52_6: number;
  Q52_7: number;
  Q52_8: number;
  Q52_9: number;
  Q52_10: number;
  // Questionário 27 = 5 dimensões
  Q27_1: number;
  Q27_2: number;
  Q27_3: number;
  Q27_4: number;
  Q27_5: number;
  // Questionário 10 não tem dimensões
  //
  // Índice global
  index: number;
}

export class Score implements ScoreInterface {
  public Q52_1 = -1;
  public Q52_2 = -1;
  public Q52_3 = -1;
  public Q52_4 = -1;
  public Q52_5 = -1;
  public Q52_6 = -1;
  public Q52_7 = -1;
  public Q52_8 = -1;
  public Q52_9 = -1;
  public Q52_10 = -1;
  public Q27_1 = -1;
  public Q27_2 = -1;
  public Q27_3 = -1;
  public Q27_4 = -1;
  public Q27_5 = -1;
  public index = -1;
}

export interface OptionsInterface {
  value: number;
  text: string;
}

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}
