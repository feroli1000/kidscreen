import { OptionsType } from './models';

export const YOUNG_TYPE = 1;
export const PARENT_TYPE = 2;

export const HAS_DISEASE_OPTION = 2;
export const ANOTHER_PARENT_OPTION = 7;

export const QUESTIONNAIRES = ['kidscreen52', 'kidscreen27', 'kidscreen10'];

export const QUESTIONNARIE_52 = 52;
export const QUESTIONNARIE_27 = 27;
export const QUESTIONNARIE_10 = 10;

export const HEADER_LABELS = [
  ['Excelente', 'Muito boa', 'Boa', 'Regular', 'Mal'],
  ['Nada', 'Um pouco', 'Moderadamente', 'Muito', 'Muitíssimo'],
  ['Nunca', 'Quase nunca', 'Algumas vezes', 'Quase sempre', 'Sempre'],
];

export const HEADER1 = 0; // HEADER_LABELS[0];
export const HEADER2 = 1; // HEADER_LABELS[1];
export const HEADER3 = 2; // HEADER_LABELS[2];

/**
 * Punctuation Ascendant [1..5]
 * @var Number
 */
export const PASC = 1;

/**
 * Punctuation Descendant [5..1]
 * @var Number
 */
export const PDESC = 2; 

export const PARENTS_OPTIONS: OptionsType[] = [
  { value: 1, text: 'Mãe' },
  { value: 2, text: 'Pai' },
  { value: 3, text: 'Madrasta / Companheira do pai' },
  { value: 4, text: 'Padrasto / Companheiro da mãe' },
  { value: 5, text: 'Avó' },
  { value: 6, text: 'Avô' },
  { value: 7, text: 'Outro' },
];

export const GENDERS_OPTIONS: OptionsType[] = [
  { value: 1, text: 'Feminino' },
  { value: 2, text: 'Masculino' },
];

export const NO_YES_OPTIONS: OptionsType[] = [
  { value: 1, text: 'Não' },
  { value: 2, text: 'Sim' },
];

export const DIMENSIONS_52 = [
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

export const DIMENSIONS_27 = [
  { D: 1, T: 'Bem-estar Físico' },
  { D: 2, T: 'Bem-estar Psicológico' },
  { D: 3, T: 'Autonomia e Relação com os Pais' },
  { D: 4, T: 'Amigos e Apoio Social' },
  { D: 9, T: 'Ambiente Escolar' },
];

export const DIMENSIONS_10 = [
  /* Empty */
];
