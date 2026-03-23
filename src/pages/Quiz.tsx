import { motion } from "framer-motion";
import { Brain, RotateCcw, Trophy } from "lucide-react";
import { useState } from "react";
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cell-amber/10 text-cell-amber text-sm font-medium mb-4">
              <Brain className="w-4 h-4" />
              Teste seus Conhecimentos
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Quiz de Biologia
            </h1>
            <p className="text-muted-foreground text-lg">
              Responda às perguntas abaixo e veja quanto você aprendeu sobre mitose e meiose!
            </p>
          </div>

          {/* Score bar */}
          <div className="glass-card p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-cell-amber" />
              <span className="text-sm font-medium text-foreground">
                {score}/{questions.length} corretas
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  animate={{ width: `${(answered / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {answered}/{questions.length}
              </span>
            </div>
          </div>

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
          {allAnswered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 text-center"
            >
              <div className="text-5xl mb-4">
                {percentage >= 80 ? "🏆" : percentage >= 50 ? "👏" : "💪"}
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {percentage >= 80
                  ? "Excelente!"
                  : percentage >= 50
                  ? "Bom trabalho!"
                  : "Continue estudando!"}
              </h3>
              <p className="text-muted-foreground mb-6">
                Você acertou <strong className="text-foreground">{score}</strong> de{" "}
                <strong className="text-foreground">{questions.length}</strong> perguntas ({percentage}%)
              </p>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity"
              >
                <RotateCcw className="w-4 h-4" />
                Tentar novamente
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default QuizPage;
