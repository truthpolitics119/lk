import React, { useEffect, useState } from "react";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

const sections = [
  { id: "promises", labelKey: "nav.broken_promises" },
  { id: "scandals", labelKey: "nav.scandals" },
  { id: "ministers", labelKey: "nav.government" },
  { id: "statistics", labelKey: "nav.data_stats" },
  { id: "timeline", labelKey: "nav.timeline" },
  { id: "history", labelKey: "nav.lives_lost" },
  { id: "ideology", labelKey: "nav.verdict" },
];

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const ids = sections.map((s) => s.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "si" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a0000]/95 backdrop-blur shadow-xl shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-6 bg-[#8B0000] rounded-sm" />
            <div className="w-1.5 h-6 bg-[#DAA520] rounded-sm" />
            <div className="w-1.5 h-6 bg-[#FF8C00] rounded-sm" />
            <div className="w-3 h-6 bg-[#006400] rounded-sm" />
          </div>
          <span className="text-white font-bold text-sm ml-1 hidden sm:block">{t("site.title")}</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                active === s.id
                  ? "bg-[#DAA520] text-black"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {t(s.labelKey)}
            </button>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white hover:bg-white/20 transition-all flex items-center gap-2 border border-white/20"
          >
            <LucideIcon name="Languages" size={14} />
            {language === "en" ? "සිංහල" : "English"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-md text-[10px] font-bold bg-white/10 text-white border border-white/20"
          >
            {language === "en" ? "සිංහල" : "EN"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2"
          >
            <LucideIcon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a0000]/98 border-t border-white/10 px-4 py-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`block w-full text-left px-3 py-2 rounded text-sm font-medium transition-colors ${
                active === s.id ? "text-[#DAA520]" : "text-gray-300 hover:text-white"
              }`}
            >
              {t(s.labelKey)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
