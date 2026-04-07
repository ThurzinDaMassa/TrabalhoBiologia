import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Network, X, ChevronRight } from "lucide-react";
import Header from "@/components/Header";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  category: "central" | "mitose" | "meiose" | "shared";
  description: string;
  children?: string[];
}

const nodes: Node[] = [
  {
    id: "divisao",
    label: "Divisão Celular",
    x: 50,
    y: 12,
    color: "hsl(42 85% 58%)",
    category: "central",
    description: "Processo fundamental pelo qual uma célula-mãe origina células-filhas. Base do crescimento, reparo e reprodução de todos os organismos.",
    children: ["mitose", "meiose", "interfase"],
  },
  {
    id: "interfase",
    label: "Interfase",
    x: 50,
    y: 28,
    color: "hsl(42 85% 58%)",
    category: "shared",
    description: "Período entre divisões. Inclui fase G1 (crescimento), fase S (replicação do DNA) e fase G2 (preparação). Dura ~90% do ciclo celular.",
    children: ["dna"],
  },
  {
    id: "mitose",
    label: "Mitose",
    x: 18,
    y: 28,
    color: "hsl(355 70% 55%)",
    category: "mitose",
    description: "Divisão equacional que produz 2 células-filhas diploides (2n) geneticamente idênticas. Ocorre em células somáticas para crescimento e reparo.",
    children: ["profase", "metafase", "anafase", "telofase", "citocinese_m"],
  },
  {
    id: "meiose",
    label: "Meiose",
    x: 82,
    y: 28,
    color: "hsl(185 75% 45%)",
    category: "meiose",
    description: "Divisão reducional que produz 4 células haploides (n) geneticamente únicas. Ocorre em células germinativas para produção de gametas.",
    children: ["meiose1", "meiose2", "gametas", "variabilidade"],
  },
  // --- MITOSE phases ---
  {
    id: "profase",
    label: "Prófase",
    x: 6,
    y: 42,
    color: "hsl(355 70% 55%)",
    category: "mitose",
    description: "Condensação dos cromossomos, formação do fuso mitótico e desintegração da membrana nuclear. O nucléolo desaparece.",
    children: [],
  },
  {
    id: "metafase",
    label: "Metáfase",
    x: 6,
    y: 52,
    color: "hsl(355 70% 55%)",
    category: "mitose",
    description: "Cromossomos se alinham na placa equatorial. Momento ideal para análise do cariótipo — máxima condensação.",
    children: [],
  },
  {
    id: "anafase",
    label: "Anáfase",
    x: 6,
    y: 62,
    color: "hsl(355 70% 55%)",
    category: "mitose",
    description: "Cromátides-irmãs se separam e migram para polos opostos. A separase cliva as coesinas. Fase mais rápida.",
    children: [],
  },
  {
    id: "telofase",
    label: "Telófase",
    x: 6,
    y: 72,
    color: "hsl(355 70% 55%)",
    category: "mitose",
    description: "Reconstituição dos núcleos e descondensação dos cromossomos. O fuso se desfaz e o nucléolo reaparece.",
    children: [],
  },
  {
    id: "citocinese_m",
    label: "Citocinese",
    x: 18,
    y: 82,
    color: "hsl(355 70% 55%)",
    category: "mitose",
    description: "Divisão do citoplasma após a mitose. Em animais: estrangulamento por anel de actina/miosina. Em plantas: formação da placa celular. Resultado: 2 células diploides idênticas.",
    children: [],
  },
  // --- MEIOSE I ---
  {
    id: "meiose1",
    label: "Meiose I",
    x: 72,
    y: 40,
    color: "hsl(185 75% 45%)",
    category: "meiose",
    description: "Divisão reducional: separa cromossomos homólogos. Reduz a ploidia de 2n para n. Inclui crossing-over na prófase I.",
    children: ["profase1", "metafase1", "anafase1", "telofase1"],
  },
  {
    id: "profase1",
    label: "Prófase I",
    x: 62,
    y: 50,
    color: "hsl(185 75% 45%)",
    category: "meiose",
    description: "Fase mais longa da meiose. Ocorre sinapse dos homólogos (bivalentes/tétrades) e crossing-over. Subfases: leptóteno, zigóteno, paquíteno, diplóteno e diacinese.",
    children: ["crossingover"],
  },
  {
    id: "metafase1",
    label: "Metáfase I",
    x: 62,
    y: 60,
    color: "hsl(185 75% 45%)",
    category: "meiose",
    description: "Bivalentes se alinham na placa equatorial. A orientação aleatória dos homólogos gera segregação independente — fonte de variabilidade genética.",
    children: [],
  },
  {
    id: "anafase1",
    label: "Anáfase I",
    x: 62,
    y: 70,
    color: "hsl(185 75% 45%)",
    category: "meiose",
    description: "Cromossomos homólogos se separam (não as cromátides-irmãs!). Cada polo recebe n cromossomos, cada um com duas cromátides.",
    children: [],
  },
  {
    id: "telofase1",
    label: "Telófase I",
    x: 62,
    y: 80,
    color: "hsl(185 75% 45%)",
    category: "meiose",
    description: "Formam-se dois núcleos haploides. Pode ocorrer citocinese. Em muitas espécies, passa direto para a meiose II sem interfase completa (intercinese).",
    children: [],
  },
  // --- MEIOSE II ---
  {
    id: "meiose2",
    label: "Meiose II",
    x: 92,
    y: 40,
    color: "hsl(200 75% 50%)",
    category: "meiose",
    description: "Divisão equacional: separa cromátides-irmãs. Semelhante à mitose, mas parte de células haploides. Resultado: 4 células haploides.",
    children: ["profase2", "metafase2", "anafase2", "telofase2"],
  },
  {
    id: "profase2",
    label: "Prófase II",
    x: 94,
    y: 50,
    color: "hsl(200 75% 50%)",
    category: "meiose",
    description: "Breve fase onde os cromossomos se condensam novamente. Novo fuso se forma. Não ocorre crossing-over pois não há homólogos pareados.",
    children: [],
  },
  {
    id: "metafase2",
    label: "Metáfase II",
    x: 94,
    y: 60,
    color: "hsl(200 75% 50%)",
    category: "meiose",
    description: "Cromossomos se alinham na placa equatorial, semelhante à metáfase da mitose. Cinetócoros das cromátides-irmãs apontam para polos opostos.",
    children: [],
  },
  {
    id: "anafase2",
    label: "Anáfase II",
    x: 94,
    y: 70,
    color: "hsl(200 75% 50%)",
    category: "meiose",
    description: "Cromátides-irmãs se separam e migram para polos opostos. Agora sim, semelhante à anáfase da mitose.",
    children: [],
  },
  {
    id: "telofase2",
    label: "Telófase II",
    x: 94,
    y: 80,
    color: "hsl(200 75% 50%)",
    category: "meiose",
    description: "Núcleos se reconstituem, cromossomos descondensam. Citocinese ocorre, resultando em 4 células haploides geneticamente únicas.",
    children: [],
  },
  // --- Shared/extra ---
  {
    id: "crossingover",
    label: "Crossing-over",
    x: 50,
    y: 55,
    color: "hsl(42 85% 58%)",
    category: "meiose",
    description: "Troca de segmentos de DNA entre cromátides não-irmãs de homólogos durante a prófase I. Principal gerador de variabilidade genética.",
    children: ["variabilidade"],
  },
  {
    id: "gametas",
    label: "Gametas",
    x: 82,
    y: 90,
    color: "hsl(185 75% 45%)",
    category: "meiose",
    description: "Células sexuais haploides (n). Espermatozoides (4 funcionais por meiose) e óvulos (1 funcional + 3 corpúsculos polares).",
    children: [],
  },
  {
    id: "variabilidade",
    label: "Variabilidade",
    x: 50,
    y: 68,
    color: "hsl(262 55% 60%)",
    category: "meiose",
    description: "Gerada pelo crossing-over + segregação independente. Com 23 pares de cromossomos humanos: 8 milhões de combinações por gameta.",
    children: [],
  },
  {
    id: "cromossomo",
    label: "Cromossomo",
    x: 35,
    y: 90,
    color: "hsl(42 85% 58%)",
    category: "shared",
    description: "Estrutura de DNA + proteínas histonas. Humanos têm 46 (23 pares). Visível ao microscópio apenas durante a divisão celular.",
    children: [],
  },
  {
    id: "fuso",
    label: "Fuso Mitótico",
    x: 18,
    y: 55,
    color: "hsl(42 85% 58%)",
    category: "shared",
    description: "Estrutura de microtúbulos que conecta os polos da célula aos cinetócoros dos cromossomos. Responsável pela separação.",
    children: [],
  },
  {
    id: "dna",
    label: "DNA",
    x: 50,
    y: 40,
    color: "hsl(42 85% 58%)",
    category: "shared",
    description: "Ácido desoxirribonucleico — molécula da hereditariedade. Replicado na fase S da interfase antes de toda divisão celular.",
    children: [],
  },
];

