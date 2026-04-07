import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch, Circle, Target, ArrowUpDown, SplitSquareVertical,
  ArrowRight, Dna, Baby, AlertTriangle, Video, ChevronDown,
  Shuffle, BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import CellDivisionDemo from "@/components/CellDivisionDemo";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import meiosisHero from "@/assets/meiosis-hero.jpg";

const allPhases = [
  // MEIOSE I
  {
    num: "I-01",
    title: "Prófase I",
    icon: <Circle className="w-4 h-4" />,
    summary: "Homólogos se pareiam e ocorre o crossing-over.",
    details:
      "A prófase I é a fase mais longa e complexa da meiose — pode durar dias ou anos em óvulos humanos. Os cromossomos homólogos se pareiam formando bivalentes (tétrades). Ocorre o crossing-over, onde segmentos de DNA são trocados entre cromátides não-irmãs. Subdivide-se em: leptóteno, zigóteno, paquíteno, diplóteno e diacinese.",
    color: "hsl(185 75% 45%)",
    bg: "hsl(185 20% 5%)",
    division: "MEIOSE I",
  },
  {
    num: "I-02",
    title: "Metáfase I",
    icon: <Target className="w-4 h-4" />,
    summary: "Bivalentes se alinham aleatoriamente na placa equatorial.",
    details:
      "Os pares de homólogos (bivalentes) se posicionam na placa metafásica. A orientação de cada par é aleatória — segregação independente — gerando 2²³ = 8 milhões de combinações possíveis só com esse mecanismo. As fibras do fuso se ligam aos cinetócoros dos cromossomos homólogos.",
    color: "hsl(42 85% 58%)",
    bg: "hsl(42 20% 5%)",
    division: "MEIOSE I",
  },
  {
    num: "I-03",
    title: "Anáfase I",
    icon: <ArrowUpDown className="w-4 h-4" />,
    summary: "Homólogos se separam — a divisão reducional acontece.",
    details:
      "Diferente da mitose, na anáfase I são os cromossomos homólogos que se separam (não as cromátides-irmãs). Cada polo recebe um cromossomo de cada par homólogo, reduzindo o número cromossômico pela metade (2n → n). É por isso que a meiose I é chamada de divisão reducional.",
    color: "hsl(152 60% 42%)",
    bg: "hsl(152 20% 5%)",
    division: "MEIOSE I",
  },
  {
    num: "I-04",
    title: "Telófase I",
    icon: <SplitSquareVertical className="w-4 h-4" />,
    summary: "Duas células haploides — ainda com cromátides duplicadas.",
    details:
      "Os cromossomos podem descondensar parcialmente, e novas membranas nucleares podem se formar. A citocinese divide a célula em duas, cada uma haploide (n). Na intercinese que se segue, não ocorre nova replicação de DNA — as cromátides-irmãs ainda estão unidas.",
    color: "hsl(262 55% 60%)",
    bg: "hsl(262 20% 5%)",
    division: "MEIOSE I",
  },
  // MEIOSE II
  {
    num: "II-01",
    title: "Prófase II",
    icon: <Circle className="w-4 h-4" />,
    summary: "Semelhante à mitose — sem crossing-over.",
    details:
      "A prófase II é mais simples e rápida. Não ocorre pareamento nem crossing-over. Os cromossomos se condensam novamente, o envelope nuclear se desfaz e novos fusos se formam. Cada célula contém n cromossomos, cada um ainda com duas cromátides-irmãs.",
    color: "hsl(185 75% 45%)",
    bg: "hsl(185 20% 5%)",
    division: "MEIOSE II",
  },
  {
    num: "II-02",
    title: "Metáfase II",
    icon: <Target className="w-4 h-4" />,
    summary: "Cromossomos se alinham individualmente, como na mitose.",
    details:
      "Similar à metáfase da mitose, cada cromossomo (com duas cromátides-irmãs) se alinha na placa equatorial de forma independente. As fibras do fuso se conectam aos cinetócoros de cada cromátide.",
    color: "hsl(42 85% 58%)",
    bg: "hsl(42 20% 5%)",
    division: "MEIOSE II",
  },
  {
    num: "II-03",
    title: "Anáfase II",
    icon: <ArrowUpDown className="w-4 h-4" />,
    summary: "Cromátides-irmãs se separam — agora sim, como na mitose.",
    details:
      "As coesinas são clivadas pela separase. As cromátides-irmãs se separam e migram para polos opostos, agora como cromossomos individuais. Cada polo receberá um conjunto haploide único de cromossomos.",
    color: "hsl(152 60% 42%)",
    bg: "hsl(152 20% 5%)",
    division: "MEIOSE II",
  },
  {
    num: "II-04",
    title: "Telófase II",
    icon: <SplitSquareVertical className="w-4 h-4" />,
    summary: "4 células haploides geneticamente únicas são formadas.",
    details:
      "Os cromossomos descondensam, os envelopes nucleares se reorganizam e a citocinese divide as duas células em quatro células haploides. Na espermatogênese: 4 espermatozoides funcionais. Na ovogênese: 1 óvulo + 3 corpúsculos polares que degeneram.",
    color: "hsl(262 55% 60%)",
    bg: "hsl(262 20% 5%)",
    division: "MEIOSE II",
  },
];

