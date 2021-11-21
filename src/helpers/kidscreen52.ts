// import { HEADER_LABELS } from './constants';
import { QuestionInterface } from './models';
import { HEADER1, HEADER2, HEADER3 } from './constants';

/*    D = Dimension     N = Number     Q = Question      A = Answer    */

const QUESTIONS: QuestionInterface[] = [
  // Bem-estar Físico
  { D: 1, N: '1.1', Q: '', A: 0, H: HEADER1 },
  { D: 1, N: '1.2', Q: '', A: 0, H: HEADER2 },
  { D: 1, N: '1.3', Q: '', A: 0, H: HEADER2 },
  { D: 1, N: '1.4', Q: '', A: 0, H: HEADER2 },
  { D: 1, N: '1.5', Q: '', A: 0, H: HEADER3 },
  // Bem-estar Psicológico
  { D: 2, N: '2.1', Q: '', A: 0, H: HEADER2 },
  { D: 2, N: '2.2', Q: '', A: 0, H: HEADER2 },
  { D: 2, N: '2.3', Q: '', A: 0, H: HEADER2 },
  { D: 2, N: '2.4', Q: '', A: 0, H: HEADER3 },
  { D: 2, N: '2.5', Q: '', A: 0, H: HEADER3 },
  { D: 2, N: '2.6', Q: '', A: 0, H: HEADER3 },
  // Estado Emocional
  { D: 3, N: '3.1', Q: '', A: 0, H: HEADER3 },
  { D: 3, N: '3.2', Q: '', A: 0, H: HEADER3 },
  { D: 3, N: '3.3', Q: '', A: 0, H: HEADER3 },
  { D: 3, N: '3.4', Q: '', A: 0, H: HEADER3 },
  { D: 3, N: '3.5', Q: '', A: 0, H: HEADER3 },
  { D: 3, N: '3.6', Q: '', A: 0, H: HEADER3 },
  { D: 3, N: '3.7', Q: '', A: 0, H: HEADER3 },
  // Auto-Percepção
  { D: 4, N: '4.1', Q: '', A: 0, H: HEADER3 },
  { D: 4, N: '4.2', Q: '', A: 0, H: HEADER3 },
  { D: 4, N: '4.3', Q: '', A: 0, H: HEADER3 },
  { D: 4, N: '4.4', Q: '', A: 0, H: HEADER3 },
  { D: 4, N: '4.5', Q: '', A: 0, H: HEADER3 },
  // Autonomia
  { D: 5, N: '5.1', Q: '', A: 0, H: HEADER3 },
  { D: 5, N: '5.2', Q: '', A: 0, H: HEADER3 },
  { D: 5, N: '5.3', Q: '', A: 0, H: HEADER3 },
  { D: 5, N: '5.4', Q: '', A: 0, H: HEADER3 },
  { D: 5, N: '5.5', Q: '', A: 0, H: HEADER3 },
  // Família / Ambiente Familiar
  { D: 6, N: '6.1', Q: '', A: 0, H: HEADER2 },
  { D: 6, N: '6.2', Q: '', A: 0, H: HEADER2 },
  { D: 6, N: '6.3', Q: '', A: 0, H: HEADER3 },
  { D: 6, N: '6.4', Q: '', A: 0, H: HEADER3 },
  { D: 6, N: '6.5', Q: '', A: 0, H: HEADER3 },
  { D: 6, N: '6.6', Q: '', A: 0, H: HEADER3 },
  // Aspectos Financeiros
  { D: 7, N: '7.1', Q: '', A: 0, H: HEADER3 },
  { D: 7, N: '7.2', Q: '', A: 0, H: HEADER3 },
  { D: 7, N: '7.3', Q: '', A: 0, H: HEADER2 },
  // Amigos e Apoio Social
  { D: 8, N: '8.1', Q: '', A: 0, H: HEADER3 },
  { D: 8, N: '8.2', Q: '', A: 0, H: HEADER3 },
  { D: 8, N: '8.3', Q: '', A: 0, H: HEADER3 },
  { D: 8, N: '8.4', Q: '', A: 0, H: HEADER3 },
  { D: 8, N: '8.5', Q: '', A: 0, H: HEADER3 },
  { D: 8, N: '8.6', Q: '', A: 0, H: HEADER3 },
  // Ambiente Escolar
  { D: 9, N: '9.1', Q: '', A: 0, H: HEADER2 },
  { D: 9, N: '9.2', Q: '', A: 0, H: HEADER2 },
  { D: 9, N: '9.3', Q: '', A: 0, H: HEADER2 },
  { D: 9, N: '9.4', Q: '', A: 0, H: HEADER3 },
  { D: 9, N: '9.5', Q: '', A: 0, H: HEADER3 },
  { D: 9, N: '9.6', Q: '', A: 0, H: HEADER3 },
  // Provocação/Bullying
  { D: 10, N: '10.1', Q: '', A: 0, H: HEADER3 },
  { D: 10, N: '10.2', Q: '', A: 0, H: HEADER3 },
  { D: 10, N: '10.3', Q: '', A: 0, H: HEADER3 },
];

function findByPosition(posistion: number) {
  return { ...QUESTIONS[posistion] };
}

export { QUESTIONS, findByPosition };
