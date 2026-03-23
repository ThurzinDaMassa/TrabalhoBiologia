import { motion } from "framer-motion";
import { GitCompare, Check, X } from "lucide-react";
import Header from "@/components/Header";

const comparisonData = [
  { feature: "Tipo de divisão", mitose: "Equacional", meiose: "Reducional (I) + Equacional (II)" },
  { feature: "Número de divisões", mitose: "1", meiose: "2" },
  { feature: "Células resultantes", mitose: "2 diploides", meiose: "4 haploides" },
  { feature: "Material genético", mitose: "Idêntico à célula-mãe", meiose: "Diferente (recombinação)" },
  { feature: "Crossing-over", mitose: "Não ocorre", meiose: "Ocorre na prófase I" },
  { feature: "Pareamento de homólogos", mitose: "Não", meiose: "Sim" },
  { feature: "Função principal", mitose: "Crescimento e reparo", meiose: "Formação de gametas" },
  { feature: "Variabilidade genética", mitose: "Não gera", meiose: "Gera" },
  { feature: "Onde ocorre", mitose: "Células somáticas", meiose: "Células germinativas" },
  { feature: "Ploidia das células-filhas", mitose: "2n (diploide)", meiose: "n (haploide)" },
];

const ComparisonPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <GitCompare className="w-4 h-4" />
              Análise Comparativa
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mitose <span className="text-muted-foreground">vs</span> Meiose
            </h1>
            <p className="text-muted-foreground text-lg">
              Compare lado a lado os dois processos fundamentais de divisão celular.
            </p>
          </div>

          {/* Visual summary */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="font-display text-xl font-bold gradient-text-mitosis mb-2">Mitose</h3>
              <p className="text-muted-foreground text-sm">
                1 célula → <strong className="text-foreground">2 células idênticas</strong> (2n)
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">2n</div>
                <div className="self-center text-muted-foreground">→</div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">2n</div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">2n</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧬</span>
              </div>
              <h3 className="font-display text-xl font-bold gradient-text-meiosis mb-2">Meiose</h3>
              <p className="text-muted-foreground text-sm">
                1 célula → <strong className="text-foreground">4 células diferentes</strong> (n)
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">2n</div>
                <div className="self-center text-muted-foreground">→</div>
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">n</div>
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">n</div>
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">n</div>
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">n</div>
              </div>
            </motion.div>
          </div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-display font-semibold text-foreground">Característica</th>
                    <th className="text-left p-4 font-display font-semibold text-primary">Mitose</th>
                    <th className="text-left p-4 font-display font-semibold text-secondary">Meiose</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                    >
                      <td className="p-4 text-sm font-medium text-foreground">{row.feature}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.mitose}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.meiose}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComparisonPage;
