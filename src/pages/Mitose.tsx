import { motion } from "framer-motion";
import { FlaskConical, Circle, Target, ArrowUpDown, SplitSquareVertical, Scissors, ArrowRight, BookOpen, Microscope, HeartPulse, Info } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import PhaseCard from "@/components/PhaseCard";
import CuriosityCard from "@/components/CuriosityCard";
import ContentSection from "@/components/ContentSection";
import CellDivisionDemo from "@/components/CellDivisionDemo";
import mitosisImg from "@/assets/mitosis-hero.jpg";

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

const keyPoints = [
  { label: "Células resultantes", value: "2" },
  { label: "Ploidia", value: "Diploide (2n)" },
  { label: "Variabilidade genética", value: "Não gera" },
  { label: "Tipo", value: "Equacional" },
];

const MitosePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero with image */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <FlaskConical className="w-4 h-4" />
                Divisão Equacional
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text-mitosis mb-4">
                Mitose
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A mitose é o processo de divisão celular que resulta em{" "}
                <strong className="text-foreground">duas células-filhas geneticamente idênticas</strong>{" "}
                à célula-mãe. É essencial para o crescimento, reparo e manutenção dos
                tecidos em organismos multicelulares.
              </p>

              {/* Key points grid */}
              <div className="grid grid-cols-2 gap-3">
                {keyPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass-card p-3 text-center"
                  >
                    <div className="text-xs text-muted-foreground mb-1">{point.label}</div>
                    <div className="font-display font-bold text-primary text-sm">{point.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={mitosisImg}
                  alt="Ilustração científica da mitose"
                  className="w-full h-auto"
                  width={1024}
                  height={576}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 cell-blob -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-cell-teal/10 cell-blob -z-10" style={{ animationDelay: "2s" }} />
            </motion.div>
          </div>
        </div>

        {/* Phases */}
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Etapas da Mitose
            </h2>
          </div>
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
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            🔬 Curiosidades
          </h2>
          <div className="space-y-3">
            {curiosidades.map((text, i) => (
              <CuriosityCard key={i} text={text} index={i} />
            ))}
          </div>
        </div>

        {/* CTA to Meiose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Link to="/meiose">
            <div className="glass-card p-6 flex items-center justify-between group hover:border-secondary/30 transition-colors cursor-pointer">
              <div>
                <p className="text-sm text-muted-foreground">Continue aprendendo</p>
                <h3 className="font-display text-lg font-bold gradient-text-meiosis">
                  Explorar Meiose →
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MitosePage;
