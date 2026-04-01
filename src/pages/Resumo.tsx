import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import Header from "@/components/Header";

const mitoseFases = [
  { fase: "Prófase", eventos: ["Cromatina → cromossomos", "Fuso se forma", "Membrana nuclear fragmenta", "Nucléolo desaparece"] },
  { fase: "Metáfase", eventos: ["Cromossomos na placa equatorial", "Fibras do fuso ligadas", "Máxima condensação", "Ideal para cariótipo"] },
  { fase: "Anáfase", eventos: ["Separase cliva coesinas", "Cromátides-irmãs separam", "Célula se alonga", "Fase mais rápida"] },
  { fase: "Telófase", eventos: ["Cromossomos descondensam", "Membrana nuclear volta", "Nucléolo reaparece", "Fuso se desfaz"] },
  { fase: "Citocinese", eventos: ["Citoplasma se divide", "Animais: estrangulamento", "Plantas: placa celular", "2 células-filhas formadas"] },
];

const meioseFases = [
  { fase: "Prófase I", eventos: ["Sinapse dos homólogos", "Bivalentes formados", "Crossing-over ocorre", "Subfases: leptóteno→diacinese"] },
  { fase: "Metáfase I", eventos: ["Bivalentes na placa", "Orientação aleatória", "Segregação independente", "Fibras nos homólogos"] },
  { fase: "Anáfase I", eventos: ["Homólogos se separam", "Cromátides ainda unidas", "2n → n", "Divisão reducional"] },
  { fase: "Telófase I", eventos: ["2 células haploides", "Intercinese (sem replicação)", "Cromátides ainda duplicadas", "Citocinese I"] },
  { fase: "Prófase II", eventos: ["Sem crossing-over", "Novos fusos formam", "Rápida e simples", "N cromossomos por célula"] },
  { fase: "Metáfase II", eventos: ["Cromossomos individuais", "Placa equatorial", "Como metáfase mitótica", "Fibras nas cromátides"] },
  { fase: "Anáfase II", eventos: ["Cromátides-irmãs separam", "Coesinas clivadas", "4 conjuntos haploides", "Divisão equacional"] },
  { fase: "Telófase II", eventos: ["4 células haploides", "Envelopes nucleares formam", "Citocinese II", "Gametogênese completa"] },
];

const comparacao = [
  { aspecto: "Tipo", mitose: "Equacional", meiose: "Reducional + Equacional" },
  { aspecto: "Divisões", mitose: "1", meiose: "2 (I + II)" },
  { aspecto: "Células produzidas", mitose: "2", meiose: "4" },
  { aspecto: "Ploidia resultante", mitose: "Diploide (2n)", meiose: "Haploide (n)" },
  { aspecto: "Identidade genética", mitose: "Idênticas à mãe", meiose: "Diferentes (recombinação)" },
  { aspecto: "Crossing-over", mitose: "Não ocorre", meiose: "Prófase I" },
  { aspecto: "Pareamento homólogos", mitose: "Não", meiose: "Prófase I (sinapse)" },
  { aspecto: "Função", mitose: "Crescimento / Reparo", meiose: "Gametas / Reprodução" },
  { aspecto: "Local", mitose: "Células somáticas", meiose: "Células germinativas" },
  { aspecto: "Variabilidade", mitose: "Não gera", meiose: "Gera (CO + segregação)" },
];

const termosChave = [
  { termo: "Centrômero", def: "Região de constrição onde cromátides-irmãs se unem" },
  { termo: "Cinetócoro", def: "Complexo proteico que liga cromossomo ao fuso" },
  { termo: "Coesina", def: "Proteína que mantém cromátides-irmãs unidas" },
  { termo: "Separase", def: "Enzima que cliva coesinas na anáfase" },
  { termo: "Crossing-over", def: "Troca de DNA entre cromátides não-irmãs" },
  { termo: "Bivalente/tétrade", def: "Par de homólogos pareados (4 cromátides)" },
  { termo: "Ciclinas + CDKs", def: "Regulam o progresso do ciclo celular" },
  { termo: "p53", def: "Guardião do genoma — para divisão se DNA está danificado" },
  { termo: "Aneuploidia", def: "Número anormal de cromossomos (ex.: trissomia 21)" },
  { termo: "Telomerase", def: "Enzima que evita encurtamento dos telômeros" },
  { termo: "Quiasma", def: "Ponto visível de crossing-over no diplóteno" },
  { termo: "Intercinese", def: "Pausa entre meiose I e II — sem replicação de DNA" },
];

