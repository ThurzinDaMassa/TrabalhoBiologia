import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { BookOpen, Search, ChevronDown, ChevronUp, Dna } from "lucide-react";
import Header from "@/components/Header";

interface Term {
  term: string;
  definition: string;
  category: "geral" | "mitose" | "meiose";
}

const glossaryTerms: Term[] = [
  { term: "Cromossomo", definition: "Estrutura formada por DNA e proteínas histonas, que carrega os genes. São visíveis ao microscópio durante a divisão celular quando a cromatina se condensa.", category: "geral" },
  { term: "Cromátides-irmãs", definition: "As duas cópias idênticas de um cromossomo duplicado, unidas pelo centrômero. São separadas durante a anáfase da mitose e a anáfase II da meiose.", category: "geral" },
  { term: "Centrômero", definition: "Região do cromossomo onde as cromátides-irmãs se unem e onde os microtúbulos do fuso se ligam através do cinetócoro.", category: "geral" },
  { term: "Cinetócoro", definition: "Complexo proteico localizado no centrômero que serve como ponto de ancoragem para as fibras do fuso mitótico.", category: "geral" },
  { term: "Fuso mitótico", definition: "Estrutura formada por microtúbulos que se estende entre os dois polos da célula e é responsável pela separação dos cromossomos durante a divisão celular.", category: "geral" },
  { term: "Centrossomo", definition: "Organela que organiza os microtúbulos e forma os polos do fuso mitótico. Contém dois centríolos em células animais.", category: "geral" },
  { term: "Cromatina", definition: "Forma descondensada do material genético encontrada no núcleo durante a interfase. Condensa-se em cromossomos durante a divisão.", category: "geral" },
  { term: "Cariótipo", definition: "Conjunto completo de cromossomos de uma célula, organizados por tamanho e forma. Humanos têm 46 cromossomos (23 pares).", category: "geral" },
  { term: "Diploide (2n)", definition: "Célula que possui dois conjuntos completos de cromossomos — um de cada progenitor. A maioria das células do corpo humano é diploide.", category: "geral" },
  { term: "Haploide (n)", definition: "Célula que possui apenas um conjunto de cromossomos. Gametas (espermatozoides e óvulos) são haploides.", category: "geral" },
  { term: "Interfase", definition: "Período entre divisões celulares onde a célula cresce, replica seu DNA (fase S) e se prepara para a próxima divisão.", category: "geral" },
  { term: "Placa metafásica", definition: "Plano equatorial imaginário da célula onde os cromossomos se alinham durante a metáfase.", category: "mitose" },
  { term: "Sulco de clivagem", definition: "Invaginação da membrana plasmática em células animais durante a citocinese, formado pela contração do anel de actina e miosina.", category: "mitose" },
  { term: "Citocinese", definition: "Processo de divisão do citoplasma que ocorre após a divisão nuclear (cariocinese), resultando em duas células separadas.", category: "mitose" },
  { term: "Crossing-over", definition: "Troca de segmentos de DNA entre cromátides não-irmãs de cromossomos homólogos durante a prófase I da meiose, gerando recombinação genética.", category: "meiose" },
  { term: "Bivalente (tétrade)", definition: "Par de cromossomos homólogos unidos durante a prófase I da meiose, formando uma estrutura com quatro cromátides.", category: "meiose" },
  { term: "Segregação independente", definition: "Princípio pelo qual os pares de homólogos se orientam aleatoriamente na metáfase I, gerando diferentes combinações cromossômicas nos gametas.", category: "meiose" },
  { term: "Quiasma", definition: "Ponto visível de crossing-over entre cromátides não-irmãs durante o diplóteno da prófase I.", category: "meiose" },
  { term: "Sinapse", definition: "Pareamento íntimo entre cromossomos homólogos durante o zigóteno da prófase I, mediado pelo complexo sinaptonêmico.", category: "meiose" },
  { term: "Gameta", definition: "Célula reprodutiva haploide (espermatozoide ou óvulo) produzida por meiose, que ao se fundir com outro gameta forma um zigoto diploide.", category: "meiose" },
  { term: "Separase", definition: "Enzima que cliva as coesinas, proteínas que mantêm as cromátides-irmãs unidas, permitindo sua separação na anáfase.", category: "geral" },
  { term: "Coesina", definition: "Complexo proteico em forma de anel que mantém as cromátides-irmãs unidas desde a replicação do DNA até a anáfase.", category: "geral" },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "geral", label: "Geral" },
  { id: "mitose", label: "Mitose" },
  { id: "meiose", label: "Meiose" },
];

const GlossaryPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todos");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return glossaryTerms
      .filter((t) => category === "todos" || t.category === category)
      .filter((t) =>
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [search, category]);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cell-purple/10 border border-cell-purple/20 text-cell-purple text-sm font-medium mb-4"
            >
              <BookOpen className="w-4 h-4" />
              Glossário
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Glossário de Biologia Celular
            </h1>
            <p className="text-muted-foreground text-lg">
              Pesquise e explore os principais termos da divisão celular.
            </p>
          </div>

          {/* Search & filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar termo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
              />
            </div>
            <div className="flex gap-1.5 bg-muted/60 rounded-xl p-1 border border-border/30">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    category === cat.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Terms list */}
          <div className="space-y-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((term) => (
                <motion.div
                  key={term.term}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass-card overflow-hidden"
                >
                  <button
                    onClick={() => setExpanded(expanded === term.term ? null : term.term)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Dna className="w-4 h-4 text-primary shrink-0" />
                      <span className="font-display font-semibold text-foreground">{term.term}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        term.category === "mitose"
                          ? "bg-primary/10 text-primary"
                          : term.category === "meiose"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {term.category}
                      </span>
                    </div>
                    {expanded === term.term ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expanded === term.term && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed pl-11">
                          {term.definition}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                Nenhum termo encontrado.
              </div>
            )}
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            {filtered.length} termo{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GlossaryPage;
