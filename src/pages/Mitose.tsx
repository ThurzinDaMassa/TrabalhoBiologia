import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical, Circle, Target, ArrowUpDown, SplitSquareVertical,
  Scissors, ArrowRight, Microscope, HeartPulse, Info, Video, ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import CellDivisionDemo from "@/components/CellDivisionDemo";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import mitosisHero from "@/assets/mitosis-hero.jpg";

const phases = [
  {
    num: "01",
    title: "Prófase",
    icon: <Circle className="w-4 h-4" />,
    summary: "Condensação dos cromossomos e formação do fuso mitótico.",
    details: "Durante a prófase, cada cromossomo já está duplicado e consiste em duas cromátides-irmãs unidas pelo centrômero. Os centrossomos começam a migrar para os polos opostos da célula, e o fuso mitótico começa a se formar. O nucléolo desaparece e a membrana nuclear começa a se fragmentar no final desta fase.",
    color: "hsl(355 70% 55%)",
    bg: "hsl(355 20% 6%)",
  },
  {
    num: "02",
    title: "Metáfase",
    icon: <Target className="w-4 h-4" />,
    summary: "Cromossomos se alinham na placa equatorial.",
    details: "Na metáfase, as fibras do fuso mitótico se ligam aos cinetócoros dos cromossomos. Os cromossomos são movimentados até se alinharem perfeitamente na placa equatorial da célula. Este é o momento ideal para análise do cariótipo, pois os cromossomos estão maximamente condensados e visíveis.",
    color: "hsl(42 85% 58%)",
    bg: "hsl(42 20% 6%)",
  },
  {
    num: "03",
    title: "Anáfase",
    icon: <ArrowUpDown className="w-4 h-4" />,
    summary: "Cromátides-irmãs se separam e migram para polos opostos.",
    details: "A anáfase é a fase mais rápida da mitose. As proteínas coesinas que mantinham as cromátides-irmãs unidas são clivadas pela enzima separase. Os microtúbulos do fuso encurtam, puxando as cromátides para polos opostos. A célula começa a se alongar.",
    color: "hsl(152 60% 42%)",
    bg: "hsl(152 20% 5%)",
  },
  {
    num: "04",
    title: "Telófase",
    icon: <SplitSquareVertical className="w-4 h-4" />,
    summary: "Descondensação dos cromossomos e reconstituição dos núcleos.",
    details: "Na telófase, os eventos da prófase são revertidos: os cromossomos descondensam, os envelopes nucleares se reorganizam ao redor de cada conjunto cromossômico e os nucléolos reaparecem. O fuso mitótico é desmontado.",
    color: "hsl(262 55% 60%)",
    bg: "hsl(262 20% 6%)",
  },
  {
    num: "05",
    title: "Citocinese",
    icon: <Scissors className="w-4 h-4" />,
    summary: "Divisão do citoplasma formando duas células-filhas.",
    details: "A citocinese é o processo de divisão do citoplasma. Em células animais, ocorre por estrangulamento — um sulco de clivagem formado por um anel contrátil de actina e miosina. Em células vegetais, forma-se uma placa celular no centro que cresce até dividir completamente a célula.",
    color: "hsl(185 75% 45%)",
    bg: "hsl(185 20% 5%)",
  },
];

const curiosidades = [
  "Uma célula humana completa a mitose em ~1 hora, mas o ciclo celular inteiro leva 12–24 horas.",
  "Seu corpo produz cerca de 3,8 milhões de células por segundo através da mitose.",
  "Células cancerosas se dividem descontroladamente por falhas nos mecanismos de controle.",
  "O DNA de uma célula humana tem ~2 metros — compactado em um núcleo de 6 micrômetros.",
  "As células do revestimento estomacal são substituídas a cada 2–9 dias por causa da acidez.",
  "Neurônios e células do músculo cardíaco quase não realizam mitose na vida adulta.",
  "A colchicina bloqueia a formação do fuso mitótico e é usada em pesquisas genéticas.",
];

