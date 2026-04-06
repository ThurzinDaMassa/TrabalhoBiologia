export type Difficulty = "fácil" | "médio" | "difícil";

export interface QuizQuestionData {
  question: string;
  options: string[];
  correctIndex: number;
  difficulty: Difficulty;
}

const allQuestions: QuizQuestionData[] = [
  // ===================== FÁCIL =====================
  // Mitose
  { question: "Quantas células-filhas são produzidas ao final da mitose?", options: ["1", "2", "4", "8"], correctIndex: 1, difficulty: "fácil" },
  { question: "A mitose é um processo de divisão celular que ocorre em:", options: ["Apenas gametas", "Células somáticas", "Apenas bactérias", "Apenas células vegetais"], correctIndex: 1, difficulty: "fácil" },
  { question: "As células-filhas da mitose são geneticamente:", options: ["Diferentes entre si", "Idênticas à célula-mãe", "Haploides", "Poliploides"], correctIndex: 1, difficulty: "fácil" },
  { question: "Qual é a fase mais longa do ciclo celular?", options: ["Prófase", "Metáfase", "Interfase", "Anáfase"], correctIndex: 2, difficulty: "fácil" },
  { question: "A mitose é essencial para:", options: ["Produção de gametas", "Crescimento e reparo de tecidos", "Variabilidade genética", "Redução cromossômica"], correctIndex: 1, difficulty: "fácil" },
  { question: "Qual organela desaparece durante a prófase?", options: ["Mitocôndria", "Nucléolo", "Ribossomo", "Lisossomo"], correctIndex: 1, difficulty: "fácil" },
  { question: "O que é cariocinese?", options: ["Divisão do citoplasma", "Divisão do núcleo", "Duplicação do DNA", "Formação do fuso"], correctIndex: 1, difficulty: "fácil" },
  { question: "A citocinese é o processo de divisão:", options: ["Do núcleo", "Do DNA", "Do citoplasma", "Dos cromossomos"], correctIndex: 2, difficulty: "fácil" },
  { question: "Durante qual fase os cromossomos se tornam visíveis ao microscópio?", options: ["Interfase", "Prófase", "Telófase", "Citocinese"], correctIndex: 1, difficulty: "fácil" },
  { question: "As células resultantes da mitose possuem:", options: ["Metade dos cromossomos", "O mesmo número de cromossomos da célula-mãe", "O dobro dos cromossomos", "Número variável"], correctIndex: 1, difficulty: "fácil" },

  // Meiose
  { question: "Quantas células são produzidas ao final da meiose?", options: ["1", "2", "4", "8"], correctIndex: 2, difficulty: "fácil" },
  { question: "Qual a principal função biológica da meiose?", options: ["Crescimento do organismo", "Reparo de tecidos", "Formação de gametas", "Regeneração celular"], correctIndex: 2, difficulty: "fácil" },
  { question: "Quantas divisões celulares ocorrem na meiose?", options: ["1", "2", "3", "4"], correctIndex: 1, difficulty: "fácil" },
  { question: "As células resultantes da meiose são:", options: ["Diploides e idênticas", "Haploides e geneticamente diferentes", "Diploides e diferentes", "Haploides e idênticas"], correctIndex: 1, difficulty: "fácil" },
  { question: "Em humanos, os gametas possuem quantos cromossomos?", options: ["46", "23", "92", "12"], correctIndex: 1, difficulty: "fácil" },
  { question: "Um zigoto humano possui quantos cromossomos?", options: ["23", "46", "69", "92"], correctIndex: 1, difficulty: "fácil" },

  // Geral
  { question: "A ploidia de uma célula somática humana é:", options: ["Haploide (n)", "Diploide (2n)", "Triploide (3n)", "Tetraploide (4n)"], correctIndex: 1, difficulty: "fácil" },
  { question: "O DNA fica armazenado dentro de qual estrutura celular?", options: ["Ribossomo", "Mitocôndria", "Núcleo", "Complexo de Golgi"], correctIndex: 2, difficulty: "fácil" },
  { question: "Os cromossomos são compostos principalmente de:", options: ["Lipídios e carboidratos", "DNA e proteínas", "RNA e lipídios", "Proteínas e carboidratos"], correctIndex: 1, difficulty: "fácil" },
  { question: "A apoptose é:", options: ["Divisão celular descontrolada", "Morte celular programada", "Fusão celular", "Migração celular"], correctIndex: 1, difficulty: "fácil" },

  // ===================== MÉDIO =====================
  // Mitose
  { question: "Em qual fase da mitose os cromossomos se alinham na placa equatorial?", options: ["Prófase", "Metáfase", "Anáfase", "Telófase"], correctIndex: 1, difficulty: "médio" },
  { question: "Na anáfase da mitose, o que se separa?", options: ["Cromossomos homólogos", "Cromátides-irmãs", "Células-filhas", "Nucléolos"], correctIndex: 1, difficulty: "médio" },
  { question: "Qual é a fase mais longa da mitose propriamente dita?", options: ["Metáfase", "Prófase", "Anáfase", "Telófase"], correctIndex: 1, difficulty: "médio" },
  { question: "O que acontece na telófase da mitose?", options: ["Os cromossomos se condensam", "A carioteca se reorganiza ao redor dos cromossomos", "Os cromossomos se alinham", "Ocorre crossing-over"], correctIndex: 1, difficulty: "médio" },
  { question: "A citocinese nas células vegetais ocorre por:", options: ["Estrangulamento", "Formação da placa celular (fragmoplasto)", "Fragmentação", "Brotamento"], correctIndex: 1, difficulty: "médio" },
  { question: "Na prófase da mitose, o que acontece com a carioteca (envelope nuclear)?", options: ["Ela se duplica", "Ela se fragmenta e desaparece", "Ela se condensa", "Nada acontece"], correctIndex: 1, difficulty: "médio" },
  { question: "O fuso mitótico é formado por:", options: ["Ribossomos", "Microtúbulos de tubulina", "Microfilamentos de actina", "Filamentos intermediários"], correctIndex: 1, difficulty: "médio" },
  { question: "O período S da interfase é quando ocorre:", options: ["Síntese de proteínas apenas", "Replicação (duplicação) do DNA", "Divisão celular", "Condensação dos cromossomos"], correctIndex: 1, difficulty: "médio" },
  { question: "Células cancerosas se dividem descontroladamente por falhas na:", options: ["Meiose", "Regulação do ciclo celular", "Fecundação", "Gametogênese"], correctIndex: 1, difficulty: "médio" },
  { question: "A citocinese em células animais ocorre por:", options: ["Formação de placa celular", "Estrangulamento (anel contrátil)", "Brotamento", "Fragmentação nuclear"], correctIndex: 1, difficulty: "médio" },

  // Meiose
  { question: "O crossing-over ocorre em qual fase da meiose?", options: ["Metáfase I", "Prófase I", "Anáfase II", "Telófase I"], correctIndex: 1, difficulty: "médio" },
  { question: "A meiose I é chamada de divisão reducional porque:", options: ["Reduz o tamanho das células", "Reduz o número de cromossomos pela metade", "Reduz a quantidade de proteínas", "Reduz o número de organelas"], correctIndex: 1, difficulty: "médio" },
  { question: "Na anáfase I da meiose, o que se separa?", options: ["Cromátides-irmãs", "Cromossomos homólogos", "Centrômeros", "Nucléolos"], correctIndex: 1, difficulty: "médio" },
  { question: "O pareamento dos cromossomos homólogos é chamado de:", options: ["Crossing-over", "Sinapse", "Citocinese", "Cariocinese"], correctIndex: 1, difficulty: "médio" },
  { question: "A meiose II é semelhante à:", options: ["Meiose I", "Mitose", "Interfase", "Fecundação"], correctIndex: 1, difficulty: "médio" },
  { question: "A variabilidade genética na meiose é garantida por:", options: ["Replicação do DNA", "Crossing-over e segregação independente", "Citocinese", "Condensação dos cromossomos"], correctIndex: 1, difficulty: "médio" },
  { question: "Após a meiose I, as células são:", options: ["Diploides", "Haploides com cromátides duplicadas", "Haploides com cromátides simples", "Tetraploides"], correctIndex: 1, difficulty: "médio" },
  { question: "O quiasma observado na prófase I é evidência física de:", options: ["Mutação genética", "Crossing-over (recombinação)", "Não-disjunção", "Apoptose"], correctIndex: 1, difficulty: "médio" },
  { question: "A espermatogênese produz quantos espermatozoides funcionais por meiose?", options: ["1", "2", "3", "4"], correctIndex: 3, difficulty: "médio" },
  { question: "A ovogênese produz quantos óvulos funcionais por meiose?", options: ["1", "2", "3", "4"], correctIndex: 0, difficulty: "médio" },

  // Geral
  { question: "A Síndrome de Down é causada por:", options: ["Deleção cromossômica", "Trissomia do cromossomo 21", "Monossomia do X", "Inversão no cromossomo 14"], correctIndex: 1, difficulty: "médio" },
  { question: "Qual processo gera células geneticamente idênticas?", options: ["Meiose", "Mitose", "Fecundação", "Crossing-over"], correctIndex: 1, difficulty: "médio" },
  { question: "Qual processo NÃO contribui para a variabilidade genética?", options: ["Crossing-over", "Segregação independente", "Mitose", "Mutação"], correctIndex: 2, difficulty: "médio" },
  { question: "Os corpúsculos polares formados na ovogênese:", options: ["Se tornam óvulos funcionais", "Degeneram (são reabsorvidos)", "Se tornam espermatozoides", "Se dividem novamente por mitose"], correctIndex: 1, difficulty: "médio" },
  { question: "Os centrômeros estão localizados:", options: ["Nas extremidades dos cromossomos", "Na região de constrição primária", "No nucléolo", "Na membrana nuclear"], correctIndex: 1, difficulty: "médio" },
  { question: "A não-disjunção pode resultar em:", options: ["Células com número normal de cromossomos", "Aneuploidias como trissomias e monossomias", "Células haploides normais", "Aumento da taxa de mitose"], correctIndex: 1, difficulty: "médio" },
  { question: "As histonas são proteínas que:", options: ["Degradam o DNA danificado", "Participam da compactação do DNA em cromatina", "Replicam o DNA durante a fase S", "Transportam RNA mensageiro"], correctIndex: 1, difficulty: "médio" },
  { question: "O que diferencia a interfase da mitose?", options: ["Na interfase a célula está em repouso absoluto", "Na interfase ocorre replicação do DNA e crescimento celular", "Na interfase os cromossomos estão condensados", "Não há diferença"], correctIndex: 1, difficulty: "médio" },

  // ===================== DIFÍCIL =====================
  // Mitose
  { question: "A colchicina impede a mitose ao:", options: ["Inibir a replicação do DNA", "Impedir a polimerização dos microtúbulos do fuso", "Bloquear a síntese de proteínas", "Inibir a citocinese"], correctIndex: 1, difficulty: "difícil" },
  { question: "O checkpoint G2/M do ciclo celular verifica se:", options: ["A célula tem nutrientes suficientes", "O DNA foi replicado completamente e sem erros", "A citocinese está completa", "Os ribossomos estão prontos para tradução"], correctIndex: 1, difficulty: "difícil" },
  { question: "As ciclinas controlam a progressão do ciclo celular atuando junto com:", options: ["Ribossomos", "CDKs (quinases dependentes de ciclinas)", "Histonas", "Telomerase"], correctIndex: 1, difficulty: "difícil" },
  { question: "A enzima separase na anáfase tem a função de clivar:", options: ["As fitas de DNA", "As coesinas que unem as cromátides-irmãs", "Os microtúbulos do fuso", "As histonas do nucleossomo"], correctIndex: 1, difficulty: "difícil" },
  { question: "O anel contrátil da citocinese em células animais é composto por:", options: ["Tubulina alfa e beta", "Actina e miosina", "Queratina", "Colágeno e elastina"], correctIndex: 1, difficulty: "difícil" },
  { question: "O gene supressor de tumor p53 atua:", options: ["Acelerando a divisão celular", "Interrompendo o ciclo celular quando há DNA danificado", "Codificando proteínas do fuso mitótico", "Produzindo ciclinas para a fase M"], correctIndex: 1, difficulty: "difícil" },
  { question: "O complexo promotor da anáfase (APC/C) é responsável por:", options: ["Replicar o DNA", "Ubiquitinar securina, liberando separase", "Sintetizar ciclinas", "Formar o fuso mitótico"], correctIndex: 1, difficulty: "difícil" },
  { question: "A proteína Rb (retinoblastoma) no ciclo celular atua como:", options: ["Ativadora de CDKs", "Inibidora da transição G1→S quando hipofosforilada", "Componente do fuso mitótico", "Enzima de reparo do DNA"], correctIndex: 1, difficulty: "difícil" },
  { question: "O checkpoint do fuso (SAC) monitora:", options: ["A replicação do DNA", "A correta ligação dos cinetócoros aos microtúbulos", "A síntese de ciclinas", "A formação da placa celular"], correctIndex: 1, difficulty: "difícil" },
  { question: "Em qual fase G do ciclo celular a célula pode entrar em quiescência (G0)?", options: ["G2", "G1", "S", "M"], correctIndex: 1, difficulty: "difícil" },

  // Meiose
  { question: "A prófase I da meiose é subdividida em quantas subfases?", options: ["3", "4", "5", "6"], correctIndex: 2, difficulty: "difícil" },
  { question: "A subfase da prófase I em que ocorre o pareamento dos homólogos é:", options: ["Leptóteno", "Zigóteno", "Paquíteno", "Diplóteno"], correctIndex: 1, difficulty: "difícil" },
  { question: "O complexo sinaptonêmico é uma estrutura proteica que:", options: ["Separa os cromossomos homólogos", "Mantém os homólogos pareados durante a recombinação", "Forma o fuso meiótico", "Divide o citoplasma"], correctIndex: 1, difficulty: "difícil" },
  { question: "A intercinese difere da interfase normal porque:", options: ["Dura muito mais tempo", "Não há replicação do DNA", "Os cromossomos se descondensam completamente", "Ocorre crossing-over adicional"], correctIndex: 1, difficulty: "difícil" },
  { question: "Na ovogênese humana, a meiose I se completa:", options: ["Ainda na vida fetal", "Na puberdade", "Na ovulação (antes de cada ciclo menstrual)", "Na fecundação pelo espermatozoide"], correctIndex: 2, difficulty: "difícil" },
  { question: "A meiose II na ovogênese humana se completa:", options: ["Na ovulação", "Apenas se houver fecundação", "Na puberdade", "No desenvolvimento embrionário"], correctIndex: 1, difficulty: "difícil" },
  { question: "A segregação independente dos cromossomos homólogos ocorre na:", options: ["Prófase I", "Anáfase I", "Telófase II", "Prófase II"], correctIndex: 1, difficulty: "difícil" },
  { question: "As tétrades (bivalentes) são formadas durante a:", options: ["Metáfase II", "Prófase I (paquíteno)", "Anáfase I", "Telófase II"], correctIndex: 1, difficulty: "difícil" },
  { question: "A subfase da prófase I onde o crossing-over efetivamente ocorre é:", options: ["Leptóteno", "Zigóteno", "Paquíteno", "Diplóteno"], correctIndex: 2, difficulty: "difícil" },
  { question: "Na subfase diplóteno da prófase I:", options: ["Os homólogos começam a parear", "Os quiasmas se tornam visíveis e o complexo sinaptonêmico se desfaz", "O DNA começa a se replicar", "As cromátides-irmãs se separam"], correctIndex: 1, difficulty: "difícil" },

  // Geral avançado
  { question: "A Síndrome de Turner (45,X) é resultado de:", options: ["Trissomia", "Monossomia do cromossomo X", "Poliploidia", "Mutação pontual"], correctIndex: 1, difficulty: "difícil" },
  { question: "Um organismo triploide (3n) geralmente é estéril porque:", options: ["Tem DNA demais", "Não consegue parear homólogos corretamente na meiose", "Não faz mitose", "Suas células são muito grandes"], correctIndex: 1, difficulty: "difícil" },
  { question: "O cinetócoro é uma estrutura proteica que:", options: ["Produz ATP para a divisão", "Conecta o centrômero do cromossomo às fibras do fuso", "Replica o DNA na fase S", "Sintetiza RNA ribossômico"], correctIndex: 1, difficulty: "difícil" },
  { question: "A telomerase é importante porque:", options: ["Encurta os telômeros a cada divisão", "Adiciona sequências repetitivas aos telômeros, evitando seu encurtamento", "Condensa os cromossomos na prófase", "Forma o fuso mitótico"], correctIndex: 1, difficulty: "difícil" },
  { question: "A fibra de cromatina de 30nm (solenoide) é formada por:", options: ["DNA nu sem proteínas", "Nucleossomos compactados em espiral helicoidal", "Apenas histonas H1", "RNA e proteínas não-histônicas"], correctIndex: 1, difficulty: "difícil" },
  { question: "A enzima topoisomerase II é essencial na mitose para:", options: ["Replicar o DNA", "Resolver catenações (entrelaçamentos) entre cromátides-irmãs", "Sintetizar histonas", "Degradar ciclinas"], correctIndex: 1, difficulty: "difícil" },
  { question: "A coesina mantém as cromátides-irmãs unidas. Na meiose I, a coesina é removida:", options: ["Dos braços e dos centrômeros simultaneamente", "Apenas dos braços dos cromossomos, mantendo os centrômeros unidos", "Apenas dos centrômeros", "Não é removida na meiose I"], correctIndex: 1, difficulty: "difícil" },
  { question: "O fenômeno de interferência no crossing-over refere-se a:", options: ["Dois crossings-over muito próximos se inibem mutuamente", "Crossings-over ocorrem apenas em cromossomos grandes", "A recombinação é bloqueada pela coesina", "Homólogos não conseguem parear"], correctIndex: 0, difficulty: "difícil" },
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
      ...q,
      options: shuffledOptions,
      correctIndex: shuffledOptions.indexOf(correctOption),
    };
  });
}

export const QUESTIONS_PER_QUIZ = 10;

export function getRandomQuestions(): QuizQuestionData[] {
  return pickRandom(allQuestions, QUESTIONS_PER_QUIZ);
}