const connections: [string, string][] = [
  ["divisao", "mitose"],
  ["divisao", "meiose"],
  ["divisao", "interfase"],
  ["interfase", "dna"],
  // Mitose
  ["mitose", "profase"],
  ["mitose", "metafase"],
  ["mitose", "anafase"],
  ["mitose", "telofase"],
  ["mitose", "citocinese_m"],
  ["mitose", "fuso"],
  ["profase", "metafase"],
  ["metafase", "anafase"],
  ["anafase", "telofase"],
  ["telofase", "citocinese_m"],
  // Meiose
  ["meiose", "meiose1"],
  ["meiose", "meiose2"],
  ["meiose", "gametas"],
  // Meiose I
  ["meiose1", "profase1"],
  ["meiose1", "metafase1"],
  ["meiose1", "anafase1"],
  ["meiose1", "telofase1"],
  ["profase1", "metafase1"],
  ["metafase1", "anafase1"],
  ["anafase1", "telofase1"],
  ["profase1", "crossingover"],
  ["crossingover", "variabilidade"],
  // Meiose II
  ["meiose2", "profase2"],
  ["meiose2", "metafase2"],
  ["meiose2", "anafase2"],
  ["meiose2", "telofase2"],
  ["profase2", "metafase2"],
  ["metafase2", "anafase2"],
  ["anafase2", "telofase2"],
  // Shared
  ["divisao", "cromossomo"],
  ["anafase", "cromossomo"],
  ["telofase2", "gametas"],
];

