import { motion } from "framer-motion";
import { GitBranch, Circle, Target, ArrowUpDown, SplitSquareVertical, Shuffle, ArrowRight, BookOpen, Dna, Baby, AlertTriangle, Video } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import PhaseCard from "@/components/PhaseCard";
import CuriosityCard from "@/components/CuriosityCard";
import ContentSection from "@/components/ContentSection";
import CellDivisionDemo from "@/components/CellDivisionDemo";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import meiosisImg from "@/assets/meiosis-hero.jpg";

const meiosisI = [
  {
    title: "Prófase I",
    icon: <Circle className="w-5 h-5" />,
    description: "Cromossomos homólogos se pareiam e ocorre o crossing-over.",
    details:
      "A prófase I é a fase mais longa e complexa da meiose. Os cromossomos homólogos se pareiam formando bivalentes (tétrades). Ocorre o crossing-over (recombinação genética), onde segmentos de DNA são trocados entre cromátides não-irmãs, gerando variabilidade genética. Subdivide-se em: leptóteno, zigóteno, paquíteno, diplóteno e diacinese.",
    color: "--gradient-meiosis",
  },
  {
    title: "Metáfase I",
    icon: <Target className="w-5 h-5" />,
    description: "Os bivalentes se alinham na placa equatorial da célula.",
    details:
      "Os pares de homólogos (bivalentes) se posicionam na placa metafásica. A orientação de cada par é aleatória (segregação independente), o que contribui para a variabilidade genética. As fibras do fuso se ligam aos cinetócoros dos cromossomos homólogos.",
    color: "--gradient-meiosis",
  },
  {
    title: "Anáfase I",
    icon: <ArrowUpDown className="w-5 h-5" />,
    description: "Os cromossomos homólogos se separam e migram para polos opostos.",
    details:
      "Diferente da mitose, na anáfase I são os cromossomos homólogos que se separam (e não as cromátides-irmãs). Cada polo recebe um cromossomo de cada par homólogo, reduzindo o número cromossômico pela metade. É por isso que a meiose I é chamada de divisão reducional.",
    color: "--gradient-meiosis",
  },
  {
    title: "Telófase I",
    icon: <SplitSquareVertical className="w-5 h-5" />,
    description: "Duas células haploides são formadas ao final da primeira divisão.",
    details:
      "Os cromossomos podem descondensar parcialmente, e novas membranas nucleares podem se formar. A citocinese ocorre, resultando em duas células haploides. Em algumas espécies, as células entram brevemente em intercinese antes de iniciar a meiose II, sem que ocorra replicação do DNA.",
    color: "--gradient-meiosis",
  },
];

const meiosisII = [
  {
    title: "Prófase II",
    icon: <Circle className="w-5 h-5" />,
    description: "Semelhante à prófase mitótica, sem pareamento de homólogos.",
    details:
      "A prófase II é mais simples e rápida que a prófase I. Não ocorre pareamento nem crossing-over. Os cromossomos se condensam novamente, o envelope nuclear se desfaz e novos fusos se formam. Cada célula agora contém um número haploide de cromossomos.",
    color: "--gradient-meiosis",
  },
  {
    title: "Metáfase II",
    icon: <Target className="w-5 h-5" />,
    description: "Os cromossomos se alinham individualmente na placa equatorial.",
    details:
      "Similar à metáfase da mitose, os cromossomos (cada um com duas cromátides-irmãs) se alinham na placa equatorial. As fibras do fuso se conectam aos cinetócoros de cada cromátide.",
    color: "--gradient-meiosis",
  },
  {
    title: "Anáfase II",
    icon: <ArrowUpDown className="w-5 h-5" />,
    description: "As cromátides-irmãs se separam e migram para polos opostos.",
    details:
      "Agora sim, como na mitose, as cromátides-irmãs se separam. Os centrômeros se dividem e cada cromátide (agora um cromossomo individual) migra para um polo da célula.",
    color: "--gradient-meiosis",
  },
  {
    title: "Telófase II",
    icon: <SplitSquareVertical className="w-5 h-5" />,
    description: "Quatro células haploides geneticamente diferentes são formadas.",
    details:
      "Os cromossomos descondensam, os envelopes nucleares se reorganizam e a citocinese divide as duas células em quatro células haploides. No caso da espermatogênese, formam-se 4 espermatozoides. Na ovogênese, forma-se 1 óvulo e 3 corpúsculos polares.",
    color: "--gradient-meiosis",
  },
];

