import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { Check, X } from "lucide-react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctIndex: number;
  index: number;
  onAnswer: (correct: boolean) => void;
}

const QuizQuestion = ({ question, options, correctIndex, index, onAnswer }: QuizQuestionProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    onAnswer(i === correctIndex);
  };

  const letters = ["A", "B", "C", "D"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="glass-card p-6 md:p-7"
    >
      <h4 className="font-display font-bold text-foreground mb-5 text-base md:text-lg leading-snug">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold mr-2.5">
          {index + 1}
        </span>
        {question}
      </h4>
      <div className="space-y-2.5">
        {options.map((opt, i) => {
          let className =
            "w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all flex items-center gap-3 ";
          if (!answered) {
            className += "border-border hover:border-primary/40 hover:bg-primary/5 text-foreground cursor-pointer";
          } else if (i === correctIndex) {
            className += "border-primary/50 bg-primary/10 text-primary font-medium";
          } else if (i === selected) {
            className += "border-destructive/50 bg-destructive/10 text-destructive";
          } else {
            className += "border-border/30 text-muted-foreground/50";
          }

          return (
            <motion.button
              key={i}
              className={className}
              onClick={() => handleSelect(i)}
              whileTap={!answered ? { scale: 0.98 } : {}}
            >
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                !answered
                  ? "bg-muted text-muted-foreground"
                  : i === correctIndex
                  ? "bg-primary text-primary-foreground"
                  : i === selected
                  ? "bg-destructive text-destructive-foreground"
                  : "bg-muted/50 text-muted-foreground/50"
              }`}>
                {answered && i === correctIndex ? <Check className="w-3.5 h-3.5" /> :
                 answered && i === selected && i !== correctIndex ? <X className="w-3.5 h-3.5" /> :
                 letters[i]}
              </span>
              <span className="flex-1">{opt}</span>
            </motion.button>
          );
        })}
      </div>
      {answered && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 pt-3 border-t border-border/30"
        >
          <p className={`text-sm font-medium ${selected === correctIndex ? "text-primary" : "text-destructive"}`}>
            {selected === correctIndex ? "✓ Resposta correta!" : `✗ A resposta correta era: ${options[correctIndex]}`}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizQuestion;
