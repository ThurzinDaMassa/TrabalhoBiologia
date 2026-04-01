import { motion, AnimatePresence } from "framer-motion";
import { Brain, RotateCcw, Trophy, Target, Clock, ChevronRight, Zap, CheckCircle2, XCircle } from "lucide-react";
import { useState, useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { getRandomQuestions, QUESTIONS_PER_QUIZ } from "@/data/quizQuestions";

const TIMER_SECONDS = 30;

const QuizPage = () => {
  const [key, setKey] = useState(0);
  const questions = useMemo(() => getRandomQuestions(), [key]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(boolean | null)[]>([]);

  const currentQ = questions[currentIndex];
  const answered = selected !== null || timeLeft === 0;
  const letters = ["A", "B", "C", "D"];

  // Timer
  useEffect(() => {
    if (finished || answered) return;
    if (timeLeft <= 0) {
      // Time ran out — mark as wrong
      setAnswers((a) => [...a, false]);
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, finished, answered]);

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    const correct = i === currentQ.correctIndex;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, correct]);
  };

  const goNext = useCallback(() => {
    if (currentIndex >= questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setTimeLeft(TIMER_SECONDS);
    }
  }, [currentIndex, questions.length]);

  const resetQuiz = () => {
    setScore(0);
    setCurrentIndex(0);
    setSelected(null);
    setTimeLeft(TIMER_SECONDS);
    setFinished(false);
    setAnswers([]);
    setKey((k) => k + 1);
  };

  const percentage = Math.round((score / questions.length) * 100);

  const getResultData = () => {
    if (percentage >= 90) return { emoji: "🏆", title: "Extraordinário!", color: "text-cell-amber", bg: "bg-cell-amber/10", message: "Você é um expert em divisão celular!" };
    if (percentage >= 70) return { emoji: "🌟", title: "Muito Bom!", color: "text-primary", bg: "bg-primary/10", message: "Você domina os conceitos principais!" };
    if (percentage >= 50) return { emoji: "👏", title: "Bom Trabalho!", color: "text-accent", bg: "bg-accent/10", message: "Está no caminho certo!" };
    return { emoji: "💪", title: "Continue Estudando!", color: "text-secondary", bg: "bg-secondary/10", message: "Revise e tente novamente!" };
  };

  const timerColor = timeLeft <= 5 ? "text-destructive" : timeLeft <= 10 ? "text-cell-amber" : "text-muted-foreground";
  const timerBarWidth = (timeLeft / TIMER_SECONDS) * 100;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {!finished ? (
            <>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "var(--gradient-bio)" }}>
                    <Brain className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="font-display text-xl font-bold text-foreground">Quiz</h1>
                    <p className="text-xs text-muted-foreground">Pergunta {currentIndex + 1} de {questions.length}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="font-display font-bold text-primary text-sm">{score}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${timerColor} font-display font-bold text-lg`}>
                    <Clock className="w-4 h-4" />
                    {timeLeft}s
                  </div>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex gap-1.5 mb-3">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-all ${
                      i < currentIndex
                        ? answers[i]
                          ? "bg-primary"
                          : "bg-destructive"
                        : i === currentIndex
                        ? "bg-foreground/30"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Timer bar */}
              <div className="w-full h-1 bg-muted rounded-full mb-8 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${timeLeft <= 5 ? "bg-destructive" : timeLeft <= 10 ? "bg-cell-amber" : "bg-primary"}`}
                  animate={{ width: `${timerBarWidth}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Question card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 md:p-10 mb-6"
                >
                  <div className="flex items-start gap-4 mb-8">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-primary/10 text-primary font-display font-bold text-lg shrink-0">
                      {currentIndex + 1}
                    </span>
                    <h2 className="font-display text-lg md:text-xl font-bold text-foreground leading-snug pt-1.5">
                      {currentQ.question}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {currentQ.options.map((opt, i) => {
                      const isCorrect = i === currentQ.correctIndex;
                      const isSelected = i === selected;
                      const timedOut = timeLeft === 0 && selected === null;
                      const showResult = answered;

                      let classes = "w-full text-left px-5 py-4 rounded-2xl border-2 text-sm transition-all flex items-center gap-4 ";
                      if (!showResult) {
                        classes += "border-border hover:border-primary/40 hover:bg-primary/5 text-foreground cursor-pointer";
                      } else if (isCorrect) {
                        classes += "border-primary bg-primary/10 text-foreground";
                      } else if (isSelected && !isCorrect) {
                        classes += "border-destructive bg-destructive/10 text-foreground";
                      } else {
                        classes += "border-border/20 text-muted-foreground/50";
                      }

                      return (
                        <motion.button
                          key={i}
                          className={classes}
                          onClick={() => handleSelect(i)}
                          whileTap={!showResult ? { scale: 0.98 } : {}}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
                            !showResult
                              ? "bg-muted text-muted-foreground"
                              : isCorrect
                              ? "bg-primary text-primary-foreground"
                              : isSelected
                              ? "bg-destructive text-destructive-foreground"
                              : "bg-muted/30 text-muted-foreground/30"
                          }`}>
                            {showResult && isCorrect ? <CheckCircle2 className="w-4 h-4" /> :
                             showResult && isSelected && !isCorrect ? <XCircle className="w-4 h-4" /> :
                             letters[i]}
                          </span>
                          <span className="flex-1 font-medium">{opt}</span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Feedback */}
                  <AnimatePresence>
                    {answered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 pt-5 border-t border-border/30"
                      >
                        {timeLeft === 0 && selected === null ? (
                          <p className="text-sm font-medium text-destructive flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Tempo esgotado! A resposta era: <strong>{currentQ.options[currentQ.correctIndex]}</strong>
                          </p>
                        ) : selected === currentQ.correctIndex ? (
                          <p className="text-sm font-medium text-primary flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Correto! Excelente!
                          </p>
                        ) : (
                          <p className="text-sm font-medium text-destructive flex items-center gap-2">
                            <XCircle className="w-4 h-4" /> Incorreto. A resposta era: <strong>{currentQ.options[currentQ.correctIndex]}</strong>
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>

              {/* Next button */}
              {answered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={goNext}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-primary-foreground font-display font-bold text-base shadow-lg"
                    style={{ background: "var(--gradient-bio)" }}
                  >
                    {currentIndex >= questions.length - 1 ? "Ver Resultado" : "Próxima Pergunta"}
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
            </>
          ) : (
            /* Results screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 md:p-14 text-center"
            >
              {(() => {
                const result = getResultData();
                return (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="text-7xl mb-5"
                    >
                      {result.emoji}
                    </motion.div>
                    <h2 className={`font-display text-4xl font-extrabold mb-2 ${result.color}`}>
                      {result.title}
                    </h2>
                    <p className="text-muted-foreground mb-2 text-lg">{result.message}</p>
                    <p className="text-foreground mb-8 text-lg">
                      Você acertou <strong className="text-primary">{score}</strong> de <strong>{questions.length}</strong>
                      <span className={`font-display font-bold text-2xl ml-2 ${result.color}`}>({percentage}%)</span>
                    </p>

                    {/* Results grid */}
                    <div className="flex justify-center gap-2 mb-10 flex-wrap">
                      {answers.map((correct, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                            correct
                              ? "bg-primary/15 text-primary border border-primary/20"
                              : "bg-destructive/15 text-destructive border border-destructive/20"
                          }`}
                        >
                          {correct ? "✓" : "✗"}
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={resetQuiz}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-primary-foreground font-display font-bold shadow-lg"
                        style={{ background: "var(--gradient-bio)" }}
                      >
                        <RotateCcw className="w-4 h-4" />
                        Tentar novamente
                      </motion.button>
                      <Link to="/comparacao">
                        <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-muted text-foreground font-display font-semibold hover:bg-muted/80 transition-colors w-full">
                          <Target className="w-4 h-4" />
                          Revisar conteúdo
                        </button>
                      </Link>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default QuizPage;
