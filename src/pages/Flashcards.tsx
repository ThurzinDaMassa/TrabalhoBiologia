import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Layers, RotateCcw, ArrowLeft, ArrowRight, Shuffle, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";

interface Flashcard {
  front: string;
  back: string;
  category: "mitose" | "meiose" | "geral";
}

const allCards: Flashcard[] = [
  { front: "O que é mitose?", back: "Divisão celular que produz duas células-filhas geneticamente idênticas à célula-mãe, mantendo o número de cromossomos (2n).", category: "mitose" },
  { front: "O que é meiose?", back: "Divisão celular reducional que produz quatro células haploides (n) geneticamente diferentes, essencial para a reprodução sexuada.", category: "meiose" },
  { front: "O que acontece na prófase?", back: "A cromatina se condensa em cromossomos, o nucléolo desaparece, os centrossomos migram para os polos e o fuso mitótico começa a se formar.", category: "mitose" },
  { front: "O que é crossing-over?", back: "Troca de segmentos de DNA entre cromátides não-irmãs de cromossomos homólogos durante a prófase I, gerando variabilidade genética.", category: "meiose" },
  { front: "Quantas células a mitose produz?", back: "Duas células diploides (2n), geneticamente idênticas entre si e à célula-mãe.", category: "mitose" },
  { front: "Quantas células a meiose produz?", back: "Quatro células haploides (n), geneticamente diferentes entre si e da célula-mãe.", category: "meiose" },
  { front: "O que é a placa metafásica?", back: "Região equatorial da célula onde os cromossomos se alinham durante a metáfase, facilitando a separação igual.", category: "geral" },
  { front: "O que é segregação independente?", back: "Orientação aleatória dos pares de homólogos na metáfase I, gerando 2^n combinações possíveis (8 milhões em humanos).", category: "meiose" },
  { front: "Onde ocorre a mitose?", back: "Em todas as células somáticas do corpo, sendo responsável pelo crescimento, reparo e regeneração dos tecidos.", category: "mitose" },
  { front: "Onde ocorre a meiose?", back: "Nas gônadas (ovários e testículos), para produzir gametas (óvulos e espermatozoides).", category: "meiose" },
  { front: "O que é citocinese?", back: "Divisão do citoplasma após a divisão nuclear. Em animais, ocorre por estrangulamento; em plantas, por formação da placa celular.", category: "geral" },
  { front: "O que são cromátides-irmãs?", back: "Duas cópias idênticas de um cromossomo duplicado, unidas pelo centrômero até serem separadas na anáfase.", category: "geral" },
  { front: "O que é um bivalente?", back: "Par de cromossomos homólogos unidos durante a prófase I, também chamado de tétrade por ter 4 cromátides.", category: "meiose" },
  { front: "Qual a função do fuso mitótico?", back: "Estrutura de microtúbulos que conecta os polos da célula aos cromossomos e é responsável por separá-los durante a divisão.", category: "geral" },
  { front: "Por que a meiose I é reducional?", back: "Porque separa cromossomos homólogos, reduzindo o número de cromossomos de diploide (2n) para haploide (n).", category: "meiose" },
  { front: "O que é a anáfase?", back: "Fase em que as cromátides-irmãs (mitose/meiose II) ou homólogos (meiose I) são puxados para polos opostos da célula.", category: "geral" },
];

function shuffle<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const FlashcardsPage = () => {
  const [category, setCategory] = useState<"todos" | "mitose" | "meiose" | "geral">("todos");
  const [shuffleKey, setShuffleKey] = useState(0);

  const cards = useMemo(() => {
    const filtered = category === "todos" ? allCards : allCards.filter((c) => c.category === category);
    return shuffle(filtered);
  }, [category, shuffleKey]);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());

  const currentCard = cards[index];
  const total = cards.length;
  const progress = known.size;

  const next = () => {
    setFlipped(false);
    setTimeout(() => setIndex((i) => Math.min(i + 1, total - 1)), 150);
  };

  const prev = () => {
    setFlipped(false);
    setTimeout(() => setIndex((i) => Math.max(i - 1, 0)), 150);
  };

  const markKnown = () => {
    setKnown((s) => new Set(s).add(index));
    next();
  };

  const reshuffleCards = () => {
    setShuffleKey((k) => k + 1);
    setIndex(0);
    setFlipped(false);
    setKnown(new Set());
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cell-amber/10 border border-cell-amber/20 text-cell-amber text-sm font-medium mb-4"
            >
              <Layers className="w-4 h-4" />
              Flashcards
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Modo Estudo
            </h1>
            <p className="text-muted-foreground text-lg">
              Clique no card para virar e revelar a resposta.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex justify-center gap-1.5 mb-8 bg-muted/60 rounded-xl p-1 border border-border/30 w-fit mx-auto">
            {(["todos", "mitose", "meiose", "geral"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); setIndex(0); setFlipped(false); setKnown(new Set()); }}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all capitalize ${
                  category === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Progress */}
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span>{index + 1} / {total}</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              {progress} dominado{progress !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full mb-8 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-accent"
              animate={{ width: `${(progress / total) * 100}%` }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>

          {/* Card */}
          {currentCard && (
            <div className="perspective-1000 mb-8">
              <motion.div
                onClick={() => setFlipped(!flipped)}
                className="relative w-full h-72 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 glass-card flex flex-col items-center justify-center p-8 text-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium mb-4 ${
                    currentCard.category === "mitose"
                      ? "bg-primary/10 text-primary"
                      : currentCard.category === "meiose"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {currentCard.category}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    {currentCard.front}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-4">Clique para virar</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 glass-card flex flex-col items-center justify-center p-8 text-center"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {currentCard.back}
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              disabled={index === 0}
              className="p-3 rounded-xl border border-border hover:bg-muted transition-colors disabled:opacity-30"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={markKnown}
              className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-display font-semibold text-sm flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              Já sei!
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={next}
              disabled={index === total - 1}
              className="p-3 rounded-xl border border-border hover:bg-muted transition-colors disabled:opacity-30"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={reshuffleCards}
              className="p-3 rounded-xl border border-border hover:bg-muted transition-colors ml-2"
              title="Embaralhar"
            >
              <Shuffle className="w-5 h-5" />
            </motion.button>
          </div>

          {/* All done */}
          <AnimatePresence>
            {progress === total && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8 text-center mt-8"
              >
                <div className="text-5xl mb-3">🏆</div>
                <h3 className="font-display text-2xl font-bold text-accent mb-2">Parabéns!</h3>
                <p className="text-muted-foreground mb-4">Você dominou todos os flashcards!</p>
                <button onClick={reshuffleCards} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm">
                  <RotateCcw className="w-4 h-4" /> Recomeçar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default FlashcardsPage;
