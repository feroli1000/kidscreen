// import { HEADER_LABELS } from './constants';
import { QuestionInterface } from './models';

const HEADER1 = 0 // HEADER_LABELS[0]; ['Excelente', 'Muito boa', 'Boa', 'Regular', 'Mal'],
const HEADER2 = 1 // HEADER_LABELS[1]; ['Nada', 'Um pouco', 'Moderadamente', 'Muito', 'Muitíssimo'],
const HEADER3 = 2 // HEADER_LABELS[2]; ['Nunca', 'Quase nunca', 'Algumas vezes', 'Quase sempre', 'Sempre'],

/*    S = Section     N = Number     Q = Question      A = Answer    */

const QUESTIONS : QuestionInterface[] = [
  // Bem-estar Físico
  { S: 1, N: '1.1', Q: 'De maneira geral, como você descreve a sua saúde?', A:0, H: HEADER1 },
  { S: 1, N: '1.2', Q: 'Você se sentiu bem e em boa forma?', A:0, H: HEADER2 },
  { S: 1, N: '1.3', Q: 'Você foi ativo/a fisicamente? (por exemplo, correu, andou de bicicleta, etc.)?', A:0, H: HEADER2 },
  { S: 1, N: '1.4', Q: 'Você foi capaz de correr (“brincadeiras de corrida”)?', A:0, H: HEADER2 },
  { S: 1, N: '1.5', Q: 'Você se sentiu com muita energia/ disposição?', A:0, H: HEADER3 },
  // Bem-estar Psicológico
  { S: 2, N: '2.1', Q: 'Sua vida tem sido agradável?', A:0, H: HEADER2 },
  { S: 2, N: '2.2', Q: 'Você se sentiu bem por estar vivo/a?', A:0, H: HEADER2 },
  { S: 2, N: '2.3', Q: 'Você se sentiu satisfeito/a com sua vida?', A:0, H: HEADER2 },
  { S: 2, N: '2.4', Q: 'Você se sentiu de bom humor?', A:0, H: HEADER3 },
  { S: 2, N: '2.5', Q: 'Você se sentiu alegre?', A:0, H: HEADER3 },
  { S: 2, N: '2.6', Q: 'Você se divertiu?', A:0, H: HEADER3 },
  // Estado Emocional
  { S: 3, N: '3.1', Q: 'Você se sentiu como estivesse feito tudo errado?', A:0, H: HEADER3 },
  { S: 3, N: '3.2', Q: 'Você se sentiu triste?', A:0, H: HEADER3 },
  { S: 3, N: '3.3', Q: 'Você se sentiu tão mal que não queria fazer nada?', A:0, H: HEADER3 },
  { S: 3, N: '3.4', Q: 'Você se sentiu como tudo em sua vida estava mal?', A:0, H: HEADER3 },
  { S: 3, N: '3.5', Q: 'Você se sentiu farto/a (cheio/a)?', A:0, H: HEADER3 },
  { S: 3, N: '3.6', Q: 'Você se sentiu sozinho?', A:0, H: HEADER3 },
  { S: 3, N: '3.7', Q: 'Você se sentiu pressionado (“estressado”)?', A:0, H: HEADER3 },
  // Auto-Percepção
  { S: 4, N: '4.1', Q: 'Você se sentiu contente com a sua maneira de ser?', A:0, H: HEADER3 },
  { S: 4, N: '4.2', Q: 'Você se sentiu contente com as suas roupas?', A:0, H: HEADER3 },
  { S: 4, N: '4.3', Q: 'Você esteve preocupado/a com a sua aparência?', A:0, H: HEADER3 },
  { S: 4, N: '4.4', Q: 'Você sentiu inveja da aparência de seus colegas?', A:0, H: HEADER3 },
  { S: 4, N: '4.5', Q: 'Você gostaria de mudar alguma parte do seu corpo?', A:0, H: HEADER3 },
  // Autonomia
  { S: 5, N: '5.1', Q: 'Você teve tempo suficiente para você mesmo?', A:0, H: HEADER3 },
  { S: 5, N: '5.2', Q: 'Você fez o que gosta de fazer no seu tempo livre?', A:0, H: HEADER3 },
  { S: 5, N: '5.3', Q: 'Você teve oportunidade suficiente de estar ao ar livre?', A:0, H: HEADER3 },
  { S: 5, N: '5.4', Q: 'Você teve tempo suficiente para encontrar os amigos/as?', A:0, H: HEADER3 },
  { S: 5, N: '5.5', Q: 'Você escolheu o que fazer no seu tempo livre?', A:0, H: HEADER3 },
  // Família / Ambiente Familiar
  { S: 6, N: '6.1', Q: 'Seus pais entendem você?', A:0, H: HEADER2 },
  { S: 6, N: '6.2', Q: 'Você se sentiu amado/a pelos seus pais?', A:0, H: HEADER2 },
  { S: 6, N: '6.3', Q: 'Você se sentiu feliz em sua casa?', A:0, H: HEADER3 },
  { S: 6, N: '6.4', Q: 'Seus pais tiveram tempo suficiente para você?', A:0, H: HEADER3 },
  { S: 6, N: '6.5', Q: 'Seus pais trataram você de forma justa?', A:0, H: HEADER3 },
  { S: 6, N: '6.6', Q: 'Você conversou com seus pais como você queria?', A:0, H: HEADER3 },
  // Aspectos Financeiros
  { S:7, N: '7.1', Q: 'Você teve dinheiro suficiente para fazer as mesmas coisas que os seus amigos/as fazem?', A:0, H: HEADER3 },
  { S:7, N: '7.2', Q: 'Você teve dinheiro suficiente para os seus gastos?', A:0, H: HEADER3 },
  { S:7, N: '7.3', Q: 'Você teve dinheiro suficiente para fazer o que deseja com seus amigos/as?', A:0, H: HEADER2 },
  // Amigos e Apoio Social
  { S:8, N: '8.1', Q: 'Você teve tempo suficiente para ficar com seus amigos/as?', A:0, H: HEADER3 },
  { S:8, N: '8.2', Q: 'Você realizou atividades com outros jovens?', A:0, H: HEADER3 },
  { S:8, N: '8.3', Q: 'Você se divertiu com seus amigos/as?', A:0, H: HEADER3 },
  { S:8, N: '8.4', Q: 'Você e seus amigos/as se ajudaram uns/umas aos outros/as?', A:0, H: HEADER3 },
  { S:8, N: '8.5', Q: 'Você falou o que queria com seus amigos/as?', A:0, H: HEADER3 },
  { S:8, N: '8.6', Q: 'Você sentiu que pode confiar em seus amigos/as?', A:0, H: HEADER3 },
  // Ambiente Escolar
  { S:9, N: '9.1', Q: 'Você se sentiu feliz na escola?', A:0, H: HEADER2 },
  { S:9, N: '9.2', Q: 'Você foi bom/boa aluno/a na escola?', A:0, H: HEADER2 },
  { S:9, N: '9.3', Q: 'Você se sentiu satisfeito/a com seus professores?', A:0, H: HEADER2 },
  { S:9, N: '9.4', Q: 'Você foi capaz de prestar atenção nas aulas?', A:0, H: HEADER3},
  { S:9, N: '9.5', Q: 'Você gostou de ir à escola?', A:0, H: HEADER3 },
  { S:9, N: '9.6', Q: 'Você teve uma boa relação com seus professores?', A:0, H: HEADER3 },
  // Provocação/Bullying
  { S:10, N: '10.1', Q: 'Você sentiu medo de outros jovens?', A:0, H: HEADER3 },
  { S:10, N: '10.2', Q: 'Outros jovens zombaram (“gozaram”) você?', A:0, H: HEADER3 },
  { S:10, N: '10.3', Q: 'Outros jovens intimidaram ou ameaçaram você?', A:0, H: HEADER3 },
];

function findByNumber(num: string) {
  return { ...QUESTIONS.find((elem) => elem.N === num) };
}

function findByPosition(posistion: number) {
  return { ...QUESTIONS[posistion] };
}

export { QUESTIONS, findByNumber, findByPosition };

