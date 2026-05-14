import React, { useState } from "react";
import { scandals } from "../data/nppData";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

const severityColor: Record<string, string> = {
  critical: "#8B0000",
  high: "#B8860B",
  medium: "#8B4513",
};

const severityIcon: Record<string, string> = {
  critical: "AlertCircle",
  high: "AlertTriangle",
  medium: "Info",
};

const ScandalsSection: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const { t } = useTranslation();

  const severityLabel: Record<string, string> = {
    critical: t("scandals.risk.critical"),
    high: t("scandals.risk.high"),
    medium: t("scandals.risk.medium"),
  };

  const scandal = scandals[selected];

  return (
    <section id="scandals" className="py-20 bg-[#0a0500] relative">
      <div className="h-1 absolute top-0 left-0 right-0 flex">
        <div className="flex-1 bg-[#8B0000]" />
        <div className="w-20 bg-[#DAA520]" />
        <div className="w-20 bg-[#FF8C00]" />
        <div className="flex-1 bg-[#006400]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#8B0000]/30 border border-[#8B0000]/50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#FF4444] rounded-full animate-pulse" />
            <span className="text-[#FF6B6B] text-sm font-semibold uppercase tracking-widest">Section 2</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t("scandals.heading").split(" ")[0]} <span className="text-[#DAA520]">{t("scandals.heading").split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("scandals.intro")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Scandal selector */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {scandals.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setSelected(i)}
                className={`text-left rounded-xl p-4 border transition-all duration-300 ${
                  selected === i
                    ? "bg-[#8B0000]/30 border-[#8B0000] shadow-lg shadow-red-900/30"
                    : "bg-[#1a0a00] border-[#2a1500] hover:border-[#8B0000]/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-black/40 rounded-lg flex items-center justify-center border border-white/10">
                    <LucideIcon name={s.icon} size={20} className="text-[#DAA520]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                        style={{ backgroundColor: severityColor[s.severity] + "30", color: severityColor[s.severity] === "#8B0000" ? "#FF6B6B" : "#FFD700" }}
                      >
                        <LucideIcon name={severityIcon[s.severity]} size={10} />
                        {severityLabel[s.severity]}
                      </span>
                      <span className="text-gray-500 text-[10px]">{s.date}</span>
                    </div>
                    <h3 className="text-white font-bold text-sm truncate">{t(`scandal.${s.translationKey}.title`)}</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{t(`scandal.${s.translationKey}.subtitle`)}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Scandal detail */}
          <div className="lg:w-2/3">
            <div className="bg-[#1a0a00] border border-[#3a1500] rounded-2xl overflow-hidden h-full">
              {/* Header */}
              <div
                className="p-6 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${scandal.color}40 0%, transparent 100%)` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
                    <LucideIcon name={scandal.icon} size={32} className="text-[#DAA520]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5"
                        style={{ backgroundColor: scandal.color + "40", color: scandal.severity === "critical" ? "#FF6B6B" : "#FFD700" }}
                      >
                        <LucideIcon name={severityIcon[scandal.severity]} size={12} />
                        {severityLabel[scandal.severity]}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1.5">
                        <LucideIcon name="Calendar" size={14} /> {scandal.date}
                      </span>
                    </div>
                    <h3 className="text-white font-black text-2xl mb-1">{t(`scandal.${scandal.translationKey}.title`)}</h3>
                    <p className="text-[#DAA520] font-semibold text-sm">{t(`scandal.${scandal.translationKey}.subtitle`)}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Summary */}
                <div className="bg-[#0d0500] rounded-xl p-4 mb-5 border-l-4 border-[#DAA520]">
                  <p className="text-gray-300 leading-relaxed">{t(`scandal.${scandal.translationKey}.body`)}</p>
                </div>

                {/* Key findings */}
                <h4 className="text-[#DAA520] font-bold text-sm uppercase tracking-wider mb-3">{t("scandals.key_findings")}</h4>
                <ul className="space-y-3">
                  {[1, 2, 3, 4, 5].map((idx) => {
                    const key = `scandal.${scandal.translationKey}.finding${idx}`;
                    const translated = t(key);
                    if (translated === key) return null;
                    return (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#8B0000]/40 border border-[#8B0000]/60 rounded-full flex items-center justify-center text-[#FF6B6B] text-xs font-bold mt-0.5">
                          {idx}
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed">{translated}</p>
                      </li>
                    );
                  })}
                </ul>

                {/* Hypocrisy callout */}
                <div className="mt-5 bg-gradient-to-r from-[#8B0000]/20 to-transparent border border-[#8B0000]/30 rounded-xl p-4">
                  <p className="text-gray-400 text-xs italic flex items-start gap-2">
                    <LucideIcon name="AlertTriangle" size={14} className="text-[#FF6B6B] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-[#FF6B6B]">{t("scandals.note")}:</strong> {t(`scandal.${scandal.translationKey}.note`)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Anti-corruption is performative quote */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#1a0a00] border-l-4 border-[#DAA520] rounded-xl p-5">
            <p className="text-gray-300 italic leading-relaxed">
              {t("scandals.quote1")}
            </p>
            <p className="text-[#DAA520] font-semibold mt-3 text-xs">{t("scandals.quote1_attribution")}</p>
          </div>
          <div className="bg-[#1a0a00] border-l-4 border-[#8B0000] rounded-xl p-5">
            <p className="text-gray-300 italic leading-relaxed">
              {t("scandals.quote2")}
            </p>
            <p className="text-[#FF6B6B] font-semibold mt-3 text-xs">{t("scandals.quote2_attribution")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScandalsSection;
