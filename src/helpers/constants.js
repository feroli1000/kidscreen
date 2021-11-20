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

const SECTIONS_52 = [
  { S: 1, T: 'Bem-estar Físico' },
  { S: 2, T: 'Bem-estar Psicológico' },
  { S: 3, T: 'Estado Emocional' },
  { S: 4, T: 'Auto Percepção' },
  { S: 5, T: 'Autonomia' },
  { S: 6, T: 'Família/Ambiente Familiar' },
  { S: 7, T: 'Aspectos Financeiros' },
  { S: 8, T: 'Amigos e Apoio Social' },
  { S: 9, T: 'Ambiente Escolar' },
  { S: 10, T: 'Provocação/Bullyng' },
];

const SECTIONS_27 = [
  { S: 1, T: 'Bem-estar Físico' },
  { S: 2, T: 'Bem-estar Psicológico' },
  { S: 3, T: 'Autonomia e Relação com os Pais' },
  { S: 4, T: 'Amigos e Apoio Social' },
  { S: 9, T: 'Ambiente Escolar' },
];

const SECTIONS_10 = [
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
  SECTIONS_52,
  SECTIONS_27,
  SECTIONS_10,
};
