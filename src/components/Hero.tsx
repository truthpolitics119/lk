import React, { useEffect, useState } from "react";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Sri Lankan Flag inspired background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #8B0000 0%, #8B0000 45%, #DAA520 45%, #DAA520 55%, #006400 55%, #006400 100%)",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated flag stripes overlay */}
      <div className="absolute inset-0 opacity-10">

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Sri Lanka Flag Colors Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-1 w-16 bg-[#8B0000] rounded" />
          <div className="h-1 w-6 bg-[#DAA520] rounded" />
          <div className="h-1 w-6 bg-[#FF8C00] rounded" />
          <div className="h-1 w-6 bg-[#006400] rounded" />
          <div className="h-1 w-16 bg-[#8B0000] rounded" />
        </div>

        <div className="inline-flex items-center gap-2 bg-[#DAA520]/20 border border-[#DAA520]/50 rounded-full px-4 py-2 mb-6">
          <LucideIcon name="ShieldCheck" size={16} className="text-[#DAA520]" />
          <span className="text-[#DAA520] text-sm font-semibold tracking-widest uppercase">{t("site.title")}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
          NPP / JVP
          <span className="block text-[#DAA520]">{t("nav.government")}</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mt-2">
            {t("site.tagline")}
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          {t("site.description")}
        </p>

        {/* Quick stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-4xl mx-auto">
          {[
            { num: "8", labelKey: "nav.broken_promises", icon: "XCircle" },
            { num: "6+", labelKey: "nav.scandals", icon: "AlertTriangle" },
            { num: "34%", labelKey: "nav.vote_share_drop", icon: "TrendingDown" },
            { num: "60,000+", labelKey: "nav.lives_lost", icon: "Skull" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-3 flex flex-col items-center">
              <LucideIcon name={stat.icon} size={20} className="text-[#DAA520] mb-2" />
              <div className="text-2xl md:text-3xl font-black text-[#DAA520]">{stat.num}</div>
              <div className="text-xs text-gray-300 mt-1">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#promises"
            className="bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/50 flex items-center gap-2"
          >
            <LucideIcon name="XCircle" size={18} /> {t("cta.see_promises")}
          </a>
          <a
            href="#scandals"
            className="bg-[#DAA520] hover:bg-[#B8860B] text-black font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-900/50 flex items-center gap-2"
          >
            <LucideIcon name="Search" size={18} /> {t("cta.explore_scandals")}
          </a>
          <a
            href="#timeline"
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <LucideIcon name="Calendar" size={18} /> {t("cta.view_timeline")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[24px] h-[40px] border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-[#DAA520] rounded-full animate-scroll" />
        </div>
        <LucideIcon name="ChevronDown" size={16} className="text-white/20 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