const numeros = [
  { n: "46", desc: "cromossomos numa célula somática humana (2n)" },
  { n: "23", desc: "cromossomos em cada gameta humano (n)" },
  { n: "~1h", desc: "duração aproximada da mitose" },
  { n: "90%", desc: "do ciclo celular é interfase" },
  { n: "8M+", desc: "combinações por gameta (segregação independente)" },
  { n: "70T+", desc: "combinações possíveis por filho (2 pais)" },
  { n: "4", desc: "espermatozoides funcionais por meiose" },
  { n: "1", desc: "óvulo funcional por meiose (+ 3 corpúsculos polares)" },
  { n: "2²³", desc: "= 8.388.608 — combinações pela segregação independente" },
  { n: "3,8M", desc: "células produzidas por segundo no corpo humano (mitose)" },
];

const ResumoPage = () => {
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
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span
              className="block mb-3"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "hsl(42 85% 58%)" }}
            >
              FERRAMENTA DE ESTUDO
            </span>
            <h1
              className="font-display font-black mb-2"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "hsl(45 15% 92%)" }}
            >
              Resumo Completo
            </h1>
            <p style={{ color: "hsl(45 8% 55%)" }}>
              Tudo o que você precisa saber sobre divisão celular em um só lugar.
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="crosshair-btn shrink-0"
            style={{ padding: "0.6em 1.4em" }}
          >
            <span className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5" />
              Imprimir / PDF
            </span>
          </button>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl print:max-w-full" id="resumo-content">

        {/* ── NUMBERS ── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: "hsl(42 85% 58% / 0.3)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(42 85% 58%)" }}>
              NÚMEROS-CHAVE
            </span>
            <div className="h-px flex-1" style={{ background: "hsl(42 85% 58% / 0.3)" }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {numeros.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="p-4 text-center"
                style={{ background: "hsl(16 12% 6%)", border: "1px solid hsl(45 10% 12%)", borderTop: "2px solid hsl(42 85% 58%)" }}
              >
                <div className="font-display font-black" style={{ fontSize: "1.6rem", lineHeight: 1, color: "hsl(42 85% 58%)" }}>
                  {item.n}
                </div>
                <div style={{ fontSize: "0.7rem", color: "hsl(45 8% 52%)", lineHeight: 1.4, marginTop: "0.4rem" }}>
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── MITOSE PHASES ── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: "hsl(355 70% 55% / 0.3)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(355 70% 55%)" }}>
              FASES DA MITOSE
            </span>
            <div className="h-px flex-1" style={{ background: "hsl(355 70% 55% / 0.3)" }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {mitoseFases.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4"
                style={{ background: "hsl(355 15% 6%)", border: "1px solid hsl(355 20% 12%)", borderTop: "2px solid hsl(355 70% 55%)" }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.12em", color: "hsl(355 70% 55%)", marginBottom: "0.4rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="font-display font-bold mb-3" style={{ fontSize: "1rem", color: "hsl(355 50% 75%)" }}>
                  {f.fase}
                </h4>
                <ul className="space-y-1">
                  {f.eventos.map((e, ei) => (
                    <li key={ei} className="flex items-start gap-1.5">
                      <span style={{ color: "hsl(355 70% 55%)", fontSize: "0.6rem", marginTop: "0.15rem" }}>→</span>
                      <span style={{ fontSize: "0.72rem", color: "hsl(45 8% 55%)", lineHeight: 1.4 }}>{e}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── MEIOSE PHASES ── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: "hsl(185 75% 45% / 0.3)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(185 75% 45%)" }}>
              FASES DA MEIOSE
            </span>
            <div className="h-px flex-1" style={{ background: "hsl(185 75% 45% / 0.3)" }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {meioseFases.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4"
                style={{
                  background: "hsl(185 15% 5%)",
                  border: "1px solid hsl(185 20% 12%)",
                  borderTop: `2px solid ${i < 4 ? "hsl(185 75% 45%)" : "hsl(185 75% 35%)"}`,
                }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.12em", color: i < 4 ? "hsl(185 75% 45%)" : "hsl(185 75% 35%)", marginBottom: "0.2rem" }}>
                  {i < 4 ? "MEIOSE I" : "MEIOSE II"} — {String(i < 4 ? i + 1 : i - 3).padStart(2, "0")}
                </div>
                <h4 className="font-display font-bold mb-3" style={{ fontSize: "0.95rem", color: "hsl(185 50% 70%)" }}>
                  {f.fase}
                </h4>
                <ul className="space-y-1">
                  {f.eventos.map((e, ei) => (
                    <li key={ei} className="flex items-start gap-1.5">
                      <span style={{ color: "hsl(185 75% 45%)", fontSize: "0.6rem", marginTop: "0.15rem" }}>→</span>
                      <span style={{ fontSize: "0.72rem", color: "hsl(45 8% 55%)", lineHeight: 1.4 }}>{e}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── COMPARAÇÃO ── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: "hsl(42 85% 58% / 0.3)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(42 85% 58%)" }}>
              TABELA COMPARATIVA
            </span>
            <div className="h-px flex-1" style={{ background: "hsl(42 85% 58% / 0.3)" }} />
          </div>
          <div style={{ border: "1px solid hsl(45 10% 12%)", overflow: "hidden" }}>
            <table className="w-full">
              <thead>
                <tr style={{ background: "hsl(16 12% 7%)" }}>
                  <th className="p-3 text-left" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "hsl(45 8% 40%)", borderBottom: "1px solid hsl(45 10% 12%)" }}>
                    ASPECTO
                  </th>
                  <th className="p-3 text-left" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "hsl(355 70% 55%)", borderBottom: "1px solid hsl(45 10% 12%)", borderLeft: "1px solid hsl(45 10% 12%)" }}>
                    MITOSE
                  </th>
                  <th className="p-3 text-left" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "hsl(185 75% 45%)", borderBottom: "1px solid hsl(45 10% 12%)", borderLeft: "1px solid hsl(45 10% 12%)" }}>
                    MEIOSE
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparacao.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "hsl(16 12% 6%)" : "hsl(16 12% 5%)" }}>
                    <td className="p-3" style={{ fontSize: "0.78rem", color: "hsl(45 8% 50%)", fontFamily: "var(--font-mono)", borderBottom: "1px solid hsl(45 10% 9%)" }}>
                      {row.aspecto}
                    </td>
                    <td className="p-3" style={{ fontSize: "0.82rem", color: "hsl(355 40% 72%)", borderBottom: "1px solid hsl(45 10% 9%)", borderLeft: "1px solid hsl(45 10% 10%)" }}>
                      {row.mitose}
                    </td>
                    <td className="p-3" style={{ fontSize: "0.82rem", color: "hsl(185 50% 65%)", borderBottom: "1px solid hsl(45 10% 9%)", borderLeft: "1px solid hsl(45 10% 10%)" }}>
                      {row.meiose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── TERMOS-CHAVE ── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: "hsl(262 55% 60% / 0.3)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(262 55% 60%)" }}>
              TERMOS-CHAVE
            </span>
            <div className="h-px flex-1" style={{ background: "hsl(262 55% 60% / 0.3)" }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {termosChave.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="p-3"
                style={{
                  background: "hsl(16 12% 6%)",
                  border: "1px solid hsl(45 10% 12%)",
                  borderLeft: "2px solid hsl(262 55% 60% / 0.5)",
                }}
              >
                <span className="font-display font-bold block" style={{ fontSize: "0.95rem", color: "hsl(262 45% 75%)", marginBottom: "0.25rem" }}>
                  {t.termo}
                </span>
                <span style={{ fontSize: "0.78rem", color: "hsl(45 8% 55%)" }}>{t.def}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── MACETE FINAL ── */}
        <section>
          <div
            className="p-8 text-center"
            style={{
              background: "hsl(16 12% 6%)",
              border: "1px solid hsl(42 85% 58% / 0.3)",
              borderTop: "3px solid hsl(42 85% 58%)",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(42 85% 58%)" }}>
              MACETE PARA LEMBRAR
            </span>
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-left">
              <div className="p-4" style={{ background: "hsl(355 15% 5%)", border: "1px solid hsl(355 20% 12%)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "hsl(355 70% 55%)" }}>MITOSE</span>
                <p className="mt-2" style={{ fontSize: "0.85rem", color: "hsl(45 8% 60%)", lineHeight: 1.6 }}>
                  <strong style={{ color: "hsl(45 12% 78%)" }}>Mi</strong>tose →{" "}
                  <strong style={{ color: "hsl(45 12% 78%)" }}>Mi</strong>stura não! Cópia idêntica.<br />
                  1 célula → <strong style={{ color: "hsl(355 60% 65%)" }}>2</strong> células iguais (2n → 2n)
                </p>
              </div>
              <div className="p-4" style={{ background: "hsl(185 15% 5%)", border: "1px solid hsl(185 20% 12%)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "hsl(185 75% 45%)" }}>MEIOSE</span>
                <p className="mt-2" style={{ fontSize: "0.85rem", color: "hsl(45 8% 60%)", lineHeight: 1.6 }}>
                  <strong style={{ color: "hsl(45 12% 78%)" }}>Mei</strong>ose →{" "}
                  <strong style={{ color: "hsl(45 12% 78%)" }}>Mei</strong>o a meio! Divide pela metade.<br />
                  1 célula → <strong style={{ color: "hsl(185 60% 60%)" }}>4</strong> células únicas (2n → n)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumoPage;
