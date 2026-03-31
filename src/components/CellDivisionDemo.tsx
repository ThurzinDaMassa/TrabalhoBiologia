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

const CellVisual = ({ step, type }: { step: DemoStep; type: "mitosis" | "meiosis" }) => {
  const isMitosis = type === "mitosis";
  const mainColor = isMitosis ? "hsl(355 70% 55%)" : "hsl(185 75% 45%)";
  const bgColor = isMitosis ? "hsl(355 70% 55% / 0.06)" : "hsl(185 75% 45% / 0.06)";
  const borderColor = isMitosis ? "hsl(355 70% 55% / 0.25)" : "hsl(185 75% 45% / 0.25)";
  const chr1 = "hsl(152 55% 42%)";
  const chr2 = "hsl(42 85% 58%)";
  const chr3 = isMitosis ? "hsl(262 55% 60%)" : "hsl(355 70% 55%)";
  const chr4 = isMitosis ? "hsl(185 75% 45%)" : "hsl(262 55% 60%)";

  const renderVisual = () => {
    switch (step.visual) {
      case "interphase":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.circle cx={100} cy={100} r={70} fill={bgColor} stroke={borderColor} strokeWidth={1.5}
              animate={{ r: [70, 73, 70] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.circle cx={100} cy={100} r={25} fill={mainColor} opacity={0.2} stroke={mainColor} strokeWidth={1}
              animate={{ r: [25, 27, 25] }} transition={{ duration: 2.5, repeat: Infinity }} />
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
            <circle cx={100} cy={100} r={70} fill={bgColor} stroke={borderColor} strokeWidth={1.5} strokeDasharray="4 2" />
            <line x1={81} y1={78} x2={81} y2={102} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={89} y1={78} x2={89} y2={102} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={111} y1={78} x2={111} y2={102} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={119} y1={78} x2={119} y2={102} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={96} y1={108} x2={96} y2={132} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            <line x1={104} y1={108} x2={104} y2={132} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            <motion.circle cx={35} cy={100} r={4} fill={mainColor} opacity={0.6}
              animate={{ cx: [45, 30] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx={165} cy={100} r={4} fill={mainColor} opacity={0.6}
              animate={{ cx: [155, 170] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
          </svg>
        );
      case "prophase1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx={100} cy={100} r={70} fill={bgColor} stroke={borderColor} strokeWidth={1.5} strokeDasharray="4 2" />
            <line x1={80} y1={78} x2={80} y2={102} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={88} y1={78} x2={88} y2={102} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            <line x1={112} y1={78} x2={112} y2={102} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={120} y1={78} x2={120} y2={102} stroke={chr4} strokeWidth={3} strokeLinecap="round" />
            <line x1={96} y1={108} x2={96} y2={132} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={104} y1={108} x2={104} y2={132} stroke={chr4} strokeWidth={3} strokeLinecap="round" />
            <motion.line x1={76} y1={85} x2={84} y2={91} stroke="hsl(42 85% 58%)" strokeWidth={1.5} opacity={0.7}
              animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <text x={100} y={175} textAnchor="middle" fontSize={8} fill={mainColor} fontFamily="Space Mono, monospace" opacity={0.7}>crossing-over</text>
          </svg>
        );
      case "metaphase":
      case "metaphase2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse cx={100} cy={100} rx={70} ry={70} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <line x1={100} y1={35} x2={100} y2={165} stroke={mainColor} strokeWidth={1} opacity={0.2} strokeDasharray="3 3" />
            <line x1={96} y1={53} x2={96} y2={77} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={104} y1={53} x2={104} y2={77} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={96} y1={88} x2={96} y2={112} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={104} y1={88} x2={104} y2={112} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={96} y1={123} x2={96} y2={147} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            <line x1={104} y1={123} x2={104} y2={147} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
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
            <ellipse cx={100} cy={100} rx={70} ry={70} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <line x1={100} y1={35} x2={100} y2={165} stroke={mainColor} strokeWidth={1} opacity={0.2} strokeDasharray="3 3" />
            <line x1={91} y1={53} x2={91} y2={77} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={99} y1={53} x2={99} y2={77} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            <line x1={91} y1={88} x2={91} y2={112} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={99} y1={88} x2={99} y2={112} stroke={chr4} strokeWidth={3} strokeLinecap="round" />
            <line x1={91} y1={123} x2={91} y2={147} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={99} y1={123} x2={99} y2={147} stroke={chr4} strokeWidth={3} strokeLinecap="round" />
          </svg>
        );
      case "anaphase":
      case "anaphase2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.ellipse cx={100} cy={100} rx={78} ry={65} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <line x1={47} y1={55} x2={47} y2={75} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={47} y1={90} x2={47} y2={110} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={47} y1={125} x2={47} y2={145} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            <line x1={153} y1={55} x2={153} y2={75} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={153} y1={90} x2={153} y2={110} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={153} y1={125} x2={153} y2={145} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
          </svg>
        );
      case "anaphase1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.ellipse cx={100} cy={100} rx={78} ry={65} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <line x1={47} y1={75} x2={47} y2={95} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={55} y1={75} x2={55} y2={95} stroke={chr1} strokeWidth={3} strokeLinecap="round" />
            <line x1={47} y1={105} x2={47} y2={125} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={55} y1={105} x2={55} y2={125} stroke={chr2} strokeWidth={3} strokeLinecap="round" />
            <line x1={145} y1={75} x2={145} y2={95} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            <line x1={153} y1={75} x2={153} y2={95} stroke={chr3} strokeWidth={3} strokeLinecap="round" />
            <line x1={145} y1={105} x2={145} y2={125} stroke={chr4} strokeWidth={3} strokeLinecap="round" />
            <line x1={153} y1={105} x2={153} y2={125} stroke={chr4} strokeWidth={3} strokeLinecap="round" />
          </svg>
        );
      case "telophase":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx={60} cy={100} r={40} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <circle cx={140} cy={100} r={40} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <circle cx={60} cy={100} r={14} fill={mainColor} opacity={0.15} stroke={mainColor} strokeWidth={1} />
            <circle cx={140} cy={100} r={14} fill={mainColor} opacity={0.15} stroke={mainColor} strokeWidth={1} />
            <motion.line x1={100} y1={55} x2={100} y2={145} stroke={mainColor} strokeWidth={2} strokeDasharray="4 3"
              animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
          </svg>
        );
      case "telophase1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx={60} cy={100} r={40} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <circle cx={140} cy={100} r={40} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <line x1={51} y1={90} x2={51} y2={110} stroke={chr1} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={59} y1={90} x2={59} y2={110} stroke={chr1} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={66} y1={90} x2={66} y2={110} stroke={chr2} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={131} y1={90} x2={131} y2={110} stroke={chr3} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={139} y1={90} x2={139} y2={110} stroke={chr3} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={149} y1={90} x2={149} y2={110} stroke={chr4} strokeWidth={2.5} strokeLinecap="round" />
            <text x={60} y={155} textAnchor="middle" fontSize={8} fill={mainColor} fontFamily="Space Mono" opacity={0.6}>n</text>
            <text x={140} y={155} textAnchor="middle" fontSize={8} fill={mainColor} fontFamily="Space Mono" opacity={0.6}>n</text>
          </svg>
        );
      case "telophase2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx={55} cy={60} r={28} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <circle cx={145} cy={60} r={28} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <circle cx={55} cy={140} r={28} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            <circle cx={145} cy={140} r={28} fill={bgColor} stroke={borderColor} strokeWidth={1.5} />
            {[[50, 55, chr1], [60, 55, chr2], [140, 55, chr3], [150, 55, chr4],
              [50, 135, chr1], [60, 135, chr4], [140, 135, chr3], [150, 135, chr2]].map(([x, y, c], i) => (
              <line key={i} x1={x as number} y1={(y as number) - 7} x2={x as number} y2={(y as number) + 7} stroke={c as string} strokeWidth={2.5} strokeLinecap="round" />
            ))}
            <text x={100} y={192} textAnchor="middle" fontSize={7} fill={mainColor} fontFamily="Space Mono" opacity={0.6}>4 células haploides (n)</text>
          </svg>
        );
      case "cytokinesis":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.circle cx={60} cy={100} r={38} fill={bgColor} stroke={borderColor} strokeWidth={1.5}
              animate={{ cx: [65, 55] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx={140} cy={100} r={38} fill={bgColor} stroke={borderColor} strokeWidth={1.5}
              animate={{ cx: [135, 145] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx={60} cy={100} r={13} fill={mainColor} opacity={0.15} stroke={mainColor} strokeWidth={1} />
            <motion.circle cx={140} cy={100} r={13} fill={mainColor} opacity={0.15} stroke={mainColor} strokeWidth={1} />
            <line x1={53} y1={93} x2={53} y2={107} stroke={chr1} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={61} y1={93} x2={61} y2={107} stroke={chr2} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={67} y1={93} x2={67} y2={107} stroke={chr3} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={133} y1={93} x2={133} y2={107} stroke={chr1} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={140} y1={93} x2={140} y2={107} stroke={chr2} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={147} y1={93} x2={147} y2={107} stroke={chr3} strokeWidth={2.5} strokeLinecap="round" />
            <text x={60} y={155} textAnchor="middle" fontSize={8} fill={mainColor} fontFamily="Space Mono" opacity={0.6}>2n</text>
            <text x={140} y={155} textAnchor="middle" fontSize={8} fill={mainColor} fontFamily="Space Mono" opacity={0.6}>2n</text>
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
  const accentColor = isMitosis ? "hsl(355 70% 55%)" : "hsl(185 75% 45%)";

  const next = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 0));
  const reset = () => { setCurrentStep(0); setIsPlaying(false); };

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
    <div
      style={{
        background: "hsl(16 12% 6%)",
        border: "1px solid hsl(45 10% 12%)",
        borderTop: `3px solid ${accentColor}`,
      }}
    >
      <div className="grid md:grid-cols-2">
        {/* Visual */}
        <div className="p-6 border-b md:border-b-0 md:border-r" style={{ borderColor: "hsl(45 10% 10%)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              className="aspect-square max-w-[260px] mx-auto"
            >
              <CellVisual step={steps[currentStep]} type={type} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Info */}
        <div className="p-6 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="block mb-3"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", color: accentColor }}
              >
                ETAPA {String(currentStep + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
              <h3
                className="font-display font-bold mb-4"
                style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                {steps[currentStep].title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "hsl(45 8% 58%)", lineHeight: 1.65 }}>
                {steps[currentStep].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="mt-6 space-y-3">
            <div className="flex gap-1">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  className="flex-1 h-0.5 transition-all duration-300"
                  style={{
                    background: i === currentStep ? accentColor : i < currentStep ? `${accentColor}44` : "hsl(45 10% 14%)",
                  }}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={currentStep === 0}
                className="crosshair-btn"
                style={{ padding: "0.4em 0.7em", opacity: currentStep === 0 ? 0.3 : 1, fontSize: "0.7rem" }}
              >
                <span><ChevronLeft className="w-4 h-4" /></span>
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="crosshair-btn flex-1"
                style={{ borderColor: accentColor, color: accentColor, padding: "0.4em", fontSize: "0.7rem" }}
              >
                <span className="flex items-center justify-center gap-1.5">
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  {isPlaying ? "Pausar" : "Animar"}
                </span>
              </button>
              <button
                onClick={next}
                disabled={currentStep === steps.length - 1}
                className="crosshair-btn"
                style={{ padding: "0.4em 0.7em", opacity: currentStep === steps.length - 1 ? 0.3 : 1, fontSize: "0.7rem" }}
              >
                <span><ChevronRight className="w-4 h-4" /></span>
              </button>
              <button
                onClick={reset}
                className="crosshair-btn"
                style={{ padding: "0.4em 0.7em", fontSize: "0.7rem" }}
              >
                <span><RotateCcw className="w-3.5 h-3.5" /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellDivisionDemo;
