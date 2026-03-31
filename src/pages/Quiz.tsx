import { motion, AnimatePresence } from "framer-motion";
import { Brain, RotateCcw, Trophy, Target, Check, X } from "lucide-react";
import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { getRandomQuestions, QUESTIONS_PER_QUIZ } from "@/data/quizQuestions";

const QuizPage = () => {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [key, setKey] = useState(0);
  const questions = useMemo(() => getRandomQuestions(), [key]);

  const handleAnswer = useCallback((correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    setAnswered((a) => a + 1);
  }, []);

  const resetQuiz = () => {
    setScore(0);
    setAnswered(0);
    setKey((k) => k + 1);
  };

  const allAnswered = answered === questions.length;
  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  const getResult = () => {
    if (percentage >= 90) return { tag: "EXPERT", label: "Extraordinário!", sub: "Domínio completo do tema.", color: "hsl(42 85% 58%)" };
    if (percentage >= 70) return { tag: "AVANÇADO", label: "Muito Bom!", sub: "Você domina os conceitos principais!", color: "hsl(152 60% 45%)" };
    if (percentage >= 50) return { tag: "INTERMEDIÁRIO", label: "Bom Trabalho!", sub: "Continue estudando para melhorar.", color: "hsl(185 75% 45%)" };
    return { tag: "INICIANTE", label: "Revise o Conteúdo!", sub: "Estude mais e tente novamente.", color: "hsl(355 70% 55%)" };
  };

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
            {QUESTIONS_PER_QUIZ} perguntas aleatórias sobre mitose, meiose e biologia celular.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-3xl">

        {/* Progress */}
        <div
          className="mb-10 p-6"
          style={{
            background: "hsl(16 12% 6%)",
            border: "1px solid hsl(45 10% 12%)",
            borderTop: "3px solid hsl(42 85% 58%)"
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5" style={{ color: "hsl(42 85% 58%)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", color: "hsl(45 8% 60%)" }}>
                PONTUAÇÃO
              </span>
            </div>
            <span
              className="font-display font-bold"
              style={{ fontSize: "2rem", lineHeight: 1, color: "hsl(42 85% 58%)" }}
            >
              {score}<span style={{ fontSize: "1rem", color: "hsl(45 8% 45%)" }}>/{questions.length}</span>
            </span>
          </div>
          <div className="prog-bar">
            <motion.div
              className="prog-bar-fill"
              animate={{ width: `${(answered / questions.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <div
            className="mt-2 flex justify-between"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "hsl(45 8% 40%)" }}
          >
            <span>{answered}/{questions.length} RESPONDIDAS</span>
            <span>{answered > 0 ? Math.round((score / answered) * 100) : 0}% ACERTOS</span>
          </div>
        </div>

        {/* Questions */}
        <div key={key} className="space-y-6 mb-10">
          {questions.map((q, qi) => (
            <QuizItem key={qi} q={q} qi={qi} onAnswer={handleAnswer} />
          ))}
        </div>

        {/* Results */}
        <AnimatePresence>
          {allAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              {(() => {
                const r = getResult();
                return (
                  <div
                    style={{
                      background: "hsl(16 12% 6%)",
                      border: `1px solid ${r.color}`,
                      borderTop: `4px solid ${r.color}`,
                      padding: "3rem",
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                      <div>
                        <span
                          className="mono-badge mb-4 inline-block"
                          style={{ color: r.color, borderColor: r.color }}
                        >
                          {r.tag}
                        </span>
                        <h3
                          className="font-display font-bold mb-1"
                          style={{ fontSize: "2.5rem", lineHeight: 1, color: "hsl(45 12% 88%)" }}
                        >
                          {r.label}
                        </h3>
                        <p style={{ fontSize: "0.875rem", color: "hsl(45 8% 55%)" }}>{r.sub}</p>
                      </div>

                      <div className="md:ml-auto text-center">
                        <div
                          className="font-display font-black"
                          style={{ fontSize: "5rem", lineHeight: 1, color: r.color }}
                        >
                          {percentage}
                          <span style={{ fontSize: "2rem" }}>%</span>
                        </div>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "hsl(45 8% 40%)" }}>
                          APROVEITAMENTO
                        </span>
                      </div>
                    </div>

                    {/* Score dots */}
                    <div className="flex flex-wrap gap-1.5 my-6">
                      {Array.from({ length: questions.length }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.04 }}
                          className="w-7 h-7 flex items-center justify-center"
                          style={{
                            background: i < score ? "hsl(152 60% 40% / 0.15)" : "hsl(355 70% 55% / 0.10)",
                            border: `1px solid ${i < score ? "hsl(152 60% 40%)" : "hsl(355 70% 55%)"}`,
                            fontSize: "0.65rem",
                            fontFamily: "var(--font-mono)",
                            color: i < score ? "hsl(152 60% 55%)" : "hsl(355 70% 65%)",
                          }}
                        >
                          {i < score ? "✓" : "✗"}
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={resetQuiz}
                        className="crosshair-btn crosshair-btn-solid"
                        style={{ padding: "0.7em 1.6em" }}
                      >
                        <span className="flex items-center gap-2">
                          <RotateCcw className="w-3.5 h-3.5" />
                          Tentar Novamente
                        </span>
                      </button>
                      <Link to="/comparacao">
                        <button className="crosshair-btn" style={{ padding: "0.7em 1.6em" }}>
                          <span className="flex items-center gap-2">
                            <Target className="w-3.5 h-3.5" />
                            Revisar Conteúdo
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const QuizItem = ({ q, qi, onAnswer }: { q: any; qi: number; onAnswer: (c: boolean) => void }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const letters = ["A", "B", "C", "D"];

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    onAnswer(i === q.correctIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: qi * 0.04 }}
      style={{
        background: "hsl(16 12% 6%)",
        border: "1px solid hsl(45 10% 12%)",
      }}
    >
      {/* Question header */}
      <div
        className="px-5 py-4 flex items-start gap-3"
        style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            color: "hsl(42 85% 58%)",
            marginTop: "0.1rem",
            minWidth: "2.5rem",
          }}
        >
          Q.{String(qi + 1).padStart(2, "0")}
        </span>
        <p style={{ fontSize: "0.9rem", color: "hsl(45 12% 82%)", lineHeight: 1.55, fontWeight: 500 }}>
          {q.question}
        </p>
      </div>

      {/* Options */}
      <div className="p-3 space-y-1.5">
        {q.options.map((opt: string, i: number) => {
          let extraStyle: React.CSSProperties = {};
          let className = "quiz-option";

          if (answered) {
            if (i === q.correctIndex) {
              className += " correct";
            } else if (i === selected) {
              className += " wrong";
            } else {
              extraStyle = { opacity: 0.4 };
            }
          }

          return (
            <button
              key={i}
              className={className}
              style={extraStyle}
              onClick={() => handleSelect(i)}
              disabled={answered}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  width: "1.5rem",
                  textAlign: "center",
                  flexShrink: 0,
                  opacity: 0.6,
                }}
              >
                {answered && i === q.correctIndex ? (
                  <Check className="w-3.5 h-3.5 inline text-green-400" />
                ) : answered && i === selected && i !== q.correctIndex ? (
                  <X className="w-3.5 h-3.5 inline text-red-400" />
                ) : (
                  letters[i]
                )}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div
              className="px-5 py-3 flex items-center gap-2"
              style={{
                borderTop: "1px solid hsl(45 10% 10%)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: selected === q.correctIndex ? "hsl(152 60% 50%)" : "hsl(355 70% 60%)",
              }}
            >
              {selected === q.correctIndex ? (
                <><Check className="w-3.5 h-3.5" /> CORRETO</>
              ) : (
                <><X className="w-3.5 h-3.5" /> INCORRETO — Resposta: {q.options[q.correctIndex]}</>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizPage;
