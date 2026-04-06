import { motion, AnimatePresence } from "framer-motion";
import { Brain, RotateCcw, Trophy, Target, Check, X, Clock, ChevronRight, Zap } from "lucide-react";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { getRandomQuestions, QUESTIONS_PER_QUIZ } from "@/data/quizQuestions";

const TIMER_SECONDS = 30;

const QuizPage = () => {
  const [phase, setPhase] = useState<"intro" | "playing" | "results">("intro");
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [answers, setAnswers] = useState<(boolean | null)[]>([]);
  const [key, setKey] = useState(0);
  const questions = useMemo(() => getRandomQuestions(), [key]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasAnsweredRef = useRef(false);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Timer logic
  useEffect(() => {
    if (phase !== "playing" || selected !== null) return;
    hasAnsweredRef.current = false;
    setTimeLeft(TIMER_SECONDS);
    clearTimer();

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearTimer();
          // Time's up — mark as wrong
          if (!hasAnsweredRef.current) {
            hasAnsweredRef.current = true;
            setSelected(-1); // -1 = timed out
            setAnswers((a) => [...a, null]);
          }
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return clearTimer;
  }, [phase, currentQ, selected]);

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    hasAnsweredRef.current = true;
    clearTimer();
    const correct = i === questions[currentQ].correctIndex;
    setSelected(i);
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, correct]);
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= questions.length) {
      setPhase("results");
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
    }
  };

  const startQuiz = () => {
    setPhase("playing");
    setScore(0);
    setCurrentQ(0);
    setSelected(null);
    setAnswers([]);
    setKey((k) => k + 1);
  };

  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  const getResult = () => {
    if (percentage >= 90) return { tag: "EXPERT", label: "Extraordinário!", sub: "Domínio completo do tema.", color: "hsl(42 85% 58%)" };
    if (percentage >= 70) return { tag: "AVANÇADO", label: "Muito Bom!", sub: "Você domina os conceitos principais!", color: "hsl(152 60% 45%)" };
    if (percentage >= 50) return { tag: "INTERMEDIÁRIO", label: "Bom Trabalho!", sub: "Continue estudando para melhorar.", color: "hsl(185 75% 45%)" };
    return { tag: "INICIANTE", label: "Revise o Conteúdo!", sub: "Estude mais e tente novamente.", color: "hsl(355 70% 55%)" };
  };

  const letters = ["A", "B", "C", "D"];
  const q = questions[currentQ];

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />

      {/* Header */}
      <section
        className="py-16 grid-bg relative overflow-hidden"
        style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 40% 50%, hsl(42 85% 30% / 0.08), transparent 60%)" }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <span
            className="block mb-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "hsl(42 85% 58%)" }}
          >
            AVALIAÇÃO — BIOLOGIA CELULAR
          </span>
          <h1
            className="font-display font-black mb-4"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "hsl(45 15% 92%)" }}
          >
            Quiz
          </h1>
          <p style={{ color: "hsl(45 8% 55%)", fontSize: "0.95rem" }}>
            {QUESTIONS_PER_QUIZ} perguntas aleatórias • 30 segundos por pergunta
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-2xl">
        <AnimatePresence mode="wait">
          {/* ====== INTRO ====== */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-16"
            >
              <div
                className="w-20 h-20 mx-auto mb-8 flex items-center justify-center"
                style={{ background: "hsl(42 85% 58% / 0.1)", border: "2px solid hsl(42 85% 58% / 0.3)" }}
              >
                <Brain className="w-10 h-10" style={{ color: "hsl(42 85% 58%)" }} />
              </div>
              <h2
                className="font-display font-bold mb-3"
                style={{ fontSize: "2rem", color: "hsl(45 15% 92%)" }}
              >
                Pronto para o desafio?
              </h2>
              <p style={{ color: "hsl(45 8% 55%)", fontSize: "0.9rem", maxWidth: "28rem", margin: "0 auto 2rem" }}>
                Serão {QUESTIONS_PER_QUIZ} perguntas aleatórias sobre mitose, meiose e biologia celular.
                Você tem <strong style={{ color: "hsl(42 85% 58%)" }}>30 segundos</strong> para cada pergunta.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "30s por pergunta" },
                  { icon: <Target className="w-4 h-4" />, label: `${QUESTIONS_PER_QUIZ} questões` },
                  { icon: <Zap className="w-4 h-4" />, label: "Aleatórias" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "hsl(45 8% 50%)" }}>
                    <span style={{ color: "hsl(42 85% 58%)" }}>{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>

              <button onClick={startQuiz} className="crosshair-btn crosshair-btn-solid" style={{ padding: "0.9em 3em", fontSize: "0.85rem" }}>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Iniciar Quiz
                </span>
              </button>
            </motion.div>
          )}

          {/* ====== PLAYING ====== */}
          {phase === "playing" && q && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Top bar: progress + timer */}
              <div className="flex items-center justify-between mb-6">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "hsl(45 8% 50%)" }}>
                  PERGUNTA {currentQ + 1}/{questions.length}
                </span>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" style={{ color: timeLeft <= 10 ? "hsl(355 70% 60%)" : "hsl(42 85% 58%)" }} />
                  <span
                    className="font-display font-bold"
                    style={{
                      fontSize: "1.3rem",
                      color: timeLeft <= 10 ? "hsl(355 70% 60%)" : timeLeft <= 20 ? "hsl(42 85% 58%)" : "hsl(45 15% 85%)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {timeLeft}s
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="prog-bar mb-8" style={{ height: "4px" }}>
                <motion.div
                  className="prog-bar-fill"
                  initial={{ width: `${(currentQ / questions.length) * 100}%` }}
                  animate={{ width: `${((currentQ + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Timer bar */}
              <div className="mb-8" style={{ height: "3px", background: "hsl(45 10% 12%)", overflow: "hidden" }}>
                <motion.div
                  key={`timer-${currentQ}`}
                  initial={{ width: "100%" }}
                  animate={{ width: selected !== null ? undefined : "0%" }}
                  transition={selected !== null ? {} : { duration: TIMER_SECONDS, ease: "linear" }}
                  style={{
                    height: "100%",
                    background: timeLeft <= 10 ? "hsl(355 70% 55%)" : "hsl(42 85% 58%)",
                    transition: selected !== null ? "none" : undefined,
                  }}
                />
              </div>

              {/* Question card */}
              <div
                style={{
                  background: "hsl(16 12% 6%)",
                  border: "1px solid hsl(45 10% 12%)",
                }}
              >
                <div className="px-6 py-5" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
                  <p
                    className="font-display font-semibold"
                    style={{ fontSize: "1.1rem", color: "hsl(45 12% 88%)", lineHeight: 1.5 }}
                  >
                    {q.question}
                  </p>
                </div>

                <div className="p-4 space-y-2">
                  {q.options.map((opt: string, i: number) => {
                    const isCorrect = i === q.correctIndex;
                    const isSelected = i === selected;
                    const timedOut = selected === -1;
                    const answered = selected !== null;

                    let bgStyle = "transparent";
                    let borderStyle = "1px solid hsl(45 10% 14%)";
                    let textColor = "hsl(45 12% 82%)";
                    let opacity = 1;

                    if (answered) {
                      if (isCorrect) {
                        bgStyle = "hsl(152 60% 40% / 0.1)";
                        borderStyle = "1px solid hsl(152 60% 40%)";
                        textColor = "hsl(152 60% 70%)";
                      } else if (isSelected) {
                        bgStyle = "hsl(355 70% 50% / 0.1)";
                        borderStyle = "1px solid hsl(355 70% 50%)";
                        textColor = "hsl(355 70% 70%)";
                      } else {
                        opacity = 0.35;
                      }
                    }

                    return (
                      <motion.button
                        key={i}
                        onClick={() => handleSelect(i)}
                        disabled={answered}
                        whileHover={!answered ? { scale: 1.01 } : {}}
                        whileTap={!answered ? { scale: 0.99 } : {}}
                        className="w-full text-left flex items-center gap-4 px-5 py-4 transition-all"
                        style={{
                          background: bgStyle,
                          border: borderStyle,
                          color: textColor,
                          opacity,
                          cursor: answered ? "default" : "pointer",
                          fontSize: "0.9rem",
                        }}
                      >
                        <span
                          className="flex items-center justify-center shrink-0"
                          style={{
                            width: "2rem",
                            height: "2rem",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            border: borderStyle,
                            background: answered && isCorrect ? "hsl(152 60% 40% / 0.2)" : answered && isSelected ? "hsl(355 70% 50% / 0.2)" : "hsl(45 10% 8%)",
                          }}
                        >
                          {answered && isCorrect ? <Check className="w-4 h-4" style={{ color: "hsl(152 60% 55%)" }} /> :
                           answered && isSelected ? <X className="w-4 h-4" style={{ color: "hsl(355 70% 60%)" }} /> :
                           letters[i]}
                        </span>
                        <span className="flex-1">{opt}</span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Feedback + Next */}
                <AnimatePresence>
                  {selected !== null && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 py-4 flex items-center justify-between"
                        style={{ borderTop: "1px solid hsl(45 10% 10%)" }}
                      >
                        <span
                          className="flex items-center gap-2"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            letterSpacing: "0.08em",
                            color: selected === q.correctIndex ? "hsl(152 60% 55%)" : "hsl(355 70% 60%)",
                          }}
                        >
                          {selected === q.correctIndex ? (
                            <><Check className="w-3.5 h-3.5" /> CORRETO!</>
                          ) : selected === -1 ? (
                            <><Clock className="w-3.5 h-3.5" /> TEMPO ESGOTADO — {q.options[q.correctIndex]}</>
                          ) : (
                            <><X className="w-3.5 h-3.5" /> INCORRETO — {q.options[q.correctIndex]}</>
                          )}
                        </span>
                        <button
                          onClick={nextQuestion}
                          className="crosshair-btn crosshair-btn-solid"
                          style={{ padding: "0.5em 1.2em", fontSize: "0.75rem" }}
                        >
                          <span className="flex items-center gap-1.5">
                            {currentQ + 1 >= questions.length ? "Ver Resultado" : "Próxima"}
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mini progress dots */}
              <div className="flex justify-center gap-1.5 mt-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 transition-all"
                    style={{
                      background:
                        i < answers.length
                          ? answers[i] ? "hsl(152 60% 50%)" : "hsl(355 70% 55%)"
                          : i === currentQ
                          ? "hsl(42 85% 58%)"
                          : "hsl(45 10% 15%)",
                      border: i === currentQ ? "1px solid hsl(42 85% 58%)" : "1px solid transparent",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* ====== RESULTS ====== */}
          {phase === "results" && (() => {
            const r = getResult();
            return (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className="text-center py-10"
                  style={{
                    background: "hsl(16 12% 6%)",
                    border: `1px solid ${r.color}`,
                    borderTop: `4px solid ${r.color}`,
                  }}
                >
                  <span
                    className="mono-badge mb-6 inline-block"
                    style={{ color: r.color, borderColor: r.color }}
                  >
                    {r.tag}
                  </span>

                  <div
                    className="font-display font-black mb-2"
                    style={{ fontSize: "5rem", lineHeight: 1, color: r.color }}
                  >
                    {percentage}<span style={{ fontSize: "2rem" }}>%</span>
                  </div>

                  <h3
                    className="font-display font-bold mb-1"
                    style={{ fontSize: "1.8rem", color: "hsl(45 12% 88%)" }}
                  >
                    {r.label}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "hsl(45 8% 55%)", marginBottom: "1.5rem" }}>{r.sub}</p>

                  {/* Score dots */}
                  <div className="flex flex-wrap justify-center gap-1.5 mb-8 px-8">
                    {answers.map((correct, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="w-8 h-8 flex items-center justify-center"
                        style={{
                          background: correct ? "hsl(152 60% 40% / 0.15)" : "hsl(355 70% 55% / 0.10)",
                          border: `1px solid ${correct ? "hsl(152 60% 40%)" : "hsl(355 70% 55%)"}`,
                          fontSize: "0.65rem",
                          fontFamily: "var(--font-mono)",
                          color: correct ? "hsl(152 60% 55%)" : "hsl(355 70% 65%)",
                        }}
                      >
                        {correct ? "✓" : "✗"}
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-6 mb-2" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "hsl(45 8% 50%)" }}>
                    <span><Check className="w-3 h-3 inline mr-1" style={{ color: "hsl(152 60% 50%)" }} />{score} CORRETAS</span>
                    <span><X className="w-3 h-3 inline mr-1" style={{ color: "hsl(355 70% 55%)" }} />{questions.length - score} ERRADAS</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <button
                    onClick={startQuiz}
                    className="crosshair-btn crosshair-btn-solid"
                    style={{ padding: "0.7em 1.8em" }}
                  >
                    <span className="flex items-center gap-2">
                      <RotateCcw className="w-3.5 h-3.5" />
                      Tentar Novamente
                    </span>
                  </button>
                  <Link to="/comparacao">
                    <button className="crosshair-btn" style={{ padding: "0.7em 1.8em" }}>
                      <span className="flex items-center gap-2">
                        <Target className="w-3.5 h-3.5" />
                        Revisar Conteúdo
                      </span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;
