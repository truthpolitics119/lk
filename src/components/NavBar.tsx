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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a0000]/95 backdrop-blur shadow-xl shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="NPP Record Logo" 
            className="w-10 h-auto rounded-md shadow-lg"
          />
          <span className="text-white font-bold text-sm ml-1 hidden sm:block">{t("site.title")}</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-3 py-2 text-xs font-bold transition-all duration-200 relative group ${
                active === s.id ? "text-[#DAA520]" : "text-gray-400 hover:text-white"
              }`}
            >
              {t(s.labelKey)}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#DAA520] transition-all duration-300 ${
                active === s.id ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
          ))}
          
          <div className="ml-6 flex items-center bg-black/40 rounded-lg p-1 border border-white/10">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-md text-[10px] font-black transition-all duration-300 ${
                language === "en" 
                  ? "bg-[#8B0000] text-white shadow-lg" 
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("si")}
              className={`px-3 py-1 rounded-md text-[10px] font-black transition-all duration-300 ${
                language === "si" 
                  ? "bg-[#8B0000] text-white shadow-lg" 
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              සිංහල
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center bg-white/5 rounded-lg p-0.5 border border-white/10">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded text-[10px] font-black transition-all ${
                language === "en" ? "bg-[#DAA520] text-black" : "text-gray-500"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("si")}
              className={`px-2 py-1 rounded text-[10px] font-black transition-all ${
                language === "si" ? "bg-[#DAA520] text-black" : "text-gray-500"
              }`}
            >
              සිංහල
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1"
          >
            <LucideIcon name={menuOpen ? "X" : "Menu"} size={22} />
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
