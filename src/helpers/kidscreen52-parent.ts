import { HEADER_LABELS } from 'src/helpers/constants';

const HEADER1 = HEADER_LABELS[0]; //['Excelente', 'Muito boa', 'Boa', 'Regular', 'Mal'],
const HEADER2 = HEADER_LABELS[1];//['Nada', 'Um pouco', 'Moderadamente', 'Muito', 'Muitíssimo'],
const HEADER3 = HEADER_LABELS[2];//['Nunca', 'Quase nunca', 'Algumas vezes', 'Quase sempre', 'Sempre'],

const QUESTIONS = [
  // Bem-estar Físico
  { S: 1, N: '1.1', Q: '', A:0, H: HEADER1 },
  { S: 1, N: '1.2', Q: '', A:0, H: HEADER2 },
  { S: 1, N: '1.3', Q: '', A:0, H: HEADER2 },
  { S: 1, N: '1.4', Q: '', A:0, H: HEADER2 },
  { S: 1, N: '1.5', Q: '', A:0, H: HEADER3 },
  // Bem-estar Psicológico
  { S: 2, N: '2.1', Q: '', A:0, H: HEADER2 },
  { S: 2, N: '2.2', Q: '', A:0, H: HEADER2 },
  { S: 2, N: '2.3', Q: '', A:0, H: HEADER2 },
  { S: 2, N: '2.4', Q: '', A:0, H: HEADER3 },
  { S: 2, N: '2.5', Q: '', A:0, H: HEADER3 },
  { S: 2, N: '2.6', Q: '', A:0, H: HEADER3 },
  // Estado Emocional
  { S: 3, N: '3.1', Q: '', A:0, H: HEADER3 },
  { S: 3, N: '3.2', Q: '', A:0, H: HEADER3 },
  { S: 3, N: '3.3', Q: '', A:0, H: HEADER3 },
  { S: 3, N: '3.4', Q: '', A:0, H: HEADER3 },
  { S: 3, N: '3.5', Q: '', A:0, H: HEADER3 },
  { S: 3, N: '3.6', Q: '', A:0, H: HEADER3 },
  { S: 3, N: '3.7', Q: '', A:0, H: HEADER3 },
  // Auto-Percepção
  { S: 4, N: '4.1', Q: '', A:0, H: HEADER3 },
  { S: 4, N: '4.2', Q: '', A:0, H: HEADER3 },
  { S: 4, N: '4.3', Q: '', A:0, H: HEADER3 },
  { S: 4, N: '4.4', Q: '', A:0, H: HEADER3 },
  { S: 4, N: '4.5', Q: '', A:0, H: HEADER3 },
  // Autonomia
  { S: 5, N: '5.1', Q: '', A:0, H: HEADER3 },
  { S: 5, N: '5.2', Q: '', A:0, H: HEADER3 },
  { S: 5, N: '5.3', Q: '', A:0, H: HEADER3 },
  { S: 5, N: '5.4', Q: '', A:0, H: HEADER3 },
  { S: 5, N: '5.5', Q: '', A:0, H: HEADER3 },
  // Família / Ambiente Familiar
  { S: 6, N: '6.1', Q: '', A:0, H: HEADER2 },
  { S: 6, N: '6.2', Q: '', A:0, H: HEADER2 },
  { S: 6, N: '6.3', Q: '', A:0, H: HEADER3 },
  { S: 6, N: '6.4', Q: '', A:0, H: HEADER3 },
  { S: 6, N: '6.5', Q: '', A:0, H: HEADER3 },
  { S: 6, N: '6.6', Q: '', A:0, H: HEADER3 },
  // Aspectos Financeiros
  { S:7, N: '7.1', Q: '', A:0, H: HEADER3 },
  { S:7, N: '7.2', Q: '', A:0, H: HEADER3 },
  { S:7, N: '7.3', Q: '', A:0, H: HEADER2 },
  // Amigos e Apoio Social
  { S:8, N: '8.1', Q: '', A:0, H: HEADER3 },
  { S:8, N: '8.2', Q: '', A:0, H: HEADER3 },
  { S:8, N: '8.3', Q: '', A:0, H: HEADER3 },
  { S:8, N: '8.4', Q: '', A:0, H: HEADER3 },
  { S:8, N: '8.5', Q: '', A:0, H: HEADER3 },
  { S:8, N: '8.6', Q: '', A:0, H: HEADER3 },
  // Ambiente Escolar
  { S:9, N: '9.1', Q: '', A:0, H: HEADER2 },
  { S:9, N: '9.2', Q: '', A:0, H: HEADER2 },
  { S:9, N: '9.3', Q: '', A:0, H: HEADER2 },
  { S:9, N: '9.4', Q: '', A:0, H: HEADER3},
  { S:9, N: '9.5', Q: '', A:0, H: HEADER3 },
  { S:9, N: '9.6', Q: '', A:0, H: HEADER3 },
  // Provocação/Bullying
  { S:10, N: '10.1', Q: '', A:0, H: HEADER3 },
  { S:10, N: '10.2', Q: '', A:0, H: HEADER3 },
  { S:10, N: '10.3', Q: '', A:0, H: HEADER3 },
];

export default QUESTIONS;

