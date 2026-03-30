import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

interface DemoStep {
  title: string;
  description: string;
  visual: "interphase" | "prophase" | "metaphase" | "anaphase" | "telophase" | "cytokinesis" | "prophase1" | "metaphase1" | "anaphase1" | "telophase1" | "prophase2" | "metaphase2" | "anaphase2" | "telophase2";
}

interface CellDivisionDemoProps {
  type: "mitosis" | "meiosis";
}

const mitosisSteps: DemoStep[] = [
  { title: "Interfase", description: "A célula está em seu estado normal. O DNA está como cromatina descondensada dentro do núcleo. A célula cresce e duplica seu DNA antes de iniciar a divisão.", visual: "interphase" },
  { title: "Prófase", description: "A cromatina se condensa em cromossomos visíveis (cada um com 2 cromátides-irmãs). O fuso mitótico começa a se formar e a membrana nuclear se fragmenta.", visual: "prophase" },
  { title: "Metáfase", description: "Os cromossomos se alinham no centro da célula (placa metafásica). As fibras do fuso se prendem aos centrômeros de cada cromossomo.", visual: "metaphase" },
  { title: "Anáfase", description: "As cromátides-irmãs são separadas e puxadas para polos opostos da célula. A célula começa a se alongar.", visual: "anaphase" },
  { title: "Telófase", description: "Os cromossomos chegam aos polos e descondensam. Novas membranas nucleares se formam ao redor de cada conjunto.", visual: "telophase" },
  { title: "Citocinese", description: "O citoplasma se divide, formando duas células-filhas geneticamente idênticas à célula-mãe, cada uma com 2n cromossomos.", visual: "cytokinesis" },
];

const meiosisSteps: DemoStep[] = [
  { title: "Interfase", description: "A célula duplica seu DNA. Cada cromossomo passa a ter duas cromátides-irmãs unidas pelo centrômero.", visual: "interphase" },
  { title: "Prófase I", description: "Cromossomos homólogos se pareiam (sinapse) e ocorre crossing-over — troca de segmentos de DNA que gera variabilidade genética.", visual: "prophase1" },
  { title: "Metáfase I", description: "Os pares de homólogos (bivalentes) se alinham na placa equatorial. A orientação é aleatória (segregação independente).", visual: "metaphase1" },
  { title: "Anáfase I", description: "Os homólogos se separam (não as cromátides!). Cada polo recebe um cromossomo de cada par — a célula vai de 2n para n.", visual: "anaphase1" },
  { title: "Telófase I", description: "Formam-se duas células haploides (n). Cada cromossomo ainda tem 2 cromátides-irmãs.", visual: "telophase1" },
  { title: "Prófase II", description: "Semelhante à prófase da mitose. Novos fusos se formam. Não há pareamento nem crossing-over.", visual: "prophase2" },
  { title: "Metáfase II", description: "Os cromossomos se alinham individualmente na placa equatorial de cada célula.", visual: "metaphase2" },
  { title: "Anáfase II", description: "As cromátides-irmãs finalmente se separam e migram para polos opostos.", visual: "anaphase2" },
  { title: "Telófase II", description: "Formam-se 4 células haploides (n), geneticamente diferentes entre si e da célula original.", visual: "telophase2" },
];

const ChromosomePair = ({ x, y, color1, color2, separated, crossed }: { x: number; y: number; color1: string; color2: string; separated?: boolean; crossed?: boolean }) => (
  <g>
    <motion.line
      x1={x - 4} y1={y - 12} x2={x - 4} y2={y + 12}
      stroke={color1} strokeWidth={3} strokeLinecap="round"
      animate={{ x1: separated ? x - 12 : x - 4, x2: separated ? x - 12 : x - 4 }}
      transition={{ duration: 0.8 }}
    />
    <motion.line
      x1={x + 4} y1={y - 12} x2={x + 4} y2={y + 12}
      stroke={crossed ? color1 : color2} strokeWidth={3} strokeLinecap="round"
      animate={{ x1: separated ? x + 12 : x + 4, x2: separated ? x + 12 : x + 4 }}
      transition={{ duration: 0.8 }}
    />
  </g>
);