const curiosidades = [
  "O crossing-over durante a prófase I pode gerar mais de 8 milhões de combinações genéticas diferentes em humanos!",
  "Erros na meiose podem causar condições como a Síndrome de Down (trissomia do cromossomo 21).",
  "A meiose garante que, na fecundação, o número de cromossomos da espécie seja mantido de geração em geração.",
  "Sem a meiose, todos os irmãos seriam geneticamente idênticos (clones) — menos gêmeos univitelinos, que já são!",
  "Um homem produz cerca de 1.500 espermatozoides por segundo — todos através da meiose!",
  "Os óvulos humanos iniciam a meiose durante o desenvolvimento fetal e só a completam décadas depois, quando são fecundados.",
  "A prófase I é tão complexa que é dividida em 5 subfases: leptóteno, zigóteno, paquíteno, diplóteno e diacinese.",
  "Em abelhas, os machos (zangões) se desenvolvem a partir de óvulos não fecundados — são haploides naturalmente!",
  "Combinando a segregação independente dos dois pais, há mais de 70 trilhões de combinações genéticas possíveis para cada filho.",
];

const keyPoints = [
  { label: "Células resultantes", value: "4" },
  { label: "Ploidia", value: "Haploide (n)" },
  { label: "Variabilidade genética", value: "Sim" },
  { label: "Tipo", value: "Reducional + Equacional" },
];