const categoryColors: Record<string, string> = {
  central: "hsl(42 85% 58%)",
  mitose: "hsl(355 70% 55%)",
  meiose: "hsl(185 75% 45%)",
  shared: "hsl(42 85% 58%)",
};

const MindMapPage = () => {
  const [selected, setSelected] = useState<Node | null>(null);
  const [filter, setFilter] = useState<"all" | "mitose" | "meiose" | "shared">("all");

  const visibleNodes = nodes.filter(
    (n) => filter === "all" || n.category === filter || n.category === "central" || n.category === "shared"
  );
  const visibleIds = new Set(visibleNodes.map((n) => n.id));

  const visibleConnections = connections.filter(
    ([a, b]) => visibleIds.has(a) && visibleIds.has(b)
  );

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

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
            FERRAMENTA DE ESTUDO
          </span>
          <h1
            className="font-display font-black mb-2"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "hsl(45 15% 92%)" }}
          >
            Mapa Conceitual
          </h1>
          <p style={{ color: "hsl(45 8% 55%)" }}>
            Explore as conexões entre os conceitos. Clique em qualquer nó para ver detalhes.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-10">

        {/* Filter */}
        <div className="flex gap-1 mb-8">
          {(["all", "mitose", "meiose", "shared"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="crosshair-btn"
              style={{
                padding: "0.35em 1em",
                fontSize: "0.65rem",
                borderColor: filter === f
                  ? f === "mitose" ? "hsl(355 70% 55%)" : f === "meiose" ? "hsl(185 75% 45%)" : "hsl(42 85% 58%)"
                  : undefined,
                color: filter === f
                  ? f === "mitose" ? "hsl(355 70% 55%)" : f === "meiose" ? "hsl(185 75% 45%)" : "hsl(42 85% 58%)"
                  : undefined,
              }}
            >
              <span>
                {f === "all" ? "TODOS" : f === "shared" ? "COMPARTILHADO" : f.toUpperCase()}
              </span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* SVG Mind Map */}
          <div
            className="lg:col-span-2"
            style={{
              background: "hsl(16 12% 5%)",
              border: "1px solid hsl(45 10% 12%)",
              position: "relative",
              minHeight: "520px",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{ minHeight: "520px" }}
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Grid */}
              <defs>
                <pattern id="mapgrid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M 5 0 L 0 0 0 5" fill="none" stroke="hsl(45 10% 12%)" strokeWidth="0.15" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#mapgrid)" />

              {/* Connections */}
              {visibleConnections.map(([aId, bId], i) => {
                const a = getNode(aId);
                const b = getNode(bId);
                if (!a || !b) return null;
                return (
                  <line
                    key={i}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="hsl(45 10% 20%)"
                    strokeWidth="0.3"
                    strokeDasharray={b.category === "shared" ? "1 0.5" : "0"}
                  />
                );
              })}

              {/* Nodes */}
              {visibleNodes.map((node) => {
                const isSelected = selected?.id === node.id;
                const size = node.category === "central" ? 6 : node.category === "shared" ? 4.5 : 4;
                return (
                  <g
                    key={node.id}
                    onClick={() => setSelected(isSelected ? null : node)}
                    style={{ cursor: "pointer" }}
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={size + (isSelected ? 1.5 : 0)}
                      fill={isSelected ? node.color : `${node.color}22`}
                      stroke={node.color}
                      strokeWidth={isSelected ? "0.6" : "0.4"}
                    />
                    <text
                      x={node.x}
                      y={node.y + size + 2.2}
                      textAnchor="middle"
                      fontSize={node.category === "central" ? "2.2" : "1.8"}
                      fill={node.color}
                      fontFamily="Space Mono, monospace"
                      opacity={0.9}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Detail Panel */}
          <div>
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="h-full"
                  style={{
                    background: "hsl(16 12% 6%)",
                    border: "1px solid hsl(45 10% 12%)",
                    borderTop: `3px solid ${selected.color}`,
                    padding: "1.5rem",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.15em", color: selected.color }}
                      >
                        {selected.category.toUpperCase()}
                      </span>
                      <h3 className="font-display font-bold mt-1" style={{ fontSize: "1.6rem", color: "hsl(45 12% 85%)", lineHeight: 1.1 }}>
                        {selected.label}
                      </h3>
                    </div>
                    <button onClick={() => setSelected(null)} style={{ color: "hsl(45 8% 40%)" }}>
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "hsl(45 8% 58%)", lineHeight: 1.7 }}>
                    {selected.description}
                  </p>

                  {selected.children && selected.children.length > 0 && (
                    <div className="mt-5">
                      <span
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.12em", color: "hsl(45 8% 40%)", display: "block", marginBottom: "0.5rem" }}
                      >
                        CONECTADO A:
                      </span>
                      <div className="space-y-1">
                        {selected.children.map((childId) => {
                          const child = nodes.find((n) => n.id === childId);
                          if (!child) return null;
                          return (
                            <button
                              key={childId}
                              onClick={() => setSelected(child)}
                              className="flex items-center gap-2 w-full text-left py-1.5 px-2 transition-colors"
                              style={{ color: child.color, fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}
                            >
                              <ChevronRight className="w-3 h-3" />
                              {child.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    background: "hsl(16 12% 6%)",
                    border: "1px solid hsl(45 10% 12%)",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "300px",
                    gap: "1rem",
                  }}
                >
                  <Network className="w-10 h-10" style={{ color: "hsl(45 8% 30%)" }} />
                  <p
                    className="text-center"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", color: "hsl(45 8% 40%)" }}
                  >
                    CLIQUE EM UM NÓ<br />PARA VER DETALHES
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Legend */}
            <div
              className="mt-4 p-4"
              style={{ background: "hsl(16 12% 6%)", border: "1px solid hsl(45 10% 12%)" }}
            >
              <span
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.12em", color: "hsl(45 8% 35%)", display: "block", marginBottom: "0.75rem" }}
              >
                LEGENDA
              </span>
              {[
                { color: "hsl(42 85% 58%)", label: "Central / Compartilhado" },
                { color: "hsl(355 70% 55%)", label: "Mitose" },
                { color: "hsl(185 75% 45%)", label: "Meiose" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2 mb-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: l.color }} />
                  <span style={{ fontSize: "0.75rem", color: "hsl(45 8% 52%)" }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All concepts list */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(42 85% 58%)" }}>
              TODOS OS CONCEITOS
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {nodes.map((node) => (
              <motion.button
                key={node.id}
                onClick={() => setSelected(selected?.id === node.id ? null : node)}
                whileHover={{ borderColor: node.color }}
                className="text-left p-3 transition-all"
                style={{
                  background: selected?.id === node.id ? `${node.color}15` : "hsl(16 12% 6%)",
                  border: `1px solid ${selected?.id === node.id ? node.color : "hsl(45 10% 12%)"}`,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: node.color }} />
                  <span style={{ fontSize: "0.82rem", color: "hsl(45 12% 78%)", fontWeight: 500 }}>
                    {node.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMapPage;
