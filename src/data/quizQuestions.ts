export interface QuizQuestionData {
  question: string;
  options: string[];
  correctIndex: number;
}

const allQuestions: QuizQuestionData[] = [
  // === MITOSE ===
  { question: "Quantas células-filhas são produzidas ao final da mitose?", options: ["1", "2", "4", "8"], correctIndex: 1 },
  { question: "Em qual fase da mitose os cromossomos se alinham na placa equatorial?", options: ["Prófase", "Metáfase", "Anáfase", "Telófase"], correctIndex: 1 },
  { question: "Na anáfase da mitose, o que se separa?", options: ["Cromossomos homólogos", "Cromátides-irmãs", "Células-filhas", "Nucléolos"], correctIndex: 1 },
  { question: "A mitose ocorre em quais tipos de células?", options: ["Apenas células germinativas", "Apenas células somáticas", "Células somáticas e germinativas", "Apenas células vegetais"], correctIndex: 1 },
  { question: "Qual é a fase mais longa da mitose?", options: ["Metáfase", "Prófase", "Anáfase", "Telófase"], correctIndex: 1 },
  { question: "O que acontece na telófase da mitose?", options: ["Os cromossomos se condensam", "A carioteca se reorganiza", "Os cromossomos se alinham", "Ocorre crossing-over"], correctIndex: 1 },
  { question: "A citocinese nas células vegetais ocorre por:", options: ["Estrangulamento", "Formação da placa celular", "Fragmentação", "Brotamento"], correctIndex: 1 },
  { question: "Na prófase da mitose, o que acontece com a carioteca?", options: ["Ela se duplica", "Ela se desintegra", "Ela se condensa", "Nada acontece"], correctIndex: 1 },
  { question: "As células-filhas da mitose são geneticamente:", options: ["Diferentes entre si", "Idênticas à célula-mãe", "Haploides", "Poliploides"], correctIndex: 1 },
  { question: "O fuso mitótico é formado por:", options: ["Ribossomos", "Microtúbulos", "Microfilamentos", "Filamentos intermediários"], correctIndex: 1 },
  { question: "Em qual fase da mitose as cromátides estão mais condensadas?", options: ["Prófase", "Metáfase", "Anáfase", "Interfase"], correctIndex: 1 },
  { question: "O centrômero é importante na mitose porque:", options: ["Produz energia", "Liga as cromátides-irmãs e se conecta ao fuso", "Sintetiza proteínas", "Armazena DNA extra"], correctIndex: 1 },
  { question: "A mitose é essencial para:", options: ["Produção de gametas", "Crescimento e reparo de tecidos", "Variabilidade genética", "Redução cromossômica"], correctIndex: 1 },

  // === MEIOSE ===
  { question: "O crossing-over ocorre em qual fase da meiose?", options: ["Metáfase I", "Prófase I", "Anáfase II", "Telófase I"], correctIndex: 1 },
  { question: "As células resultantes da meiose são:", options: ["Diploides e idênticas", "Haploides e idênticas", "Diploides e diferentes", "Haploides e diferentes"], correctIndex: 3 },
  { question: "A meiose I é chamada de divisão reducional porque:", options: ["Reduz o tamanho das células", "Reduz o número de cromossomos pela metade", "Reduz a quantidade de DNA", "Reduz o número de organelas"], correctIndex: 1 },
  { question: "Qual a principal função biológica da meiose?", options: ["Crescimento do organismo", "Reparo de tecidos", "Formação de gametas", "Regeneração celular"], correctIndex: 2 },
  { question: "Quantas divisões celulares ocorrem na meiose?", options: ["1", "2", "3", "4"], correctIndex: 1 },
  { question: "Quantas células são produzidas ao final da meiose?", options: ["1", "2", "4", "8"], correctIndex: 2 },
  { question: "Na anáfase I da meiose, o que se separa?", options: ["Cromátides-irmãs", "Cromossomos homólogos", "Centrômeros", "Nucléolos"], correctIndex: 1 },
  { question: "O pareamento dos cromossomos homólogos é chamado de:", options: ["Crossing-over", "Sinapse", "Citocinese", "Cariocinese"], correctIndex: 1 },
  { question: "A meiose II é semelhante à:", options: ["Meiose I", "Mitose", "Interfase", "Fecundação"], correctIndex: 1 },
  { question: "A segregação independente dos cromossomos homólogos ocorre na:", options: ["Prófase I", "Metáfase I / Anáfase I", "Telófase II", "Prófase II"], correctIndex: 1 },
  { question: "O quiasma observado na prófase I é evidência de:", options: ["Mutação", "Crossing-over", "Não-disjunção", "Apoptose"], correctIndex: 1 },
  { question: "As tétrades (bivalentes) são formadas durante a:", options: ["Metáfase II", "Prófase I", "Anáfase I", "Telófase II"], correctIndex: 1 },
  { question: "A variabilidade genética na meiose é garantida por:", options: ["Replicação do DNA", "Crossing-over e segregação independente", "Citocinese", "Condensação dos cromossomos"], correctIndex: 1 },

  // === COMPARAÇÃO E CONCEITOS GERAIS ===
  { question: "A Síndrome de Down é causada por um erro na:", options: ["Mitose", "Meiose (não-disjunção)", "Citocinese", "Replicação do DNA"], correctIndex: 1 },
  { question: "Qual processo gera células diploides?", options: ["Meiose", "Mitose", "Fecundação", "Gametogênese"], correctIndex: 1 },
  { question: "A não-disjunção pode causar:", options: ["Células com número normal de cromossomos", "Aneuploidias como trissomias", "Células haploides normais", "Aumento da mitose"], correctIndex: 1 },
  { question: "Em humanos, os gametas possuem quantos cromossomos?", options: ["46", "23", "92", "12"], correctIndex: 1 },
  { question: "Qual processo NÃO contribui para a variabilidade genética?", options: ["Crossing-over", "Segregação independente", "Mitose", "Mutação"], correctIndex: 2 },
  { question: "A interfase é importante porque:", options: ["É quando a célula se divide", "É quando o DNA é replicado", "É quando os cromossomos se separam", "É quando ocorre crossing-over"], correctIndex: 1 },
  { question: "A ploidia de uma célula somática humana é:", options: ["Haploide (n)", "Diploide (2n)", "Triploide (3n)", "Tetraploide (4n)"], correctIndex: 1 },
  { question: "Qual organela desaparece durante a prófase?", options: ["Mitocôndria", "Nucléolo", "Ribossomo", "Lisossomo"], correctIndex: 1 },
  { question: "A espermatogênese produz quantos espermatozoides funcionais?", options: ["1", "2", "3", "4"], correctIndex: 3 },
  { question: "A ovogênese produz quantos óvulos funcionais?", options: ["1", "2", "3", "4"], correctIndex: 0 },
  { question: "O que é cariocinese?", options: ["Divisão do citoplasma", "Divisão do núcleo", "Duplicação do DNA", "Formação do fuso"], correctIndex: 1 },
  { question: "Células cancerosas se dividem descontroladamente por falhas na:", options: ["Meiose", "Regulação do ciclo celular (mitose)", "Fecundação", "Gametogênese"], correctIndex: 1 },
  { question: "O período S da interfase é quando ocorre:", options: ["Síntese de proteínas", "Replicação do DNA", "Divisão celular", "Condensação dos cromossomos"], correctIndex: 1 },
  { question: "Após a meiose I, as células são:", options: ["Diploides", "Haploides com cromátides duplicadas", "Haploides com cromátides simples", "Tetraploides"], correctIndex: 1 },
];

/** Shuffle array using Fisher-Yates and return first `count` items */
function pickRandom(arr: QuizQuestionData[], count: number): QuizQuestionData[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export const QUESTIONS_PER_QUIZ = 10;

export function getRandomQuestions(): QuizQuestionData[] {
  return pickRandom(allQuestions, QUESTIONS_PER_QUIZ);
}
