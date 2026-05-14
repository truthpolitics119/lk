import React, { useState } from "react";
import { jvpTimeline } from "../data/nppData";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

const typeConfig: Record<string, { bg: string; border: string; dot: string; text: string }> = {
  founding: { bg: "#0d1f0d", border: "#006400", dot: "#4CAF50", text: "#4CAF50" },
  violence: { bg: "#1a0000", border: "#8B0000", dot: "#FF4444", text: "#FF6B6B" },
  suppression: { bg: "#1a0d00", border: "#8B4513", dot: "#FF8C00", text: "#FF8C00" },
  political: { bg: "#0d0d1a", border: "#4682B4", dot: "#87CEEB", text: "#87CEEB" },
  victory: { bg: "#1a1500", border: "#DAA520", dot: "#FFD700", text: "#FFD700" },
  scandal: { bg: "#1a0000", border: "#8B0000", dot: "#FF0000", text: "#FF4444" },
};

const TimelineSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <section id="timeline" className="py-20 bg-[#060606] relative">
      <div className="h-1 absolute top-0 left-0 right-0 flex">
        <div className="flex-1 bg-[#8B0000]" />
        <div className="w-20 bg-[#DAA520]" />
        <div className="w-20 bg-[#FF8C00]" />
        <div className="flex-1 bg-[#006400]" />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#8B0000]/30 border border-[#8B0000]/50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#DAA520] rounded-full animate-pulse" />
            <span className="text-[#DAA520] text-sm font-semibold uppercase tracking-widest">Section 5</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t("timeline.heading").split(" ")[0]} / {t("timeline.heading").split(" ")[2]} <span className="text-[#DAA520]">{t("timeline.heading").split(" ").slice(3).join(" ")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("timeline.intro")}
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {Object.entries(typeConfig).map(([type, cfg]) => (
            <div key={type} className="flex items-center gap-1.5 text-xs">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cfg.dot }} />
              <span className="capitalize" style={{ color: cfg.text }}>{t(`timeline.tag.${type}`)}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B0000] via-[#DAA520] to-[#006400] -translate-x-1/2 hidden md:block" />

          <div className="space-y-6">
            {jvpTimeline.map((event, i) => {
              const cfg = typeConfig[event.type];
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${isLeft ? "md:flex-row-reverse" : ""}`}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div
                      className="rounded-2xl p-5 border transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundColor: hoveredIdx === i ? cfg.bg : "#111",
                        borderColor: hoveredIdx === i ? cfg.border : "#2a2a2a",
                        transform: hoveredIdx === i ? "scale(1.02)" : "scale(1)",
                        boxShadow: hoveredIdx === i ? `0 0 20px ${cfg.dot}20` : "none",
                      }}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <LucideIcon name={event.icon} size={20} style={{ color: cfg.dot }} />
                        <span
                          className="font-black text-lg"
                          style={{ color: cfg.dot }}
                        >
                          {event.year}
                        </span>
                        <span className="text-gray-500 text-[10px] capitalize border rounded-full px-2 py-0.5" style={{ borderColor: cfg.border, color: cfg.text }}>
                          {t(`timeline.tag.${event.type}`)}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-base mb-1">{t(`timeline_events.${event.translationKey}.title`)}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{t(`timeline_events.${event.translationKey}.body`)}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 items-center justify-center z-10"
                    style={{ borderColor: cfg.dot, backgroundColor: "#060606" }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cfg.dot }} />
                  </div>

                  {/* Empty side */}
                  <div className="hidden md:block flex-1" />

                  {/* Mobile left indicator */}
                  <div className="md:hidden flex-shrink-0 w-4 h-4 rounded-full border-2 mt-1" style={{ borderColor: cfg.dot, backgroundColor: cfg.bg }}>
                    <div className="w-1.5 h-1.5 rounded-full m-auto mt-0.5" style={{ backgroundColor: cfg.dot }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-12 bg-gradient-to-r from-[#8B0000]/20 via-[#DAA520]/10 to-[#006400]/20 border border-[#DAA520]/30 rounded-2xl p-6">
          <h3 className="text-white font-bold text-lg mb-3 text-center">The JVP's Fundamental Contradiction</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              { era: "1960s–1989", label: "Revolutionary Marxists", desc: "Armed insurrections, assassinations, enforced strikes, ~65,000+ killed", color: "#FF4444" },
              { era: "1994–2019", label: "Parliamentary Left", desc: "Gradual integration into Sri Lanka's mainstream democratic political establishment", color: "#87CEEB" },
              { era: "2020–Today", label: "Neoliberal Capitalists", desc: "IMF compliance, minister wealth revelations, privatization path, crypto investments", color: "#DAA520" },
            ].map((phase, i) => (
              <div key={i} className="bg-black/30 rounded-xl p-4">
                <div className="text-xs font-bold mb-1" style={{ color: phase.color }}>{phase.era}</div>
                <div className="text-white font-bold text-sm mb-2">{phase.label}</div>
                <div className="text-gray-400 text-xs">{phase.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
