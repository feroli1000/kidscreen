import { Question } from './models';
import { HEADER1, HEADER2, HEADER3, PASC, PDESC } from './constants';

/*    D = Dimension     N = Number     Q = Question      A = Answer     P = Punctuation    */

export const QUESTIONS: Question[] = [
  // 1 - Bem-estar Físico
  { D: 1, N: '1.1', Q: '', A: 0, H: HEADER1, P: PDESC },
  { D: 1, N: '1.2', Q: '', A: 0, H: HEADER2, P: PASC },
  { D: 1, N: '1.3', Q: '', A: 0, H: HEADER2, P: PASC },
  { D: 1, N: '1.4', Q: '', A: 0, H: HEADER2, P: PASC },
  { D: 1, N: '1.5', Q: '', A: 0, H: HEADER3, P: PASC },
  // 2 - Bem-estar Psicológico
  { D: 2, N: '2.1', Q: '', A: 0, H: HEADER2, P: PASC },
  { D: 2, N: '2.2', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 2, N: '2.3', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 2, N: '2.4', Q: '', A: 0, H: HEADER3, P: PDESC },
  { D: 2, N: '2.5', Q: '', A: 0, H: HEADER3, P: PDESC },
  { D: 2, N: '2.6', Q: '', A: 0, H: HEADER3, P: PDESC },
  { D: 2, N: '2.7', Q: '', A: 0, H: HEADER3, P: PASC },
  // 3 - Autonomia e relação com os pais
  { D: 3, N: '3.1', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 3, N: '3.2', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 3, N: '3.3', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 3, N: '3.4', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 3, N: '3.5', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 3, N: '3.6', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 3, N: '3.7', Q: '', A: 0, H: HEADER3, P: PASC },
  // 4 - Amigos e apoios social
  { D: 4, N: '4.1', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 4, N: '4.2', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 4, N: '4.3', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 4, N: '4.4', Q: '', A: 0, H: HEADER3, P: PASC },
  // 5 - Ambiente Escolar
  { D: 5, N: '5.1', Q: '', A: 0, H: HEADER2, P: PASC },
  { D: 5, N: '5.2', Q: '', A: 0, H: HEADER2, P: PASC },
  { D: 5, N: '5.3', Q: '', A: 0, H: HEADER3, P: PASC },
  { D: 5, N: '5.4', Q: '', A: 0, H: HEADER3, P: PASC },
];
