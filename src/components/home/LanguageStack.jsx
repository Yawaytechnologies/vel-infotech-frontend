import {
  FaJs,
  FaCode,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaFire,
  FaCloud,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaGem,
  FaPhp,
  FaSwift,
  FaMobileAlt,
  FaWind,
  FaSyncAlt,
  FaSass,
  FaProjectDiagram,
  FaVuejs,
  FaAngular,
  FaLeaf,
} from "react-icons/fa";
const rows = [
  [
    { label: "JavaScript", Icon: FaJs },
    { label: "TypeScript", Icon: FaCode },
    { label: "Python", Icon: FaPython },
    { label: "Java", Icon: FaJava },
    { label: "C#", Icon: FaCode },
    { label: "C++", Icon: FaCode },
    { label: "Go", Icon: FaCode },
    { label: "Rust", Icon: FaCode },
  ],
  [
    { label: "HTML5", Icon: FaHtml5 },
    { label: "CSS3", Icon: FaCss3Alt },
    { label: "React", Icon: FaReact },
    { label: "Next.js", Icon: FaCode },
    { label: "Node.js", Icon: FaNodeJs },
    { label: "Express", Icon: FaServer },
    { label: "Django", Icon: FaPython },
    { label: "Spring", Icon: FaLeaf },
  ],
  [
    { label: "MongoDB", Icon: FaDatabase },
    { label: "MySQL", Icon: FaDatabase },
    { label: "PostgreSQL", Icon: FaDatabase },
    { label: "Firebase", Icon: FaFire },
    { label: "AWS", Icon: FaCloud },
    { label: "Docker", Icon: FaDocker },
    { label: "Linux", Icon: FaLinux },
    { label: "Git", Icon: FaGitAlt },
  ],
  [
    { label: "Ruby", Icon: FaGem },
    { label: "PHP", Icon: FaPhp },
    { label: "Swift", Icon: FaSwift },
    { label: "Kotlin", Icon: FaCode },
    { label: "Dart", Icon: FaCode },
    { label: "Flutter", Icon: FaMobileAlt },
    { label: "Tailwind CSS", Icon: FaWind },
    { label: "Redux", Icon: FaSyncAlt },
    { label: "Sass", Icon: FaSass },
    { label: "GraphQL", Icon: FaProjectDiagram },
    { label: "Vue.js", Icon: FaVuejs },
    { label: "Angular", Icon: FaAngular },
  ],
];

// Marquee keyframes (unchanged)
const marqueeStyle = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes marqueeReverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
`;

function MarqueeRow({ items, reverse = false, duration = 24 }) {
  const pills = Array(4).fill(items).flat();
  return (
    <div className="overflow-hidden w-full my-2 relative">
      {/* ... overlays ... */}
      {/* Left vignette */}
      <div
        className="pointer-events-none absolute left-0 top-0 w-24 h-full z-20"
        style={{
          background: "linear-gradient(to right, #f4f7fd 60%, #fff0 100%)",
        }}
      />

      <div
        className="flex gap-6 min-w-fit"
        style={{
          animation: `${
            reverse ? "marqueeReverse" : "marquee"
          } ${duration}s linear infinite`,
        }}
      >
        {pills.map((item, i) => {
          const { label, Icon } = item;
          return (
            <span
              key={i}
              className="flex items-center gap-2 mt-1 mb-1 bg-white rounded-3xl px-4 py-3 min-w-[170px] shadow-3xl text-gray-700 text-xs font-medium justify-center transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 cursor-pointer select-none relative"
              style={{
                boxShadow: "0 8px 32px 0 rgba(80,89,143,0.13)",
              }}
            >
              <Icon className="text-xl md:text-2xl text-[#858caa]" />
              <span>{label}</span>
            </span>
          );
        })}
      </div>
      {/* Right vignette */}
      <div
        className="pointer-events-none absolute right-0 top-0 w-24 h-full z-20"
        style={{
          background: "linear-gradient(to left, #f4f7fd 60%, #fff0 100%)",
        }}
      />
    </div>
  );
}

export default function ElementsMarqueeSection() {
  return (
    <section className="relative py-14 w-full bg-[#f4f7fd] overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl text-center  font-black mb-10 tracking-tight z-30 relative">
        <span className="text-[#41e392]">30+</span>{" "}
        <span className="text-[#232946]">
          Programming Languages & Frameworks
        </span>
      </h2>
      <style>{marqueeStyle}</style>
      <div className="max-w-7xl mx-auto flex flex-col  gap-1 relative z-10">
        <MarqueeRow items={rows[0]} reverse={false} duration={130} />
        <MarqueeRow items={rows[1]} reverse={true} duration={130} />
        <MarqueeRow items={rows[2]} reverse={false} duration={130} />
      </div>
    </section>
  );
}
