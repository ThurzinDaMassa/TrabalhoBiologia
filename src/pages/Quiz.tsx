import { motion, AnimatePresence } from "framer-motion";
import { Brain, RotateCcw, Trophy, Award, Target, ArrowRight, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import QuizQuestion from "@/components/QuizQuestion";

const questions = [
  {
    question: "Quantas células-filhas são produzidas ao final da mitose?",
    options: ["1", "2", "4", "8"],
    correctIndex: 1,
  },
  {
    question: "Em qual fase da mitose os cromossomos se alinham na placa equatorial?",
    options: ["Prófase", "Metáfase", "Anáfase", "Telófase"],
    correctIndex: 1,
  },
  {
    question: "O crossing-over ocorre em qual fase da meiose?",
    options: ["Metáfase I", "Prófase I", "Anáfase II", "Telófase I"],
    correctIndex: 1,
  },
  {
    question: "As células resultantes da meiose são:",
    options: [
      "Diploides e idênticas",
      "Haploides e idênticas",
      "Diploides e diferentes",
      "Haploides e diferentes",
    ],
    correctIndex: 3,
  },
  {
    question: "A meiose I é chamada de divisão reducional porque:",
    options: [
      "Reduz o tamanho das células",
      "Reduz o número de cromossomos pela metade",
      "Reduz a quantidade de DNA",
      "Reduz o número de organelas",
    ],
    correctIndex: 1,
  },
  {
    question: "A mitose ocorre em quais tipos de células?",
    options: [
      "Apenas células germinativas",
      "Apenas células somáticas",
      "Células somáticas e germinativas",
      "Apenas células vegetais",
    ],
    correctIndex: 1,
  },
  {
    question: "Na anáfase da mitose, o que se separa?",
    options: [
      "Cromossomos homólogos",
      "Cromátides-irmãs",
      "Células-filhas",
      "Nucléolos",
    ],
    correctIndex: 1,
  },
  {
    question: "Qual a principal função biológica da meiose?",
    options: [
      "Crescimento do organismo",
      "Reparo de tecidos",
      "Formação de gametas",
      "Regeneração celular",
    ],
    correctIndex: 2,
  },
  {
    question: "A Síndrome de Down é causada por um erro na:",
    options: [
      "Mitose",
      "Meiose (não-disjunção)",
      "Citocinese",
      "Replicação do DNA",
    ],
    correctIndex: 1,
  },
  {
    question: "Quantas divisões celulares ocorrem na meiose?",
    options: ["1", "2", "3", "4"],
    correctIndex: 1,
  },
];

const QuizPage = () => {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [key, setKey] = useState(0);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    setAnswered((a) => a + 1);
  };

  const resetQuiz = () => {
    setScore(0);
    setAnswered(0);
    setKey((k) => k + 1);
  };

  const allAnswered = answered === questions.length;
  const percentage = Math.round((score / questions.length) * 100);

  const getResultData = () => {
    if (percentage >= 90) return { emoji: "🏆", title: "Extraordinário!", color: "text-cell-amber", message: "Você é um expert em divisão celular!" };
    if (percentage >= 70) return { emoji: "🌟", title: "Muito Bom!", color: "text-primary", message: "Você domina os conceitos principais!" };
    if (percentage >= 50) return { emoji: "👏", title: "Bom Trabalho!", color: "text-accent", message: "Está no caminho certo, continue estudando!" };
    return { emoji: "💪", title: "Continue Estudando!", color: "text-secondary", message: "Revise o conteúdo e tente novamente!" };
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cell-amber/10 border border-cell-amber/20 text-cell-amber text-sm font-medium mb-4"
            >
              <Brain className="w-4 h-4" />
              Teste seus Conhecimentos
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Quiz de Biologia
            </h1>
            <p className="text-muted-foreground text-lg">
              Responda às perguntas e veja quanto você aprendeu!
            </p>
          </div>

          {/* Score bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-5 mb-8"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cell-amber/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-cell-amber" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">
                    {score}/{questions.length} corretas
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {answered}/{questions.length} respondidas
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-display text-2xl font-bold text-foreground">
                  {answered > 0 ? `${Math.round((score / answered) * 100)}%` : "0%"}
                </span>
              </div>
            </div>
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gradient-bio)" }}
                animate={{ width: `${(answered / questions.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Questions */}
          <div key={key} className="space-y-4 mb-8">
            {questions.map((q, i) => (
              <QuizQuestion
                key={i}
                question={q.question}
                options={q.options}
                correctIndex={q.correctIndex}
                index={i}
                onAnswer={handleAnswer}
              />
            ))}
          </div>

          {/* Results */}
          <AnimatePresence>
            {allAnswered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="glass-card p-10 text-center"
              >
                {(() => {
                  const result = getResultData();
                  return (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="text-6xl mb-4"
                      >
                        {result.emoji}
                      </motion.div>
                      <h3 className={`font-display text-3xl font-bold mb-2 ${result.color}`}>
                        {result.title}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {result.message}
                      </p>
                      <p className="text-foreground mb-8">
                        Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong> perguntas
                        <span className="font-display font-bold text-xl ml-2">({percentage}%)</span>
                      </p>

                      {/* Score visualization */}
                      <div className="flex justify-center gap-1.5 mb-8">
                        {Array.from({ length: questions.length }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                              i < score
                                ? "bg-primary/20 text-primary"
                                : "bg-destructive/20 text-destructive"
                            }`}
                          >
                            {i < score ? "✓" : "✗"}
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                          onClick={resetQuiz}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Tentar novamente
                        </button>
                        <Link to="/comparacao">
                          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-display font-semibold hover:bg-muted/80 transition-colors w-full">
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
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizPage;
