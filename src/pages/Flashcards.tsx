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

const catColors = {
  mitose: { color: "hsl(355 70% 55%)", bg: "hsl(355 20% 7%)", border: "hsl(355 30% 16%)" },
  meiose: { color: "hsl(185 75% 45%)", bg: "hsl(185 20% 6%)", border: "hsl(185 30% 14%)" },
  geral: { color: "hsl(42 85% 58%)", bg: "hsl(42 20% 6%)", border: "hsl(42 30% 14%)" },
};

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

  const total = cards.length;
  const progress = known.size;
  const currentCard = cards[index];
  const catStyle = currentCard ? catColors[currentCard.category] : catColors.geral;

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
  const reshuffle = () => {
    setShuffleKey((k) => k + 1);
    setIndex(0);
    setFlipped(false);
    setKnown(new Set());
  };

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />

      {/* HEADER */}
      <section
        className="py-16 grid-bg relative overflow-hidden"
        style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <span
            className="block mb-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "hsl(42 85% 58%)" }}
          >
            FERRAMENTA DE ESTUDO
          </span>
          <h1
            className="font-display font-black mb-2"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "hsl(45 15% 92%)" }}
          >
            Flashcards
          </h1>
          <p style={{ color: "hsl(45 8% 55%)" }}>
            {allCards.length} cards — clique para virar e revelar a resposta.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-2xl">

        {/* Category filter */}
        <div className="flex gap-1 mb-10 overflow-x-auto pb-1">
          {(["todos", "mitose", "meiose", "geral"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setIndex(0); setFlipped(false); setKnown(new Set()); }}
              className="crosshair-btn shrink-0"
              style={{
                borderColor: category === cat ? "hsl(42 85% 58%)" : undefined,
                color: category === cat ? "hsl(42 85% 58%)" : undefined,
                padding: "0.4em 1em",
                fontSize: "0.65rem"
              }}
            >
              <span>{cat.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Progress */}
        <div
          className="flex items-center justify-between mb-2"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "hsl(45 8% 40%)" }}
        >
          <span>CARD {index + 1} / {total}</span>
          <span style={{ color: "hsl(152 60% 45%)" }}>{progress}/{total} DOMINADOS</span>
        </div>
        <div className="prog-bar mb-8">
          <motion.div
            className="prog-bar-fill"
            animate={{ width: `${(progress / total) * 100}%` }}
            style={{ background: "hsl(152 60% 45%)" }}
          />
        </div>

        {/* Card */}
        {currentCard && (
          <div className="flashcard-container mb-8" style={{ height: "300px" }}>
            <div
              className={`flashcard w-full h-full ${flipped ? "flipped" : ""}`}
              onClick={() => setFlipped(!flipped)}
              style={{ height: "300px" }}
            >
              {/* Front */}
              <div
                className="flashcard-face"
                style={{
                  borderColor: catStyle.border,
                  background: catStyle.bg,
                  borderTop: `3px solid ${catStyle.color}`,
                }}
              >
                <span
                  className="mono-badge mb-6"
                  style={{ color: catStyle.color, borderColor: catStyle.color }}
                >
                  {currentCard.category}
                </span>
                <h2
                  className="font-display font-bold text-center"
                  style={{ fontSize: "1.4rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.01em", lineHeight: 1.25 }}
                >
                  {currentCard.front}
                </h2>
                <span
                  className="mt-8"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "hsl(45 8% 40%)" }}
                >
                  CLIQUE PARA VIRAR
                </span>
              </div>

              {/* Back */}
              <div
                className="flashcard-face back"
                style={{ borderColor: catStyle.border }}
              >
                <p
                  className="text-center leading-relaxed"
                  style={{ fontSize: "0.95rem", color: "hsl(45 10% 72%)" }}
                >
                  {currentCard.back}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="crosshair-btn"
            style={{ padding: "0.5em 0.8em", opacity: index === 0 ? 0.3 : 1 }}
          >
            <span><ArrowLeft className="w-4 h-4" /></span>
          </button>

          <button
            onClick={markKnown}
            className="crosshair-btn crosshair-btn-solid"
            style={{ padding: "0.6em 1.8em", fontSize: "0.72rem" }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Já Sei
            </span>
          </button>

          <button
            onClick={next}
            disabled={index === total - 1}
            className="crosshair-btn"
            style={{ padding: "0.5em 0.8em", opacity: index === total - 1 ? 0.3 : 1 }}
          >
            <span><ArrowRight className="w-4 h-4" /></span>
          </button>

          <button onClick={reshuffle} className="crosshair-btn" style={{ padding: "0.5em 0.8em", marginLeft: "0.5rem" }} title="Embaralhar">
            <span><Shuffle className="w-4 h-4" /></span>
          </button>
        </div>

        {/* All done */}
        <AnimatePresence>
          {progress === total && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 text-center"
              style={{ background: "hsl(16 12% 6%)", border: "1px solid hsl(42 85% 58% / 0.3)", borderTop: "3px solid hsl(42 85% 58%)" }}
            >
              <h3 className="font-display font-bold mb-2" style={{ fontSize: "2rem", color: "hsl(42 85% 58%)" }}>
                Parabéns!
              </h3>
              <p className="mb-6" style={{ color: "hsl(45 8% 55%)" }}>
                Você dominou todos os {total} flashcards desta sessão.
              </p>
              <button onClick={reshuffle} className="crosshair-btn crosshair-btn-solid" style={{ padding: "0.7em 2em" }}>
                <span className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5" />
                  Recomeçar
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FlashcardsPage;