const CellVisual = ({ step, type }: { step: DemoStep; type: "mitosis" | "meiosis" }) => {
  const isMitosis = type === "mitosis";
  const mainColor = isMitosis ? "hsl(350, 65%, 52%)" : "hsl(230, 55%, 48%)";
  const bgColor = isMitosis ? "hsl(350, 65%, 52%, 0.06)" : "hsl(230, 55%, 48%, 0.06)";
  const borderColor = isMitosis ? "hsl(350, 65%, 52%, 0.2)" : "hsl(230, 55%, 48%, 0.2)";
  const chr1 = "hsl(160, 50%, 40%)";
  const chr2 = "hsl(210, 60%, 50%)";
  const chr3 = isMitosis ? "hsl(170, 50%, 40%)" : "hsl(350, 65%, 52%)";
  const chr4 = isMitosis ? "hsl(32, 85%, 55%)" : "hsl(260, 55%, 55%)";

  const renderVisual = () => {
    switch (step.visual) {
      case "interphase":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.circle cx={100} cy={100} r={70} fill={bgColor} stroke={borderColor} strokeWidth={2}
              animate={{ r: [70, 73, 70] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.circle cx={100} cy={100} r={25} fill={mainColor} opacity={0.3} stroke={mainColor} strokeWidth={1}
              animate={{ r: [25, 27, 25] }} transition={{ duration: 2.5, repeat: Infinity }} />
            {/* Cromatina difusa */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const cx = 100 + Math.cos(rad) * 12;
              const cy = 100 + Math.sin(rad) * 12;
              return <motion.circle key={i} cx={cx} cy={cy} r={2} fill={mainColor} opacity={0.5}
                animate={{ cx: [cx, cx + 2, cx], cy: [cy, cy - 2, cy] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />;
            })}
          </svg>
        );
      case "prophase":
      case "prophase2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.circle cx={100} cy={100} r={70} fill={bgColor} stroke={borderColor} strokeWidth={2} strokeDasharray="4 2" />
            <ChromosomePair x={85} y={90} color1={chr1} color2={chr1} />
            <ChromosomePair x={115} y={90} color1={chr2} color2={chr2} />
            <ChromosomePair x={100} y={115} color1={chr3} color2={chr3} />
            {/* Centrossomos */}
            <motion.circle cx={40} cy={100} r={4} fill={mainColor} opacity={0.6}
              animate={{ cx: [50, 35] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx={160} cy={100} r={4} fill={mainColor} opacity={0.6}
              animate={{ cx: [150, 165] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
          </svg>
        );
      case "prophase1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.circle cx={100} cy={100} r={70} fill={bgColor} stroke={borderColor} strokeWidth={2} strokeDasharray="4 2" />
            {/* Homólogos pareados com crossing-over */}
            <ChromosomePair x={80} y={88} color1={chr1} color2={chr3} crossed />
            <ChromosomePair x={120} y={88} color1={chr2} color2={chr4} crossed />
            <ChromosomePair x={100} y={115} color1={chr1} color2={chr4} crossed />
            {/* X de crossing over */}
            <motion.line x1={76} y1={85} x2={84} y2={91} stroke="hsl(38, 80%, 55%)" strokeWidth={1.5} opacity={0.7}
              animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <text x={100} y={175} textAnchor="middle" fontSize={9} fill={mainColor} fontWeight="bold" opacity={0.7}>crossing-over</text>
          </svg>
        );
      case "metaphase":
      case "metaphase2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.ellipse cx={100} cy={100} rx={70} ry={70} fill={bgColor} stroke={borderColor} strokeWidth={2} />
            {/* Placa metafásica */}
            <line x1={100} y1={35} x2={100} y2={165} stroke={mainColor} strokeWidth={1} opacity={0.2} strokeDasharray="3 3" />
            <ChromosomePair x={100} y={65} color1={chr1} color2={chr1} />
            <ChromosomePair x={100} y={100} color1={chr2} color2={chr2} />
            <ChromosomePair x={100} y={135} color1={chr3} color2={chr3} />
            {/* Fibras do fuso */}
            {[65, 100, 135].map((y) => (
              <g key={y}>
                <line x1={30} y1={100} x2={96} y2={y} stroke={mainColor} strokeWidth={0.5} opacity={0.3} />
                <line x1={170} y1={100} x2={104} y2={y} stroke={mainColor} strokeWidth={0.5} opacity={0.3} />
              </g>
            ))}
          </svg>
        );
      case "metaphase1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.ellipse cx={100} cy={100} rx={70} ry={70} fill={bgColor} stroke={borderColor} strokeWidth={2} />
            <line x1={100} y1={35} x2={100} y2={165} stroke={mainColor} strokeWidth={1} opacity={0.2} strokeDasharray="3 3" />
            {/* Bivalentes na placa */}
            <ChromosomePair x={95} y={65} color1={chr1} color2={chr3} />
            <ChromosomePair x={95} y={100} color1={chr2} color2={chr4} />
            <ChromosomePair x={95} y={135} color1={chr1} color2={chr4} />
            <text x={100} y={185} textAnchor="middle" fontSize={9} fill={mainColor} fontWeight="bold" opacity={0.7}>bivalentes</text>
          </svg>
        );
      case "anaphase":
      case "anaphase2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.ellipse cx={100} cy={100} rx={75} ry={65} fill={bgColor} stroke={borderColor} strokeWidth={2}
              animate={{ rx: [70, 80, 70] }} transition={{ duration: 2, repeat: Infinity }} />
            {/* Cromátides separadas - esquerda */}
            <motion.line x1={50} y1={55} x2={50} y2={80} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <motion.line x1={50} y1={90} x2={50} y2={115} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <motion.line x1={50} y1={125} x2={50} y2={150} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            {/* Cromátides separadas - direita */}
            <motion.line x1={150} y1={55} x2={150} y2={80} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <motion.line x1={150} y1={90} x2={150} y2={115} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <motion.line x1={150} y1={125} x2={150} y2={150} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            {/* Setas */}
            <motion.path d="M70 100 L55 100" stroke={mainColor} strokeWidth={1.5} fill="none" markerEnd="url(#arrow)"
              animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <motion.path d="M130 100 L145 100" stroke={mainColor} strokeWidth={1.5} fill="none" markerEnd="url(#arrow)"
              animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <defs><marker id="arrow" viewBox="0 0 6 6" refX={5} refY={3} markerWidth={4} markerHeight={4} orient="auto-start-reverse">
              <path d="M0,0 L6,3 L0,6 Z" fill={mainColor} /></marker></defs>
          </svg>
        );
      case "anaphase1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.ellipse cx={100} cy={100} rx={75} ry={65} fill={bgColor} stroke={borderColor} strokeWidth={2} />
            {/* Homólogos indo para lados opostos */}
            <ChromosomePair x={50} y={80} color1={chr1} color2={chr1} />
            <ChromosomePair x={50} y={120} color1={chr2} color2={chr2} />
            <ChromosomePair x={150} y={80} color1={chr3} color2={chr3} />
            <ChromosomePair x={150} y={120} color1={chr4} color2={chr4} />
            <text x={100} y={185} textAnchor="middle" fontSize={8} fill={mainColor} fontWeight="bold" opacity={0.7}>homólogos se separam (2n → n)</text>
          </svg>
        );
      case "telophase":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Duas regiões nucleares */}
            <motion.circle cx={60} cy={100} r={40} fill={bgColor} stroke={borderColor} strokeWidth={2} />
            <motion.circle cx={140} cy={100} r={40} fill={bgColor} stroke={borderColor} strokeWidth={2} />
            <motion.circle cx={60} cy={100} r={15} fill={mainColor} opacity={0.2} stroke={mainColor} strokeWidth={1} />
            <motion.circle cx={140} cy={100} r={15} fill={mainColor} opacity={0.2} stroke={mainColor} strokeWidth={1} />
            {/* Sulco de clivagem */}
            <motion.line x1={100} y1={55} x2={100} y2={145} stroke={mainColor} strokeWidth={2} strokeDasharray="4 3"
              animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
          </svg>
        );
      case "telophase1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.circle cx={60} cy={100} r={40} fill={bgColor} stroke={borderColor} strokeWidth={2} />
            <motion.circle cx={140} cy={100} r={40} fill={bgColor} stroke={borderColor} strokeWidth={2} />
            <ChromosomePair x={55} y={95} color1={chr1} color2={chr1} />
            <ChromosomePair x={65} y={110} color1={chr2} color2={chr2} />
            <ChromosomePair x={135} y={95} color1={chr3} color2={chr3} />
            <ChromosomePair x={145} y={110} color1={chr4} color2={chr4} />
            <text x={60} y={155} textAnchor="middle" fontSize={8} fill={mainColor} opacity={0.7}>n</text>
            <text x={140} y={155} textAnchor="middle" fontSize={8} fill={mainColor} opacity={0.7}>n</text>
          </svg>
        );
      case "telophase2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* 4 células */}
            <motion.circle cx={60} cy={60} r={30} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <motion.circle cx={140} cy={60} r={30} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <motion.circle cx={60} cy={140} r={30} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <motion.circle cx={140} cy={140} r={30} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            {/* Cromossomos individuais */}
            <line x1={55} y1={55} x2={55} y2={68} stroke={chr1} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={65} y1={55} x2={65} y2={68} stroke={chr2} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={135} y1={55} x2={135} y2={68} stroke={chr3} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={145} y1={55} x2={145} y2={68} stroke={chr4} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={55} y1={135} x2={55} y2={148} stroke={chr1} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={65} y1={135} x2={65} y2={148} stroke={chr4} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={135} y1={135} x2={135} y2={148} stroke={chr3} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={145} y1={135} x2={145} y2={148} stroke={chr2} strokeWidth={2.5} strokeLinecap="round" />
            <text x={100} y={195} textAnchor="middle" fontSize={9} fill={mainColor} fontWeight="bold" opacity={0.7}>4 células haploides (n)</text>
          </svg>
        );
      case "cytokinesis":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.circle cx={60} cy={100} r={38} fill={bgColor} stroke={borderColor} strokeWidth={2}
              animate={{ cx: [65, 55] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx={140} cy={100} r={38} fill={bgColor} stroke={borderColor} strokeWidth={2}
              animate={{ cx: [135, 145] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx={60} cy={100} r={14} fill={mainColor} opacity={0.2} stroke={mainColor} strokeWidth={1} />
            <motion.circle cx={140} cy={100} r={14} fill={mainColor} opacity={0.2} stroke={mainColor} strokeWidth={1} />
            {/* Cromossomos em cada célula */}
            <line x1={53} y1={93} x2={53} y2={107} stroke={chr1} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={60} y1={93} x2={60} y2={107} stroke={chr2} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={67} y1={93} x2={67} y2={107} stroke={chr3} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={133} y1={93} x2={133} y2={107} stroke={chr1} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={140} y1={93} x2={140} y2={107} stroke={chr2} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={147} y1={93} x2={147} y2={107} stroke={chr3} strokeWidth={2.5} strokeLinecap="round" />
            <text x={60} y={155} textAnchor="middle" fontSize={9} fill={mainColor} opacity={0.7}>2n</text>
            <text x={140} y={155} textAnchor="middle" fontSize={9} fill={mainColor} opacity={0.7}>2n</text>
            <text x={100} y={185} textAnchor="middle" fontSize={9} fill={mainColor} fontWeight="bold" opacity={0.7}>células idênticas</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return renderVisual();
};

const CellDivisionDemo = ({ type }: CellDivisionDemoProps) => {
  const steps = type === "mitosis" ? mitosisSteps : meiosisSteps;
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMitosis = type === "mitosis";

  const next = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 0));
  const reset = () => { setCurrentStep(0); setIsPlaying(false); };

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((s) => {
        if (s >= steps.length - 1) { setIsPlaying(false); return s; }
        return s + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="glass-card overflow-hidden">
      <div className="h-1" style={{ background: isMitosis ? "var(--gradient-mitosis)" : "var(--gradient-meiosis)" }} />
      <div className="p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Visual */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`w-full aspect-square max-w-[280px] mx-auto rounded-2xl border-2 p-4 ${
                isMitosis ? "border-primary/20 bg-primary/5" : "border-secondary/20 bg-secondary/5"
              }`}
            >
              <CellVisual step={steps[currentStep]} type={type} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Info */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                isMitosis ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
              }`}>
                Etapa {currentStep + 1} de {steps.length}
              </div>
              <h3 className={`font-display text-2xl font-bold mb-3 ${
                isMitosis ? "text-primary" : "text-secondary"
              }`}>
                {steps[currentStep].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {steps[currentStep].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="flex gap-1.5 mt-6 mb-4">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
                  i === currentStep
                    ? isMitosis ? "bg-primary" : "bg-secondary"
                    : i < currentStep
                    ? isMitosis ? "bg-primary/30" : "bg-secondary/30"
                    : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={currentStep === 0}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-2 rounded-lg transition-colors ${
                isMitosis ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={reset}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors ml-auto"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellDivisionDemo;
