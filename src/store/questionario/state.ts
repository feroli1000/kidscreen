export interface QuestionarioStateInterface {
  numero: number;
  tipo: number; // 1 Jovem  2 Pais/Tutores
}

function state(): QuestionarioStateInterface {
  return {
    numero: 0,
    tipo: 0,
  };
}

export default state;
