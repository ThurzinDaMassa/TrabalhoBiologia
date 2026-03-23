import { motion } from "framer-motion";
import { GitBranch, Circle, Target, ArrowUpDown, SplitSquareVertical, Shuffle } from "lucide-react";
import Header from "@/components/Header";
import PhaseCard from "@/components/PhaseCard";
import CuriosityCard from "@/components/CuriosityCard";

const meiosisI = [
  {
    title: "Prófase I",
    icon: <Circle className="w-5 h-5" />,
    description: "Cromossomos homólogos se pareiam e ocorre o crossing-over.",
    details:
      "A prófase I é a fase mais longa e complexa da meiose. Os cromossomos homólogos se pareiam formando bivalentes (tétrades). Ocorre o crossing-over (recombinação genética), onde segmentos de DNA são trocados entre cromátides não-irmãs, gerando variabilidade genética. Subdivide-se em: leptóteno, zigóteno, paquíteno, diplóteno e diacinese.",
    color: "--gradient-meiosis",
  },
  {
    title: "Metáfase I",
    icon: <Target className="w-5 h-5" />,
    description: "Os bivalentes se alinham na placa equatorial da célula.",
    details:
      "Os pares de homólogos (bivalentes) se posicionam na placa metafásica. A orientação de cada par é aleatória (segregação independente), o que contribui para a variabilidade genética. As fibras do fuso se ligam aos cinetócoros dos cromossomos homólogos.",
    color: "--gradient-meiosis",
  },
  {
    title: "Anáfase I",
    icon: <ArrowUpDown className="w-5 h-5" />,
    description: "Os cromossomos homólogos se separam e migram para polos opostos.",
    details:
      "Diferente da mitose, na anáfase I são os cromossomos homólogos que se separam (e não as cromátides-irmãs). Cada polo recebe um cromossomo de cada par homólogo, reduzindo o número cromossômico pela metade. É por isso que a meiose I é chamada de divisão reducional.",
    color: "--gradient-meiosis",
  },
  {
    title: "Telófase I",
    icon: <SplitSquareVertical className="w-5 h-5" />,
    description: "Duas células haploides são formadas ao final da primeira divisão.",
    details:
      "Os cromossomos podem descondensar parcialmente, e novas membranas nucleares podem se formar. A citocinese ocorre, resultando em duas células haploides. Em algumas espécies, as células entram brevemente em intercinese antes de iniciar a meiose II, sem que ocorra replicação do DNA.",
    color: "--gradient-meiosis",
  },
];

const meiosisII = [
  {
    title: "Prófase II",
    icon: <Circle className="w-5 h-5" />,
    description: "Semelhante à prófase mitótica, sem pareamento de homólogos.",
    details:
      "A prófase II é mais simples e rápida que a prófase I. Não ocorre pareamento nem crossing-over. Os cromossomos se condensam novamente, o envelope nuclear se desfaz e novos fusos se formam. Cada célula agora contém um número haploide de cromossomos.",
    color: "--gradient-meiosis",
  },
  {
    title: "Metáfase II",
    icon: <Target className="w-5 h-5" />,
    description: "Os cromossomos se alinham individualmente na placa equatorial.",
    details:
      "Similar à metáfase da mitose, os cromossomos (cada um com duas cromátides-irmãs) se alinham na placa equatorial. As fibras do fuso se conectam aos cinetócoros de cada cromátide.",
    color: "--gradient-meiosis",
  },
  {
    title: "Anáfase II",
    icon: <ArrowUpDown className="w-5 h-5" />,
    description: "As cromátides-irmãs se separam e migram para polos opostos.",
    details:
      "Agora sim, como na mitose, as cromátides-irmãs se separam. Os centrômeros se dividem e cada cromátide (agora um cromossomo individual) migra para um polo da célula.",
    color: "--gradient-meiosis",
  },
  {
    title: "Telófase II",
    icon: <SplitSquareVertical className="w-5 h-5" />,
    description: "Quatro células haploides geneticamente diferentes são formadas.",
    details:
      "Os cromossomos descondensam, os envelopes nucleares se reorganizam e a citocinese divide as duas células em quatro células haploides. No caso da espermatogênese, formam-se 4 espermatozoides. Na ovogênese, forma-se 1 óvulo e 3 corpúsculos polares.",
    color: "--gradient-meiosis",
  },
];

const curiosidades = [
  "O crossing-over durante a prófase I pode gerar mais de 8 milhões de combinações genéticas diferentes em humanos!",
  "Erros na meiose podem causar condições como a Síndrome de Down (trissomia do cromossomo 21).",
  "A meiose garante que, na fecundação, o número de cromossomos da espécie seja mantido de geração em geração.",
  "Sem a meiose, todos os irmãos seriam geneticamente idênticos (clones) — menos gêmeos univitelinos, que já são!",
];

const MeiosePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <GitBranch className="w-4 h-4" />
            Divisão Reducional
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text-meiosis mb-4">
            Meiose
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A meiose é o processo de divisão celular que produz{" "}
            <strong className="text-foreground">quatro células-filhas haploides geneticamente diferentes</strong>.
            É fundamental para a reprodução sexuada e a variabilidade genética das espécies.
          </p>
        </motion.div>

        {/* Meiose I */}
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Shuffle className="w-5 h-5 text-secondary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Meiose I — Divisão Reducional
            </h2>
          </div>
          {meiosisI.map((phase, i) => (
            <PhaseCard
              key={phase.title}
              title={phase.title}
              description={phase.description}
              details={phase.details}
              icon={phase.icon}
              index={i}
              color={phase.color}
            />
          ))}
        </div>

        {/* Meiose II */}
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Shuffle className="w-5 h-5 text-secondary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Meiose II — Divisão Equacional
            </h2>
          </div>
          {meiosisII.map((phase, i) => (
            <PhaseCard
              key={phase.title}
              title={phase.title}
              description={phase.description}
              details={phase.details}
              icon={phase.icon}
              index={i}
              color={phase.color}
            />
          ))}
        </div>

        {/* Curiosities */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            🧬 Curiosidades
          </h2>
          <div className="space-y-3">
            {curiosidades.map((text, i) => (
              <CuriosityCard key={i} text={text} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeiosePage;
