import React from "react";
import LucideIcon from "./LucideIcon";

const conclusions = [
  {
    icon: "XCircle",
    title: "Broken Promises",
    text: "The NPP came to power on sweeping, unrealistic promises it has systematically failed to deliver — from renegotiating the IMF deal to reducing food taxes, stopping privatization, and developing the country in six months.",
    color: "#8B0000",
  },
  {
    icon: "Banknote",
    title: "Governance Scandals",
    text: "Coal procurement fraud (Trident Champhar Limited — NAO found the award violated tender procedures), a $2.5M Treasury cybercrime heist, education module scandal, and CIABOC probes against six senior ministers.",
    color: "#B8860B",
  },
  {
    icon: "Theater",
    title: "Ideological Hypocrisy",
    text: "The JVP — declared Marxist-Leninists — now practice neoliberalism under IMF supervision while their own ministers accumulate multi-million-rupee capitalist wealth in real estate, cryptocurrency, and stock markets.",
    color: "#8B4513",
  },
  {
    icon: "Skull",
    title: "Violent History",
    text: "The JVP's two armed insurrections (1971 and 1987-89) cost tens of billions of dollars, killed ~65,000+ people, devastated rural communities, and diverted decades of development spending into security and conflict response.",
    color: "#8B0000",
  },
  {
    icon: "Lock",
    title: "Authoritarian Drift",
    text: "The NPP is showing authoritarian tendencies: emergency powers against critics, leaving independent oversight positions vacant, manipulating local councils, and reportedly using social media brigades against constitutional officers.",
    color: "#8B0000",
  },
  {
    icon: "TrendingDown",
    title: "Declining Public Trust",
    text: "The NPP's vote share collapsed 34% — from 6.8M to 4.5M — between November 2024 and May 2025, as broken promises, scandals, and inexperienced governance eroded the mandate they won on.",
    color: "#B8860B",
  },
];

const sources = [
  "International Crisis Group",
  "JURIST Legal News",
  "Human Rights Watch (Oct 2025)",
  "East Asia Forum",
  "IFRI",
  "Centre for Policy Alternatives",
  "The Diplomat",
  "Oxford Research Encyclopedia",
  "UN Human Rights Council",
  "World Bank",
  "UNDP",
  "Sunday Times Sri Lanka",
  "Daily Mirror",
  "Sri Lanka Guardian",
  "Groundviews",
  "The Island",
];

const ConclusionSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] relative">
      <div className="h-1 absolute top-0 left-0 right-0 flex">
        <div className="flex-1 bg-[#8B0000]" />
        <div className="w-20 bg-[#DAA520]" />
        <div className="w-20 bg-[#FF8C00]" />
        <div className="flex-1 bg-[#006400]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#DAA520]/20 border border-[#DAA520]/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#DAA520] rounded-full" />
            <span className="text-[#DAA520] text-sm font-semibold uppercase tracking-widest">Conclusion</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            The Verdict
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Based on credible international and domestic sources, the following conclusions can be established.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {conclusions.map((item, i) => (
            <div
              key={i}
              className="bg-[#111] border rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300"
              style={{ borderColor: item.color + "40" }}
            >
              <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-white/10 mb-4">
                <LucideIcon name={item.icon} size={24} style={{ color: item.color === "#8B0000" ? "#FF6B6B" : "#DAA520" }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Final impact statement */}
        <div
          className="rounded-2xl p-8 mb-10 text-center"
          style={{
            background: "linear-gradient(135deg, #1a0000 0%, #0d0d00 50%, #001a00 100%)",
            border: "1px solid #3a1010",
          }}
        >
          <div className="w-20 h-20 bg-black/40 rounded-full flex items-center justify-center border border-white/10 mx-auto mb-6">
            <LucideIcon name="Map" size={40} className="text-[#DAA520]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Sri Lanka Deserves Better
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg mb-5">
            Nearly a quarter of Sri Lanka's population lives in poverty. Food insecurity affects 26% of households. 
            Real wages remain below pre-crisis levels. Household debt stands at 38.5%. 
            And the government that promised to change all this has instead continued austerity, 
            overseen major scandals, and shown signs of authoritarian drift.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Poverty Rate", value: "24.5%", note: "Double pre-pandemic" },
              { label: "Food Insecure Households", value: "26%", note: "Per World Bank 2024" },
              { label: "Public Trust Lost", value: "34%", note: "Vote share drop in 6 months" },
            ].map((stat, i) => (
              <div key={i} className="bg-black/40 rounded-xl p-4">
                <div className="text-2xl font-black text-[#DAA520]">{stat.value}</div>
                <div className="text-white font-semibold text-sm">{stat.label}</div>
                <div className="text-gray-500 text-xs mt-1">{stat.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-6">
          <h3 className="text-gray-300 font-bold text-sm mb-4 flex items-center gap-2">
            <LucideIcon name="BookOpen" size={16} /> Sources & References
          </h3>
          <div className="flex flex-wrap gap-2">
            {sources.map((source, i) => (
              <span key={i} className="bg-[#1a1a1a] border border-[#3a3a3a] text-gray-400 text-xs px-3 py-1.5 rounded-full">
                {source}
              </span>
            ))}
          </div>
          <div className="mt-4 p-3 bg-[#1a1a1a] rounded-xl">
            <p className="text-gray-500 text-xs leading-relaxed flex items-start gap-2">
              <LucideIcon name="AlertTriangle" size={14} className="mt-0.5 flex-shrink-0" />
              <span>
                <strong className="text-gray-400">Disclaimer:</strong> This document is compiled from publicly available, internationally recognized credible sources for research and public interest documentation purposes. All data is sourced from named publications with verifiable references. This is a research and accountability record, not a political party endorsement.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
