import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useCallback } from "react";
import { Gamepad2, RotateCcw, Trophy, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

interface Phase {
  name: string;
  order: number;
}

const mitosisPhases: Phase[] = [
  { name: "Interfase", order: 0 },
  { name: "Prófase", order: 1 },
  { name: "Metáfase", order: 2 },
  { name: "Anáfase", order: 3 },
  { name: "Telófase", order: 4 },
  { name: "Citocinese", order: 5 },
];

const meiosisPhases: Phase[] = [
  { name: "Interfase", order: 0 },
  { name: "Prófase I", order: 1 },
  { name: "Metáfase I", order: 2 },
  { name: "Anáfase I", order: 3 },
  { name: "Telófase I", order: 4 },
  { name: "Prófase II", order: 5 },
  { name: "Metáfase II", order: 6 },
  { name: "Anáfase II", order: 7 },
  { name: "Telófase II", order: 8 },
];

interface MatchItem {
  phase: string;
  description: string;
}

const matchingItems: MatchItem[] = [
  { phase: "Prófase", description: "Cromossomos se condensam e o fuso mitótico começa a se formar" },
  { phase: "Metáfase", description: "Cromossomos se alinham na placa equatorial da célula" },
  { phase: "Anáfase", description: "Cromátides-irmãs se separam e migram para polos opostos" },
  { phase: "Telófase", description: "Envelope nuclear se reorganiza e cromossomos descondensam" },
  { phase: "Prófase I", description: "Homólogos se pareiam e ocorre crossing-over" },
  { phase: "Anáfase I", description: "Cromossomos homólogos se separam (divisão reducional)" },
];

function shuffle<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

type GameMode = null | "order-mitosis" | "order-meiosis" | "matching";

const PhaseGamePage = () => {
  const [mode, setMode] = useState<GameMode>(null);
  const [key, setKey] = useState(0);

  const reset = () => setKey((k) => k + 1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4"
            >
              <Gamepad2 className="w-4 h-4" />
              Minigame
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Jogo das Fases
            </h1>
            <p className="text-muted-foreground text-lg">
              Teste sua memória ordenando as fases ou associando descrições!
            </p>
          </div>

          {!mode ? (
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { id: "order-mitosis" as GameMode, title: "Ordenar Mitose", desc: "Coloque as 6 fases na ordem correta", color: "primary" },
                { id: "order-meiosis" as GameMode, title: "Ordenar Meiose", desc: "Coloque as 9 fases na ordem correta", color: "secondary" },
                { id: "matching" as GameMode, title: "Associar Fases", desc: "Conecte cada fase à sua descrição", color: "accent" },
              ].map((g) => (
                <motion.button
                  key={g.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setMode(g.id); setKey(0); }}
                  className={`glass-card p-6 text-left hover:border-${g.color}/30 transition-colors`}
                >
                  <h3 className={`font-display text-lg font-bold text-${g.color} mb-2`}>{g.title}</h3>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </motion.button>
              ))}
            </div>
          ) : (
            <div key={key}>
              <div className="flex items-center gap-3 mb-6">
                <button onClick={() => setMode(null)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ← Voltar
                </button>
                <button onClick={reset} className="ml-auto p-2 rounded-lg border border-border hover:bg-muted transition-colors">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
              {mode === "order-mitosis" && <OrderingGame phases={mitosisPhases} variant="mitosis" />}
              {mode === "order-meiosis" && <OrderingGame phases={meiosisPhases} variant="meiosis" />}
              {mode === "matching" && <MatchingGame />}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

/* ========== ORDERING GAME ========== */
const OrderingGame = ({ phases, variant }: { phases: Phase[]; variant: "mitosis" | "meiosis" }) => {
  const shuffled = useMemo(() => shuffle(phases), [phases]);
  const [selected, setSelected] = useState<Phase[]>([]);
  const [available, setAvailable] = useState<Phase[]>(shuffled);
  const [wrong, setWrong] = useState(false);
  const done = selected.length === phases.length;
  const colorClass = variant === "mitosis" ? "primary" : "secondary";

  const handleSelect = useCallback((phase: Phase) => {
    const nextOrder = selected.length;
    if (phase.order === nextOrder) {
      setSelected((s) => [...s, phase]);
      setAvailable((a) => a.filter((p) => p.name !== phase.name));
      setWrong(false);
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 800);
    }
  }, [selected.length]);

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">
        Clique nas fases na <strong className="text-foreground">ordem correta</strong>:
      </p>

      {/* Selected phases */}
      <div className="flex flex-wrap gap-2 min-h-[48px] mb-6 p-3 rounded-xl border-2 border-dashed border-border">
        <AnimatePresence>
          {selected.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`px-4 py-2 rounded-lg bg-${colorClass}/10 text-${colorClass} text-sm font-medium flex items-center gap-2`}
            >
              <span className={`w-5 h-5 rounded-full bg-${colorClass} text-${colorClass}-foreground text-xs flex items-center justify-center font-bold`}>
                {i + 1}
              </span>
              {p.name}
            </motion.div>
          ))}
        </AnimatePresence>
        {selected.length === 0 && (
          <span className="text-sm text-muted-foreground italic">Selecione a primeira fase...</span>
        )}
      </div>

      {/* Available phases */}
      <motion.div
        animate={wrong ? { x: [0, -8, 8, -8, 8, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {available.map((p) => (
          <motion.button
            key={p.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(p)}
            className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
              wrong
                ? "border-destructive/50 text-destructive"
                : "border-border hover:border-" + colorClass + "/50 text-foreground hover:bg-" + colorClass + "/5"
            }`}
          >
            {p.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Result */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 text-center"
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-5xl mb-3">
              🎉
            </motion.div>
            <h3 className={`font-display text-2xl font-bold text-${colorClass} mb-2`}>
              Parabéns!
            </h3>
            <p className="text-muted-foreground mb-6">
              Você ordenou todas as fases corretamente!
            </p>
            <Link to="/quiz">
              <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-${colorClass} text-${colorClass}-foreground font-display font-semibold`}>
                Ir para o Quiz <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ========== MATCHING GAME ========== */
const MatchingGame = () => {
  const items = useMemo(() => {
    const picked = shuffle(matchingItems).slice(0, 4);
    return picked;
  }, []);

  const shuffledDescs = useMemo(() => shuffle(items.map((it) => it.description)), [items]);
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [wrongPair, setWrongPair] = useState(false);

  const done = Object.keys(matches).length === items.length;

  const handlePhaseClick = (phase: string) => {
    if (matches[phase]) return;
    setSelectedPhase(phase);
  };

  const handleDescClick = (desc: string) => {
    if (!selectedPhase) return;
    if (Object.values(matches).includes(desc)) return;

    const item = items.find((it) => it.phase === selectedPhase);
    if (item?.description === desc) {
      setMatches((m) => ({ ...m, [selectedPhase]: desc }));
      setSelectedPhase(null);
      setWrongPair(false);
    } else {
      setWrongPair(true);
      setTimeout(() => {
        setWrongPair(false);
        setSelectedPhase(null);
      }, 600);
    }
  };

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-6">
        Selecione uma <strong className="text-foreground">fase</strong> e depois sua <strong className="text-foreground">descrição</strong> correspondente:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Phases */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Fases</h4>
          {items.map((it) => {
            const matched = !!matches[it.phase];
            const isSelected = selectedPhase === it.phase;
            return (
              <motion.button
                key={it.phase}
                onClick={() => handlePhaseClick(it.phase)}
                whileTap={{ scale: 0.97 }}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  matched
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : isSelected
                    ? "border-accent bg-accent/10 text-accent ring-2 ring-accent/30"
                    : "border-border hover:border-accent/50 text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  {matched && <CheckCircle2 className="w-4 h-4 text-primary" />}
                  {it.phase}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Descriptions */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Descrições</h4>
          {shuffledDescs.map((desc) => {
            const matched = Object.values(matches).includes(desc);
            return (
              <motion.button
                key={desc}
                onClick={() => handleDescClick(desc)}
                whileTap={{ scale: 0.97 }}
                animate={wrongPair && selectedPhase ? { x: [0, -4, 4, -4, 0] } : {}}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                  matched
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-border hover:border-accent/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  {matched && <CheckCircle2 className="w-4 h-4 text-primary" />}
                  {desc}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 text-center"
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-5xl mb-3">
              🧬
            </motion.div>
            <h3 className="font-display text-2xl font-bold text-accent mb-2">Perfeito!</h3>
            <p className="text-muted-foreground mb-6">Todas as fases foram associadas corretamente!</p>
            <Link to="/quiz">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-display font-semibold">
                Ir para o Quiz <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhaseGamePage;
