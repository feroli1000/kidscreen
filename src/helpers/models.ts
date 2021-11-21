// Used only here
/*export*/ interface QuestionnaireInterface {
  model: number;
  person_type: number;
  gender: string;
  birthday: string;
  parent: number;
  disease: number;
  disease_description: string;
  answered_at: string;
  questions: Question[];
  score: Score;
}

export class Questionnaire implements QuestionnaireInterface {
  public model: number;
  public person_type: number;
  public gender: string;
  public birthday: string;
  public parent: number;
  public disease: number;
  public disease_description: string;
  public answered_at: string;
  public questions: Question[];
  public score: Score;

  constructor() {
    this.model = 0;
    this.person_type = 0;
    this.gender = '';
    this.birthday = '';
    this.parent = 0;
    this.disease = 0;
    this.disease_description = '';
    this.answered_at = '';
    this.questions = [];
    this.score = new Score();
  }
}

export class Question {
  public D = 0; // Dimension
  public N = ''; // Number ('1.1', '2.6' ... )
  public Q = ''; // Question
  public A = 0; // Answer
  public H = 0; // Headers
}

export class Score {
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
  // Questionnaire 27 = 5 dimensions
  public Q27_1 = -1;
  public Q27_2 = -1;
  public Q27_3 = -1;
  public Q27_4 = -1;
  public Q27_5 = -1;
  // Questionnaire 10 have no dimensions
  //
  // Global Index
  public index = -1;
}

export interface OptionsInterface {
  value: number;
  text: string;
}
