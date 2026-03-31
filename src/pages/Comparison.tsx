import { motion } from "framer-motion";
import { GitCompare, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />

      {/* HEADER */}
      <section
        className="py-16 grid-bg relative overflow-hidden"
        style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(42 85% 30% / 0.06), transparent 65%)" }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <span
            className="block mb-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "hsl(42 85% 58%)" }}
          >
            ANÁLISE COMPARATIVA
          </span>
          <h1
            className="font-display font-black mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "hsl(45 15% 92%)"
            }}
          >
            Mitose{" "}
            <span style={{ color: "hsl(45 8% 40%)" }}>vs</span>{" "}
            <span style={{ color: "hsl(185 60% 70%)" }}>Meiose</span>
          </h1>
          <p style={{ color: "hsl(45 8% 55%)", fontSize: "0.95rem" }}>
            Compare lado a lado os dois processos fundamentais de divisão celular.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-16">

        {/* Visual summary */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8"
            style={{
              background: "hsl(355 15% 6%)",
              border: "1px solid hsl(355 20% 14%)",
              borderTop: "4px solid hsl(355 70% 55%)"
            }}
          >
            <span
              className="block mb-6"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(355 70% 55%)" }}
            >
              MITOSE
            </span>
            <h3 className="font-display font-black mb-4" style={{ fontSize: "3rem", color: "hsl(355 55% 75%)", lineHeight: 0.95 }}>
              1 célula →<br />2 idênticas
            </h3>
            <div className="flex items-center gap-3 mt-6">
              <div
                className="w-16 h-16 flex items-center justify-center font-display font-black"
                style={{
                  border: "2px solid hsl(355 70% 55%)",
                  color: "hsl(355 60% 70%)",
                  fontSize: "1.1rem",
                }}
              >
                2n
              </div>
              <span style={{ color: "hsl(42 85% 58%)", fontFamily: "var(--font-mono)", fontSize: "1.2rem" }}>→</span>
              <div className="flex gap-1.5">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="w-11 h-11 flex items-center justify-center font-display font-bold"
                    style={{
                      border: "1.5px solid hsl(355 70% 55%)",
                      color: "hsl(355 60% 70%)",
                      fontSize: "0.8rem",
                    }}
                  >
                    2n
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8"
            style={{
              background: "hsl(185 15% 6%)",
              border: "1px solid hsl(185 20% 14%)",
              borderTop: "4px solid hsl(185 75% 45%)"
            }}
          >
            <span
              className="block mb-6"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(185 75% 45%)" }}
            >
              MEIOSE
            </span>
            <h3 className="font-display font-black mb-4" style={{ fontSize: "3rem", color: "hsl(185 55% 70%)", lineHeight: 0.95 }}>
              1 célula →<br />4 diferentes
            </h3>
            <div className="flex items-center gap-3 mt-6">
              <div
                className="w-16 h-16 flex items-center justify-center font-display font-black"
                style={{
                  border: "2px solid hsl(185 75% 45%)",
                  color: "hsl(185 60% 65%)",
                  fontSize: "1.1rem",
                }}
              >
                2n
              </div>
              <span style={{ color: "hsl(42 85% 58%)", fontFamily: "var(--font-mono)", fontSize: "1.2rem" }}>→</span>
              <div className="grid grid-cols-2 gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 flex items-center justify-center font-display font-bold"
                    style={{
                      border: "1.5px solid hsl(185 75% 45%)",
                      color: "hsl(185 60% 65%)",
                      fontSize: "0.72rem",
                    }}
                  >
                    n
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 overflow-hidden"
          style={{ border: "1px solid hsl(45 10% 12%)" }}
        >
          <table className="comp-table w-full">
            <thead>
              <tr style={{ background: "hsl(16 12% 7%)" }}>
                <th
                  className="text-left"
                  style={{ color: "hsl(45 8% 45%)", width: "35%" }}
                >
                  CARACTERÍSTICA
                </th>
                <th
                  className="text-left"
                  style={{ color: "hsl(355 70% 55%)", borderLeft: "1px solid hsl(45 10% 12%)" }}
                >
                  MITOSE
                </th>
                <th
                  className="text-left"
                  style={{ color: "hsl(185 75% 45%)", borderLeft: "1px solid hsl(45 10% 12%)" }}
                >
                  MEIOSE
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <td style={{ color: "hsl(45 8% 55%)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
                    {row.feature}
                  </td>
                  <td style={{ color: "hsl(355 40% 72%)", borderLeft: "1px solid hsl(45 10% 10%)" }}>
                    {row.mitose}
                  </td>
                  <td style={{ color: "hsl(185 50% 68%)", borderLeft: "1px solid hsl(45 10% 10%)" }}>
                    {row.meiose}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Key differences callout */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            {
              title: "Variabilidade",
              desc: "A meiose gera variabilidade através do crossing-over e da segregação independente. A mitose produz cópias exatas.",
              color: "hsl(42 85% 58%)",
            },
            {
              title: "Plodia",
              desc: "Mitose mantém o número diploide (2n). Meiose reduz pela metade, gerando células haploides (n) — essencial para a fecundação.",
              color: "hsl(152 60% 42%)",
            },
            {
              title: "Função",
              desc: "Mitose garante crescimento e reparo. Meiose possibilita a reprodução sexuada e a manutenção do número cromossômico da espécie.",
              color: "hsl(262 55% 60%)",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6"
              style={{
                background: "hsl(16 12% 6%)",
                border: "1px solid hsl(45 10% 12%)",
                borderLeft: `3px solid ${item.color}`,
              }}
            >
              <h3
                className="font-display font-bold mb-3"
                style={{ fontSize: "1.3rem", color: item.color }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "hsl(45 8% 55%)", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link to="/quiz">
          <motion.div
            whileHover={{ borderColor: "hsl(42 85% 58%)" }}
            className="flex items-center justify-between p-6 cursor-pointer transition-all"
            style={{
              background: "hsl(16 12% 6%)",
              border: "1px solid hsl(45 10% 14%)",
            }}
          >
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "hsl(42 85% 58%)" }}>
                PRÓXIMO PASSO
              </span>
              <h3 className="font-display font-bold mt-1" style={{ fontSize: "1.4rem", color: "hsl(45 12% 85%)" }}>
                Teste seus Conhecimentos no Quiz
              </h3>
            </div>
            <ArrowRight className="w-6 h-6 shrink-0" style={{ color: "hsl(42 85% 58%)" }} />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default ComparisonPage;
