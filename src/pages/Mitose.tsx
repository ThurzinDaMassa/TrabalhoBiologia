import { motion } from "framer-motion";
import { FlaskConical, Circle, Target, ArrowUpDown, SplitSquareVertical, Scissors } from "lucide-react";
import Header from "@/components/Header";
import PhaseCard from "@/components/PhaseCard";
import CuriosityCard from "@/components/CuriosityCard";

const phases = [
  {
    title: "Prófase",
    icon: <Circle className="w-5 h-5" />,
    description: "A cromatina se condensa em cromossomos visíveis. O nucléolo desaparece.",
    details:
      "Durante a prófase, cada cromossomo já está duplicado e consiste em duas cromátides-irmãs unidas pelo centrômero. Os centrossomos começam a migrar para os polos opostos da célula, e o fuso mitótico começa a se formar. A membrana nuclear começa a se fragmentar no final desta fase.",
    color: "--gradient-mitosis",
  },
  {
    title: "Metáfase",
    icon: <Target className="w-5 h-5" />,
    description: "Os cromossomos se alinham na placa metafásica (equador da célula).",
    details:
      "Na metáfase, as fibras do fuso mitótico se ligam aos cinetócoros dos cromossomos. Os cromossomos são movimentados até se alinharem perfeitamente na placa equatorial da célula. Este é o momento ideal para análise do cariótipo, pois os cromossomos estão maximamente condensados e visíveis.",
    color: "--gradient-mitosis",
  },
  {
    title: "Anáfase",
    icon: <ArrowUpDown className="w-5 h-5" />,
    description: "As cromátides-irmãs se separam e migram para polos opostos.",
    details:
      "A anáfase é a fase mais rápida da mitose. As proteínas coesinas que mantinham as cromátides-irmãs unidas são clivadas pela enzima separase. Os microtúbulos do fuso encurtam, puxando as cromátides para polos opostos. A célula começa a se alongar.",
    color: "--gradient-mitosis",
  },
  {
    title: "Telófase",
    icon: <SplitSquareVertical className="w-5 h-5" />,
    description: "Os cromossomos descondensam e novas membranas nucleares se formam.",
    details:
      "Na telófase, os eventos da prófase são revertidos: os cromossomos descondensam, os envelopes nucleares se reorganizam ao redor de cada conjunto cromossômico e os nucléolos reaparecem. O fuso mitótico é desmontado.",
    color: "--gradient-mitosis",
  },
  {
    title: "Citocinese",
    icon: <Scissors className="w-5 h-5" />,
    description: "O citoplasma se divide, formando duas células-filhas idênticas.",
    details:
      "A citocinese é o processo de divisão do citoplasma. Em células animais, ocorre por estrangulamento (formação de um sulco de clivagem por um anel contrátil de actina e miosina). Em células vegetais, forma-se uma placa celular no centro da célula que cresce até dividir completamente a célula.",
    color: "--gradient-mitosis",
  },
];

const curiosidades = [
  "Uma célula humana completa a mitose em aproximadamente 1 hora, mas o ciclo celular inteiro pode levar de 12 a 24 horas!",
  "Seu corpo produz cerca de 3,8 milhões de células por segundo através da mitose.",
  "Células cancerosas se dividem descontroladamente por falhas nos mecanismos de controle da mitose.",
  "As células do fígado podem ficar anos sem se dividir, mas retomam a mitose quando há lesão no órgão.",
];

const MitosePage = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FlaskConical className="w-4 h-4" />
            Divisão Equacional
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text-mitosis mb-4">
            Mitose
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A mitose é o processo de divisão celular que resulta em{" "}
            <strong className="text-foreground">duas células-filhas geneticamente idênticas</strong>{" "}
            à célula-mãe. É essencial para o crescimento, reparo e manutenção dos
            tecidos em organismos multicelulares.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Etapas da Mitose
          </h2>
          {phases.map((phase, i) => (
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
            🔬 Curiosidades
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

export default MitosePage;
