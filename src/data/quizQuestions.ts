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
  { question: "A colchicina impede a mitose ao bloquear:", options: ["A replicação do DNA", "A formação do fuso mitótico", "A síntese de proteínas", "A citocinese"], correctIndex: 1 },
  { question: "O checkpoint G2/M verifica:", options: ["Se a célula tem nutrientes", "Se o DNA foi replicado corretamente", "Se a citocinese está completa", "Se os ribossomos estão prontos"], correctIndex: 1 },
  { question: "As ciclinas controlam a mitose atuando junto com:", options: ["Ribossomos", "CDKs (quinases dependentes de ciclinas)", "Histonas", "Telomerase"], correctIndex: 1 },
  { question: "A enzima separase na anáfase cliva:", options: ["O DNA", "As coesinas", "Os microtúbulos", "As histonas"], correctIndex: 1 },
  { question: "O anel contrátil da citocinese em células animais é composto por:", options: ["Tubulina", "Actina e miosina", "Queratina", "Colágeno"], correctIndex: 1 },
  { question: "Qual fase do ciclo celular ocupa mais tempo?", options: ["Prófase", "Metáfase", "Interfase", "Anáfase"], correctIndex: 2 },
  { question: "O gene p53 é importante porque:", options: ["Acelera a divisão celular", "Impede a divisão de células com DNA danificado", "Codifica o fuso mitótico", "Produz ciclinas"], correctIndex: 1 },

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
  { question: "A prófase I é subdividida em quantas etapas?", options: ["3", "4", "5", "6"], correctIndex: 2 },
  { question: "A subfase da prófase I em que ocorre o pareamento é:", options: ["Leptóteno", "Zigóteno", "Paquíteno", "Diplóteno"], correctIndex: 1 },
  { question: "O complexo sinaptonêmico é uma estrutura que:", options: ["Separa homólogos", "Mantém homólogos pareados durante o crossing-over", "Forma o fuso", "Divide o citoplasma"], correctIndex: 1 },
  { question: "A intercinese é diferente da interfase porque:", options: ["Dura mais tempo", "Não ocorre replicação do DNA", "Os cromossomos se descondesam completamente", "Ocorre crossing-over"], correctIndex: 1 },
  { question: "Na ovogênese humana, a meiose I se completa:", options: ["Antes do nascimento", "Na puberdade", "Na ovulação", "Na fecundação"], correctIndex: 2 },
  { question: "A meiose II na ovogênese se completa:", options: ["Na ovulação", "Na fecundação", "Na puberdade", "No desenvolvimento embrionário"], correctIndex: 1 },

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
  { question: "Os corpúsculos polares formados na ovogênese:", options: ["Se tornam óvulos", "Degeneram", "Se tornam espermatozoides", "Se dividem novamente"], correctIndex: 1 },
  { question: "A Síndrome de Turner (45,X) é resultado de:", options: ["Trissomia", "Monossomia", "Poliploidia", "Mutação pontual"], correctIndex: 1 },
  { question: "Um organismo triploide (3n) geralmente é:", options: ["Fértil", "Estéril", "Haploide", "Normal"], correctIndex: 1 },
  { question: "O cinetócoro é uma estrutura que:", options: ["Produz ATP", "Liga o cromossomo às fibras do fuso", "Replica o DNA", "Sintetiza RNA"], correctIndex: 1 },
  { question: "A telomerase é importante porque:", options: ["Encurta os telômeros", "Evita o encurtamento dos telômeros", "Condensa cromossomos", "Forma o fuso"], correctIndex: 1 },
  { question: "As histonas são proteínas que:", options: ["Degradam o DNA", "Ajudam na compactação do DNA", "Replicam o DNA", "Transportam RNA"], correctIndex: 1 },
  { question: "A apoptose é:", options: ["Divisão celular descontrolada", "Morte celular programada", "Fusão celular", "Migração celular"], correctIndex: 1 },
  { question: "Os centrômeros estão localizados:", options: ["Nas extremidades dos cromossomos", "Na região de constrição primária", "No nucléolo", "Na membrana nuclear"], correctIndex: 1 },
  { question: "Um zigoto humano é:", options: ["Haploide (23 cromossomos)", "Diploide (46 cromossomos)", "Triploide (69 cromossomos)", "Tetraploide (92 cromossomos)"], correctIndex: 1 },
  { question: "A fibra cromossômica de 30nm é formada por:", options: ["DNA nu", "Nucleossomos compactados em solenóide", "Apenas histonas", "RNA e proteínas"], correctIndex: 1 },
];

/** Shuffle array using Fisher-Yates and return first `count` items.
 *  Also randomizes option order so the correct answer isn't always in the same position. */
function pickRandom(arr: QuizQuestionData[], count: number): QuizQuestionData[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count).map((q) => {
    const correctOption = q.options[q.correctIndex];
    const shuffledOptions = [...q.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    return {
      question: q.question,
      options: shuffledOptions,
      correctIndex: shuffledOptions.indexOf(correctOption),
    };
  });
}

export const QUESTIONS_PER_QUIZ = 10;

export function getRandomQuestions(): QuizQuestionData[] {
  return pickRandom(allQuestions, QUESTIONS_PER_QUIZ);
}
