const YOUNG_TYPE = 1;
const PARENT_TYPE = 2;

const QUESTIONNAIRES = ['kidscreen52', 'kidscreen27', 'kidscreen10'];

const QUESTIONNARIE_52 = 52;
const QUESTIONNARIE_27 = 27;
const QUESTIONNARIE_10 = 10;

const HEADER_LABELS = [
  ['Excelente', 'Muito boa', 'Boa', 'Regular', 'Mal'],
  ['Nada', 'Um pouco', 'Moderadamente', 'Muito', 'Muitíssimo'],
  ['Nunca', 'Quase nunca', 'Algumas vezes', 'Quase sempre', 'Sempre'],
];

const HEADER1 = 0; // HEADER_LABELS[0]; ['Excelente', 'Muito boa', 'Boa', 'Regular', 'Mal'],
const HEADER2 = 1; // HEADER_LABELS[1]; ['Nada', 'Um pouco', 'Moderadamente', 'Muito', 'Muitíssimo'],
const HEADER3 = 2; // HEADER_LABELS[2]; ['Nunca', 'Quase nunca', 'Algumas vezes', 'Quase sempre', 'Sempre'],

const DIMENSIONS_52 = [
  { D: 1, T: 'Bem-estar Físico' },
  { D: 2, T: 'Bem-estar Psicológico' },
  { D: 3, T: 'Estado Emocional' },
  { D: 4, T: 'Auto Percepção' },
  { D: 5, T: 'Autonomia' },
  { D: 6, T: 'Família/Ambiente Familiar' },
  { D: 7, T: 'Aspectos Financeiros' },
  { D: 8, T: 'Amigos e Apoio Social' },
  { D: 9, T: 'Ambiente Escolar' },
  { D: 10, T: 'Provocação/Bullyng' },
];

const DIMENSIONS_27 = [
  { D: 1, T: 'Bem-estar Físico' },
  { D: 2, T: 'Bem-estar Psicológico' },
  { D: 3, T: 'Autonomia e Relação com os Pais' },
  { D: 4, T: 'Amigos e Apoio Social' },
  { D: 9, T: 'Ambiente Escolar' },
];

const DIMENSIONS_10 = [
  /* Empty */
];

export {
  YOUNG_TYPE,
  PARENT_TYPE,
  QUESTIONNAIRES,
  QUESTIONNARIE_10,
  QUESTIONNARIE_27,
  QUESTIONNARIE_52,
  HEADER_LABELS,
  HEADER1,
  HEADER2,
  HEADER3,
  DIMENSIONS_52,
  DIMENSIONS_27,
  DIMENSIONS_10,
};