const MeiosePage = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero with image */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <GitBranch className="w-4 h-4" />
                Divisão Reducional
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text-meiosis mb-4">
                Meiose
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A meiose é o processo de divisão celular que produz{" "}
                <strong className="text-foreground">quatro células-filhas haploides geneticamente diferentes</strong>.
                É fundamental para a reprodução sexuada e a variabilidade genética das espécies.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {keyPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass-card p-3 text-center"
                  >
                    <div className="text-xs text-muted-foreground mb-1">{point.label}</div>
                    <div className="font-display font-bold text-secondary text-sm">{point.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={meiosisImg}
                  alt="Ilustração científica da meiose"
                  className="w-full h-auto"
                  width={1024}
                  height={576}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-secondary/10 cell-blob -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-cell-pink/10 cell-blob -z-10" style={{ animationDelay: "2s" }} />
            </motion.div>
          </div>
        </div>

        {/* Detailed explanatory text */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <ContentSection title="O que é Meiose?" icon={<Dna className="w-5 h-5" />} variant="meiosis">
            <p>
              A <strong className="text-foreground">meiose</strong> é um tipo especial de divisão celular que ocorre exclusivamente nas <strong className="text-foreground">células germinativas</strong> (gônadas) para produzir gametas — espermatozoides nos homens e óvulos nas mulheres.
            </p>
            <p>
              Diferente da mitose, que é uma divisão simples, a meiose envolve <strong className="text-foreground">duas divisões consecutivas</strong> (meiose I e meiose II), reduzindo o número de cromossomos pela metade. Uma célula humana com 46 cromossomos (2n) gera gametas com 23 cromossomos (n).
            </p>
            <p>
              Isso é essencial: quando o espermatozoide (n=23) se une ao óvulo (n=23) na fecundação, o zigoto resultante terá o número correto de 46 cromossomos (2n), mantendo a estabilidade genética da espécie ao longo das gerações.
            </p>
          </ContentSection>

          <ContentSection title="Variabilidade Genética: o superpoder da Meiose" icon={<Baby className="w-5 h-5" />} variant="meiosis">
            <p>A meiose é a principal fonte de diversidade genética em organismos sexuados, graças a dois mecanismos:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-foreground">Crossing-over (recombinação):</strong> Durante a prófase I, cromossomos homólogos trocam segmentos de DNA. Isso cria cromossomos com combinações genéticas inéditas — que não existiam nem no pai nem na mãe.
              </li>
              <li>
                <strong className="text-foreground">Segregação independente:</strong> Na metáfase I, cada par de homólogos se alinha de forma aleatória. Com 23 pares de cromossomos humanos, isso gera 2²³ = <strong className="text-foreground">8.388.608 combinações possíveis</strong> — e isso é só de um dos pais!
              </li>
            </ul>
            <p>
              Combinando os gametas de dois pais, as possibilidades genéticas para cada filho são praticamente infinitas. É por isso que irmãos (exceto gêmeos idênticos) são diferentes entre si.
            </p>
          </ContentSection>

          <ContentSection title="Erros na Meiose e suas consequências" icon={<AlertTriangle className="w-5 h-5" />} variant="meiosis">
            <p>
              Quando os cromossomos não se separam corretamente durante a meiose (um erro chamado <strong className="text-foreground">não-disjunção</strong>), os gametas podem ter cromossomos a mais ou a menos. Isso leva a condições chamadas <strong className="text-foreground">aneuploidias</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-foreground">Síndrome de Down:</strong> trissomia do cromossomo 21 (3 cópias ao invés de 2)</li>
              <li><strong className="text-foreground">Síndrome de Turner:</strong> monossomia do X (45,X) — apenas um cromossomo sexual</li>
              <li><strong className="text-foreground">Síndrome de Klinefelter:</strong> presença de um X extra em homens (47,XXY)</li>
            </ul>
            <p>
              A probabilidade de erros na meiose aumenta com a idade materna, especialmente após os 35 anos, pois os óvulos ficam "estacionados" na prófase I desde antes do nascimento da mulher.
            </p>
          </ContentSection>
        </div>

        {/* Interactive Demo */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <GitBranch className="w-5 h-5 text-secondary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Demonstração Interativa
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-6 text-sm">
            Acompanhe as duas divisões da meiose passo a passo e veja como 4 células haploides são formadas.
          </p>
          <CellDivisionDemo type="meiosis" />
        </div>

        {/* Meiose I */}
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Shuffle className="w-5 h-5 text-secondary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Meiose I — Divisão Reducional
            </h2>
          </div>
          {meiosisI.map((phase, i) => (
            <PhaseCard
              key={phase.title}
              title={phase.title}
              description={phase.description}
              details={phase.details}
              icon={phase.icon}
              index={i}
              color={phase.color}
            />
          ))}
        </div>

        {/* Meiose II */}
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <BookOpen className="w-5 h-5 text-secondary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Meiose II — Divisão Equacional
            </h2>
          </div>
          {meiosisII.map((phase, i) => (
            <PhaseCard
              key={phase.title}
              title={phase.title}
              description={phase.description}
              details={phase.details}
              icon={phase.icon}
              index={i}
              color={phase.color}
            />
          ))}
        </div>

        {/* YouTube Videos */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Video className="w-5 h-5 text-secondary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Vídeos de Referência
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <YouTubeEmbed videoId="nMakmH1hMCg" title="Meiose — Khan Academy" />
            <YouTubeEmbed videoId="VzDMG7ke69g" title="Meiose — Biologia Total" />
          </div>
        </div>

        {/* Curiosities */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            🧬 Curiosidades
          </h2>
          <div className="space-y-3">
            {curiosidades.map((text, i) => (
              <CuriosityCard key={i} text={text} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Link to="/comparacao">
            <div className="glass-card p-6 flex items-center justify-between group hover:border-accent/30 transition-colors cursor-pointer">
              <div>
                <p className="text-sm text-muted-foreground">Compare os processos</p>
                <h3 className="font-display text-lg font-bold text-accent">
                  Mitose vs Meiose →
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MeiosePage;
