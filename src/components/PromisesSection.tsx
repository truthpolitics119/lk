import React, { useState } from "react";
import { promises } from "../data/nppData";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

const PromisesSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { t, language } = useTranslation();

  return (
    <section id="promises" className="py-20 bg-[#0d0000] relative">
      {/* Decorative top border */}
      <div className="h-1 absolute top-0 left-0 right-0 flex">
        <div className="flex-1 bg-[#8B0000]" />
        <div className="w-20 bg-[#DAA520]" />
        <div className="w-20 bg-[#FF8C00]" />
        <div className="flex-1 bg-[#006400]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#8B0000]/30 border border-[#8B0000]/50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#8B0000] rounded-full animate-pulse" />
            <span className="text-[#FF6B6B] text-sm font-semibold uppercase tracking-widest">Section 1</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {language === "si" ? (
              <>බිඳ දැමූ <span className="text-[#DAA520]">පොරොන්දු</span></>
            ) : (
              <>{t("nav.broken_promises").split(" ")[0]} <span className="text-[#DAA520]">{t("nav.broken_promises").split(" ").slice(1).join(" ")}</span></>
            )}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("promises.intro")}
          </p>
        </div>

        {/* Summary banner */}
        <div className="bg-gradient-to-r from-[#8B0000]/40 to-[#4a0000]/40 border border-[#8B0000]/50 rounded-2xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-[#8B0000]/20 p-4 rounded-full border border-[#8B0000]/50">
              <LucideIcon name="XCircle" size={48} className="text-[#FF6B6B]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{t("promises.broken_8_out_of_8")}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("promises.broken_8_out_of_8_detail")}
              </p>
            </div>
            <div className="bg-[#8B0000] rounded-xl px-6 py-3 text-center flex-shrink-0">
              <div className="text-3xl font-black text-white">0/8</div>
              <div className="text-[#FF9999] text-xs">Kept</div>
            </div>
          </div>
        </div>

        {/* Promise cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {promises.map((promise) => (
            <div
              key={promise.id}
              className="group bg-[#1a0505] border border-[#3a1010] hover:border-[#8B0000]/60 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => setExpanded(expanded === promise.id ? null : promise.id)}
            >
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000]/20 rounded-xl flex items-center justify-center border border-[#8B0000]/30 group-hover:border-[#8B0000]/60 transition-all">
                    <LucideIcon name={promise.icon} size={24} className="text-[#FF6B6B]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[#8B0000]/40 text-[#FF6B6B] text-xs font-bold px-2 py-0.5 rounded-full">
                        #{promise.id}
                      </span>
                      <span className="bg-red-900/30 text-red-400 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                        <LucideIcon name="X" size={10} /> {t("nav.broken_promises").split(" ")[0]}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{t(`promise.${promise.translationKey}.title`)}</h3>

                    {/* Promised */}
                    <div className="bg-[#006400]/20 border border-[#006400]/40 rounded-lg p-3 mb-2">
                      <div className="text-[#4CAF50] text-xs font-bold uppercase mb-1 flex items-center gap-1.5">
                        <LucideIcon name="CheckCircle2" size={12} /> {t("promises.col_promised")}:
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{t(`promise.${promise.translationKey}.detail`)}</p>
                    </div>

                    {/* Reality */}
                    <div className={`bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-lg p-3 transition-all duration-300 ${expanded === promise.id ? "block" : "hidden md:block"}`}>
                      <div className="text-[#FF6B6B] text-xs font-bold uppercase mb-1 flex items-center gap-1.5">
                        <LucideIcon name="AlertCircle" size={12} /> {t("promises.col_reality")}:
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{t(`promise.${promise.translationKey}.reality`)}</p>
                    </div>

                    {/* Mobile: toggle button */}
                    <button className="md:hidden text-[#DAA520] text-xs mt-2 font-medium flex items-center gap-1">
                      {expanded === promise.id ? (
                        <><LucideIcon name="ChevronUp" size={12} /> Hide reality</>
                      ) : (
                        <><LucideIcon name="ChevronDown" size={12} /> See what really happened</>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-0.5 bg-gradient-to-r from-[#8B0000] via-[#DAA520] to-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* IMF quote callout */}
        <div className="mt-10 bg-[#1a0505] border-l-4 border-[#DAA520] rounded-xl p-6">
          <p className="text-gray-300 italic text-lg leading-relaxed">
            {t("quote.promises")}
          </p>
          <p className="text-[#DAA520] font-semibold mt-3 text-sm">{t("quote.attribution")}</p>
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;