const curiosidades = [
  "O crossing-over pode gerar mais de 8 milhões de combinações genéticas diferentes em humanos — só com esse mecanismo.",
  "Combinando os gametas de dois pais, as possibilidades genéticas para cada filho ultrapassam 70 trilhões.",
  "Erros na meiose causam condições como a Síndrome de Down (trissomia do cromossomo 21).",
  "Os óvulos humanos iniciam a meiose ainda no período fetal e só a completam décadas depois, na fecundação.",
  "Um homem produz cerca de 1.500 espermatozoides por segundo — todos através da meiose.",
  "A prófase I pode durar décadas em óvulos humanos — a fase mais longa de qualquer divisão celular.",
  "Em abelhas, os machos (zangões) se desenvolvem de óvulos não fecundados — são haploides naturalmente.",
  "A não-disjunção — falha de separação — na meiose é a principal causa de aborto espontâneo.",
];

const PhaseAccordion = ({ phase }: { phase: typeof allPhases[0] }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        background: open ? phase.bg : "hsl(16 12% 6%)",
        border: "1px solid hsl(45 10% 12%)",
        borderLeft: `3px solid ${phase.color}`,
        transition: "background 0.3s",
      }}
    >
      <button
        className="w-full flex items-center gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.12em",
            color: phase.color,
            minWidth: "3rem",
          }}
        >
          {phase.num}
        </span>
        <span style={{ color: phase.color, flexShrink: 0 }}>{phase.icon}</span>
        <div className="flex-1">
          <span className="font-display font-bold block" style={{ fontSize: "1.1rem", color: "hsl(45 12% 85%)" }}>
            {phase.title}
          </span>
          <span style={{ fontSize: "0.8rem", color: "hsl(45 8% 50%)" }}>{phase.summary}</span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4" style={{ color: "hsl(45 8% 45%)" }} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p
              className="px-6 pb-5 pl-20 leading-relaxed"
              style={{ fontSize: "0.875rem", color: "hsl(45 8% 60%)" }}
            >
              {phase.details}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MeiosePage = () => {
  const meiosisI = allPhases.filter((p) => p.division === "MEIOSE I");
  const meiosisII = allPhases.filter((p) => p.division === "MEIOSE II");

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />

      {/* PAGE HEADER */}
      <section
        className="relative py-24 grid-bg overflow-hidden"
        style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(185 75% 20% / 0.2), transparent 60%)" }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <span
                className="block mb-4"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "hsl(185 75% 45%)" }}
              >
                MÓDULO 02 — DIVISÃO CELULAR
              </span>
              <h1
                className="font-display font-black mb-6"
                style={{
                  fontSize: "clamp(4rem, 10vw, 9rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  color: "hsl(185 50% 78%)",
                }}
              >
                Meiose
              </h1>
              <p
                className="max-w-xl leading-relaxed mb-8"
                style={{ color: "hsl(45 8% 58%)", fontSize: "1rem" }}
              >
                A divisão reducional que garante a variabilidade genética e a continuidade das espécies sexuadas —
                produzindo 4 gametas únicos a partir de uma única célula.
              </p>

              <div className="flex flex-wrap gap-8">
                {[
                  { v: "4", l: "Células-filhas" },
                  { v: "n", l: "Haploide" },
                  { v: "9", l: "Fases" },
                  { v: "Únicas", l: "Geneticamente" },
                ].map((s, i) => (
                  <div key={i} className="stat-block" style={{ borderLeftColor: "hsl(185 75% 45%)" }}>
                    <div className="font-display font-bold" style={{ fontSize: "1.8rem", lineHeight: 1, color: "hsl(185 55% 68%)" }}>
                      {s.v}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "hsl(45 8% 45%)" }}>
                      {s.l.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src={meiosisHero}
                alt="Ilustração do processo de meiose mostrando divisão celular em 4 células"
                className="w-full max-w-md mx-auto rounded-lg"
                style={{ border: "1px solid hsl(185 30% 15%)", boxShadow: "0 20px 60px -15px hsl(185 75% 15% / 0.5)" }}
                width={1024}
                height={576}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8">

        {/* ── WHAT IS MEIOSIS ── */}
        <section className="py-20 grid lg:grid-cols-3 gap-12" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Dna className="w-4 h-4" style={{ color: "hsl(185 75% 45%)" }} />
                <h2 className="font-display font-bold" style={{ fontSize: "1.8rem", color: "hsl(45 12% 85%)" }}>
                  O que é Meiose?
                </h2>
              </div>
              <div className="space-y-4" style={{ color: "hsl(45 8% 58%)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                <p>
                  A <strong style={{ color: "hsl(45 12% 82%)" }}>meiose</strong> é um tipo especial de divisão celular
                  que ocorre exclusivamente nas <strong style={{ color: "hsl(45 12% 82%)" }}>células germinativas</strong>
                  — ovários e testículos — para produzir gametas.
                </p>
                <p>
                  Diferente da mitose, a meiose envolve{" "}
                  <strong style={{ color: "hsl(45 12% 82%)" }}>duas divisões consecutivas</strong> (meiose I e meiose II),
                  reduzindo o número de cromossomos pela metade. Uma célula humana com 46 cromossomos (2n) gera
                  gametas com 23 cromossomos (n).
                </p>
                <p>
                  Isso é essencial: quando um espermatozoide (n=23) se une a um óvulo (n=23) na fecundação, o zigoto
                  resultante terá os 46 cromossomos corretos — mantendo a{" "}
                  <strong style={{ color: "hsl(185 75% 55%)" }}>estabilidade genética da espécie</strong> ao longo das gerações.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Baby className="w-4 h-4" style={{ color: "hsl(185 75% 45%)" }} />
                <h2 className="font-display font-bold" style={{ fontSize: "1.5rem", color: "hsl(45 12% 85%)" }}>
                  Variabilidade Genética
                </h2>
              </div>
              <ul className="tick-list space-y-3" style={{ color: "hsl(45 8% 58%)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                <li>
                  <strong style={{ color: "hsl(45 12% 80%)" }}>Crossing-over:</strong> Troca de segmentos de DNA entre homólogos na prófase I,
                  criando combinações genéticas inéditas.
                </li>
                <li>
                  <strong style={{ color: "hsl(45 12% 80%)" }}>Segregação independente:</strong> Orientação aleatória dos pares na metáfase I,
                  gerando 2²³ = 8 milhões de combinações possíveis.
                </li>
                <li>
                  <strong style={{ color: "hsl(45 12% 80%)" }}>Fecundação aleatória:</strong> Combinando dois pais, mais de 70 trilhões de
                  zigotos geneticamente distintos são possíveis.
                </li>
              </ul>
            </div>

            <div
              className="p-5"
              style={{ background: "hsl(355 15% 6%)", borderLeft: "3px solid hsl(355 70% 55%)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4" style={{ color: "hsl(355 70% 55%)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "hsl(355 70% 55%)" }}>
                  QUANDO DÁ ERRADO
                </span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "hsl(45 8% 60%)", lineHeight: 1.65 }}>
                A <strong style={{ color: "hsl(45 12% 78%)" }}>não-disjunção</strong> — quando cromossomos não se separam
                corretamente — cria gametas com cromossomos a mais ou a menos. Isso leva a aneuploidias como a{" "}
                <strong style={{ color: "hsl(45 12% 78%)" }}>Síndrome de Down</strong> (trissomia 21),{" "}
                <strong style={{ color: "hsl(45 12% 78%)" }}>Turner</strong> (45,X) e{" "}
                <strong style={{ color: "hsl(45 12% 78%)" }}>Klinefelter</strong> (47,XXY).
              </p>
            </div>
          </div>

          {/* Sidebar quick facts */}
          <div className="space-y-4">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "hsl(45 8% 35%)",
                borderBottom: "1px solid hsl(45 10% 12%)",
                paddingBottom: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              DADOS RÁPIDOS
            </div>
            {[
              { label: "Nº de divisões", value: "2 (I + II)" },
              { label: "Células produzidas", value: "4 haploides" },
              { label: "Tipo", value: "Reducional + Equacional" },
              { label: "Crossing-over?", value: "Sim (prófase I)" },
              { label: "Variabilidade?", value: "Sim" },
              { label: "Onde ocorre", value: "Gônadas" },
              { label: "Função", value: "Gametogênese" },
              { label: "Fase mais longa", value: "Prófase I" },
            ].map((d, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 py-2"
                style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}
              >
                <span style={{ fontSize: "0.8rem", color: "hsl(45 8% 50%)" }}>{d.label}</span>
                <span
                  className="text-right"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "hsl(185 60% 60%)" }}
                >
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── MITOSE vs MEIOSE comparison strip ── */}
        <section
          className="py-10"
          style={{ borderBottom: "1px solid hsl(45 10% 10%)", background: "hsl(16 12% 5%)" }}
        >
          <div className="grid grid-cols-2 gap-0">
            <div
              className="p-8"
              style={{ borderRight: "1px solid hsl(45 10% 10%)" }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "hsl(355 70% 55%)" }}>
                MITOSE (comparação)
              </span>
              <div className="mt-4 space-y-2">
                {["1 divisão", "2 células", "Diploides (2n)", "Sem crossing-over", "Células idênticas"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(355 70% 55%)" }} />
                    <span style={{ fontSize: "0.8rem", color: "hsl(45 8% 55%)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "hsl(185 75% 45%)" }}>
                MEIOSE (este módulo)
              </span>
              <div className="mt-4 space-y-2">
                {["2 divisões", "4 células", "Haploides (n)", "Crossing-over na prófase I", "Células únicas"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(185 75% 45%)" }} />
                    <span style={{ fontSize: "0.8rem", color: "hsl(45 8% 55%)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE DEMO ── */}
        <section className="py-20" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="flex items-center gap-3 mb-2">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(185 75% 45%)" }}>
              SIMULAÇÃO INTERATIVA
            </span>
          </div>
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em" }}>
            Passo a Passo da Meiose
          </h2>
          <CellDivisionDemo type="meiosis" />
        </section>

        {/* ── PHASES: MEIOSE I ── */}
        <section className="py-20" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="flex items-center gap-3 mb-2">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(185 75% 45%)" }}>
              DIVISÃO I — REDUCIONAL
            </span>
          </div>
          <h2 className="font-display font-bold mb-2" style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em" }}>
            Meiose I
          </h2>
          <p className="mb-8" style={{ fontSize: "0.875rem", color: "hsl(45 8% 52%)" }}>
            Separa os cromossomos homólogos — reduzindo o número à metade.
          </p>
          <div className="space-y-1.5">
            {meiosisI.map((p) => <PhaseAccordion key={p.title} phase={p} />)}
          </div>
        </section>

        {/* ── PHASES: MEIOSE II ── */}
        <section className="py-20" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="flex items-center gap-3 mb-2">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(185 75% 45%)" }}>
              DIVISÃO II — EQUACIONAL
            </span>
          </div>
          <h2 className="font-display font-bold mb-2" style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em" }}>
            Meiose II
          </h2>
          <p className="mb-8" style={{ fontSize: "0.875rem", color: "hsl(45 8% 52%)" }}>
            Separa as cromátides-irmãs — similar à mitose, mas em células já haploides.
          </p>
          <div className="space-y-1.5">
            {meiosisII.map((p) => <PhaseAccordion key={p.title} phase={p} />)}
          </div>
        </section>

        {/* ── GAMETOGÊNESE VISUAL ── */}
        <section className="py-20" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="flex items-center gap-3 mb-2">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(42 85% 58%)" }}>
              APLICAÇÃO BIOLÓGICA
            </span>
          </div>
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em" }}>
            Gametogênese Humana
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Espermatogênese",
                subtitle: "nos testículos",
                steps: [
                  "Espermatogônia (2n) — célula-mãe",
                  "Espermatócito primário sofre meiose I",
                  "2 espermatócitos secundários (n)",
                  "Meiose II → 4 espermátides (n)",
                  "Maturação → 4 espermatozoides funcionais",
                ],
                color: "hsl(185 75% 45%)",
                result: "4 espermatozoides",
              },
              {
                title: "Ovogênese",
                subtitle: "nos ovários",
                steps: [
                  "Oogônia (2n) — célula-mãe fetal",
                  "Ovócito primário (prófase I pausada no feto)",
                  "Meiose I completa na ovulação → 1 ovócito II + 1 corpúsculo polar",
                  "Meiose II completa só na fecundação",
                  "1 óvulo maduro + 3 corpúsculos polares (degeneram)",
                ],
                color: "hsl(355 70% 55%)",
                result: "1 óvulo funcional",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6"
                style={{
                  background: "hsl(16 12% 6%)",
                  border: "1px solid hsl(45 10% 12%)",
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.15em", color: item.color }}
                >
                  {item.subtitle.toUpperCase()}
                </span>
                <h3 className="font-display font-bold mt-1 mb-5" style={{ fontSize: "1.5rem", color: "hsl(45 12% 85%)" }}>
                  {item.title}
                </h3>
                <div className="space-y-2 mb-5">
                  {item.steps.map((step, si) => (
                    <div key={si} className="flex items-start gap-3">
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          color: item.color,
                          marginTop: "0.1rem",
                          minWidth: "1.2rem",
                        }}
                      >
                        {si + 1}.
                      </span>
                      <span style={{ fontSize: "0.82rem", color: "hsl(45 8% 58%)", lineHeight: 1.5 }}>{step}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="flex items-center gap-2 pt-4"
                  style={{ borderTop: "1px solid hsl(45 10% 12%)" }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "hsl(45 8% 40%)" }}>
                    RESULTADO:
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: item.color }}>{item.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CURIOSITIES ── */}
        <section className="py-20" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="flex items-center gap-3 mb-2">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(42 85% 58%)" }}>
              CURIOSIDADES
            </span>
          </div>
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em" }}>
            Fatos Fascinantes
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {curiosidades.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4"
                style={{
                  background: "hsl(16 12% 6%)",
                  border: "1px solid hsl(45 10% 12%)",
                  borderLeft: "2px solid hsl(185 75% 45% / 0.5)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "hsl(185 75% 45%)", letterSpacing: "0.15em", display: "block", marginBottom: "0.4rem" }}
                >
                  #{String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontSize: "0.85rem", color: "hsl(45 8% 60%)", lineHeight: 1.6 }}>{c}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── VIDEOS ── */}
        <section className="py-20" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="flex items-center gap-3 mb-2">
            <Video className="w-4 h-4" style={{ color: "hsl(185 75% 45%)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(185 75% 45%)" }}>
              REFERÊNCIAS EM VÍDEO
            </span>
          </div>
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em" }}>
            Aprenda Também com Vídeos
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <YouTubeEmbed videoId="nMakmH1hMCg" title="Meiose — Khan Academy" />
            <YouTubeEmbed videoId="VzDMG7ke69g" title="Meiose — Biologia Total" />
          </div>
        </section>

        {/* ── NAVIGATION ── */}
        <section className="py-12 flex flex-col sm:flex-row gap-3 justify-between">
          <Link to="/mitose">
            <button className="crosshair-btn">
              <span>← Mitose</span>
            </button>
          </Link>
          <Link to="/comparacao">
            <button className="crosshair-btn crosshair-btn-solid">
              <span className="flex items-center gap-2">
                Comparar Mitose vs Meiose
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MeiosePage;
