import { motion } from "framer-motion";
import { useState } from "react";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6"
    >
      <h4 className="font-display font-semibold text-foreground mb-4">
        {index + 1}. {question}
      </h4>
      <div className="space-y-2">
        {options.map((opt, i) => {
          let className =
            "w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ";
          if (!answered) {
            className += "border-border hover:border-primary/50 hover:bg-primary/5 text-foreground";
          } else if (i === correctIndex) {
            className += "border-primary bg-primary/10 text-primary font-medium";
          } else if (i === selected) {
            className += "border-destructive bg-destructive/10 text-destructive";
          } else {
            className += "border-border/50 text-muted-foreground opacity-60";
          }

          return (
            <button key={i} className={className} onClick={() => handleSelect(i)}>
              <div className="flex items-center justify-between">
                <span>{opt}</span>
                {answered && i === correctIndex && <Check className="w-4 h-4" />}
                {answered && i === selected && i !== correctIndex && <X className="w-4 h-4" />}
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default QuizQuestion;
