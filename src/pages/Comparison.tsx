import { motion } from "framer-motion";
import { GitCompare, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import comparisonImg from "@/assets/comparison-hero.jpg";

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
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <GitCompare className="w-4 h-4" />
              Análise Comparativa
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mitose <span className="text-muted-foreground">vs</span> Meiose
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Compare lado a lado os dois processos fundamentais de divisão celular.
            </p>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl mb-12 max-w-3xl mx-auto"
          >
            <img
              src={comparisonImg}
              alt="Comparação visual entre mitose e meiose"
              className="w-full h-auto"
              loading="lazy"
              width={1024}
              height={576}
            />
          </motion.div>

          {/* Visual summary */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-colors"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="font-display text-2xl font-bold gradient-text-mitosis mb-3">Mitose</h3>
              <p className="text-muted-foreground text-sm mb-4">
                1 célula → <strong className="text-foreground">2 células idênticas</strong> (2n)
              </p>
              <div className="flex justify-center items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center text-sm font-bold text-primary font-display">2n</div>
                <div className="text-xl text-muted-foreground">→</div>
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center text-xs font-bold text-primary font-display">2n</div>
                  <div className="w-11 h-11 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center text-xs font-bold text-primary font-display">2n</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center group hover:border-secondary/30 transition-colors"
            >
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🧬</span>
              </div>
              <h3 className="font-display text-2xl font-bold gradient-text-meiosis mb-3">Meiose</h3>
              <p className="text-muted-foreground text-sm mb-4">
                1 célula → <strong className="text-foreground">4 células diferentes</strong> (n)
              </p>
              <div className="flex justify-center items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-secondary/15 border-2 border-secondary/30 flex items-center justify-center text-sm font-bold text-secondary font-display">2n</div>
                <div className="text-xl text-muted-foreground">→</div>
                <div className="flex gap-1.5 flex-wrap justify-center">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="w-9 h-9 rounded-full bg-secondary/15 border-2 border-secondary/30 flex items-center justify-center text-xs font-bold text-secondary font-display">n</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden mb-12"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-4 md:p-5 font-display font-semibold text-foreground">Característica</th>
                    <th className="text-left p-4 md:p-5 font-display font-semibold text-primary">
                      <span className="inline-flex items-center gap-2">🔬 Mitose</span>
                    </th>
                    <th className="text-left p-4 md:p-5 font-display font-semibold text-secondary">
                      <span className="inline-flex items-center gap-2">🧬 Meiose</span>
                    </th>
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
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 md:p-5 text-sm font-medium text-foreground">{row.feature}</td>
                      <td className="p-4 md:p-5 text-sm text-muted-foreground">{row.mitose}</td>
                      <td className="p-4 md:p-5 text-sm text-muted-foreground">{row.meiose}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Link to="/quiz">
              <div className="glass-card p-6 flex items-center justify-between group hover:border-cell-amber/30 transition-colors cursor-pointer">
                <div>
                  <p className="text-sm text-muted-foreground">Teste seus conhecimentos</p>
                  <h3 className="font-display text-lg font-bold text-cell-amber flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Fazer o Quiz →
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-cell-amber group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComparisonPage;