const PhaseAccordion = ({ phase }: { phase: typeof phases[0] }) => {
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
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            color: phase.color,
            minWidth: "2rem"
          }}
        >
          {phase.num}
        </span>
        <span style={{ color: phase.color, flexShrink: 0 }}>{phase.icon}</span>
        <div className="flex-1">
          <span
            className="font-display font-bold block"
            style={{ fontSize: "1.1rem", color: "hsl(45 12% 85%)" }}
          >
            {phase.title}
          </span>
          <span style={{ fontSize: "0.8rem", color: "hsl(45 8% 50%)" }}>
            {phase.summary}
          </span>
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
              className="px-6 pb-5 pl-16 leading-relaxed"
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

const MitosePage = () => {
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
          style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(355 70% 25% / 0.18), transparent 60%)" }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <span
              className="block mb-4"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "hsl(355 70% 55%)" }}
            >
              MÓDULO 01 — DIVISÃO CELULAR
            </span>
            <h1
              className="font-display font-black mb-6"
              style={{
                fontSize: "clamp(4rem, 10vw, 9rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: "hsl(355 50% 80%)",
              }}
            >
              Mitose
            </h1>
            <p
              className="max-w-xl leading-relaxed mb-8"
              style={{ color: "hsl(45 8% 58%)", fontSize: "1rem" }}
            >
              A divisão equacional que garante que cada célula-filha receba uma cópia
              completa e exata do material genético. Fundamento do crescimento e reparo.
            </p>

            {/* Key stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { v: "2", l: "Células-filhas" },
                { v: "2n", l: "Diploide" },
                { v: "5", l: "Fases" },
                { v: "Idênticas", l: "Geneticamente" },
              ].map((s, i) => (
                <div key={i} className="stat-block">
                  <div
                    className="font-display font-bold"
                    style={{ fontSize: "1.8rem", lineHeight: 1, color: "hsl(355 55% 70%)" }}
                  >
                    {s.v}
                  </div>
                  <div
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "hsl(45 8% 45%)" }}
                  >
                    {s.l.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8">

        {/* ── WHAT IS MITOSIS ── */}
        <section className="py-20 grid lg:grid-cols-3 gap-12" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="w-4 h-4" style={{ color: "hsl(355 70% 55%)" }} />
                <h2 className="font-display font-bold" style={{ fontSize: "1.8rem", color: "hsl(45 12% 85%)" }}>
                  O que é Mitose?
                </h2>
              </div>
              <div className="space-y-4" style={{ color: "hsl(45 8% 58%)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                <p>
                  A <strong style={{ color: "hsl(45 12% 82%)" }}>mitose</strong> é um tipo de divisão celular que
                  ocorre nas células somáticas — todas as células do corpo, exceto as reprodutivas. Ela garante que
                  cada nova célula receba uma cópia completa e exata do material genético da célula original.
                </p>
                <p>
                  Todo o processo é regulado por proteínas chamadas <strong style={{ color: "hsl(45 12% 82%)" }}>ciclinas</strong> e{" "}
                  <strong style={{ color: "hsl(45 12% 82%)" }}>quinases dependentes de ciclinas (CDKs)</strong>, que funcionam
                  como um "semáforo" celular — permitindo ou impedindo que a célula avance para a próxima etapa.
                </p>
                <p>
                  Antes de iniciar a mitose, a célula passa pela <strong style={{ color: "hsl(45 12% 82%)" }}>interfase</strong>,
                  onde o DNA é duplicado (fase S), a célula cresce (G1 e G2) e se prepara para a divisão. A interfase
                  ocupa cerca de <strong style={{ color: "hsl(355 70% 65%)" }}>90%</strong> do ciclo celular.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <HeartPulse className="w-4 h-4" style={{ color: "hsl(355 70% 55%)" }} />
                <h2 className="font-display font-bold" style={{ fontSize: "1.5rem", color: "hsl(45 12% 85%)" }}>
                  Por que é importante?
                </h2>
              </div>
              <ul
                className="tick-list space-y-3"
                style={{ color: "hsl(45 8% 58%)", fontSize: "0.875rem", lineHeight: 1.7 }}
              >
                <li><strong style={{ color: "hsl(45 12% 80%)" }}>Crescimento:</strong> De 2 trilhões no nascimento a 37 trilhões de células na vida adulta.</li>
                <li><strong style={{ color: "hsl(45 12% 80%)" }}>Regeneração:</strong> Células ao redor de feridas se dividem para reparar tecidos.</li>
                <li><strong style={{ color: "hsl(45 12% 80%)" }}>Renovação:</strong> Intestino (3–5 dias), pele (2–3 semanas), glóbulos vermelhos (120 dias).</li>
                <li><strong style={{ color: "hsl(45 12% 80%)" }}>Reprodução assexuada:</strong> Bactérias, leveduras e alguns animais (hidra) se reproduzem por mitose.</li>
              </ul>
            </div>

            <div
              className="p-5"
              style={{ background: "hsl(355 15% 6%)", borderLeft: "3px solid hsl(355 70% 55%)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-4 h-4" style={{ color: "hsl(355 70% 55%)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "hsl(355 70% 55%)" }}>
                  QUANDO DÁ ERRADO
                </span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "hsl(45 8% 60%)", lineHeight: 1.65 }}>
                Quando os mecanismos de controle falham, a célula pode se dividir descontroladamente, dando origem a
                tumores. O <strong style={{ color: "hsl(45 12% 78%)" }}>câncer</strong> é essencialmente uma doença da
                mitose desregulada. Mutações no gene <strong style={{ color: "hsl(45 12% 78%)" }}>p53</strong> — o
                "guardião do genoma" — impedem que células danificadas sejam eliminadas.
              </p>
            </div>
          </div>

          {/* Sidebar stats */}
          <div className="space-y-4">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "hsl(45 8% 35%)",
                borderBottom: "1px solid hsl(45 10% 12%)",
                paddingBottom: "0.5rem",
                marginBottom: "1rem"
              }}
            >
              DADOS RÁPIDOS
            </div>
            {[
              { label: "Duração total", value: "1–2 h" },
              { label: "Fase mais longa", value: "Interfase (~90%)" },
              { label: "Fase mais rápida", value: "Anáfase" },
              { label: "Células produzidas", value: "2 (diploides)" },
              { label: "DNA duplicado?", value: "Sim (S-fase)" },
              { label: "Crossing-over?", value: "Não" },
              { label: "Varia geneticamente?", value: "Não" },
            ].map((d, i) => (
              <div key={i} className="flex items-start justify-between gap-4 py-2"
                style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}
              >
                <span style={{ fontSize: "0.8rem", color: "hsl(45 8% 50%)" }}>{d.label}</span>
                <span
                  className="text-right"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "hsl(355 60% 65%)" }}
                >
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERACTIVE DEMO ── */}
        <section className="py-20" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="flex items-center gap-3 mb-8">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(355 70% 55%)" }}>
              SIMULAÇÃO INTERATIVA
            </span>
          </div>
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em" }}>
            Passo a Passo da Mitose
          </h2>
          <CellDivisionDemo type="mitosis" />
        </section>

        {/* ── PHASES ── */}
        <section className="py-20" style={{ borderBottom: "1px solid hsl(45 10% 10%)" }}>
          <div className="flex items-center gap-3 mb-2">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(355 70% 55%)" }}>
              FASES
            </span>
          </div>
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em" }}>
            As 5 Etapas da Mitose
          </h2>
          <div className="space-y-1.5">
            {phases.map((p) => <PhaseAccordion key={p.title} phase={p} />)}
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
                  borderLeft: "2px solid hsl(42 85% 58% / 0.5)"
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "hsl(42 85% 58%)", letterSpacing: "0.15em", display: "block", marginBottom: "0.4rem" }}>
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
            <Video className="w-4 h-4" style={{ color: "hsl(355 70% 55%)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(355 70% 55%)" }}>
              REFERÊNCIAS EM VÍDEO
            </span>
          </div>
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "2rem", color: "hsl(45 12% 85%)", letterSpacing: "-0.02em" }}>
            Aprenda Também com Vídeos
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <YouTubeEmbed videoId="Wy3N5NCZBHQ" title="Mitose — Khan Academy" />
            <YouTubeEmbed videoId="f-ldPgEfAHI" title="Mitose — Biologia Total" />
          </div>
        </section>

        {/* ── NAV ── */}
        <section className="py-12 flex flex-col sm:flex-row gap-3 justify-between">
          <Link to="/">
            <button className="crosshair-btn">
              <span>← Início</span>
            </button>
          </Link>
          <Link to="/meiose">
            <button className="crosshair-btn crosshair-btn-cyan">
              <span className="flex items-center gap-2">
                Continuar: Meiose
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MitosePage;
