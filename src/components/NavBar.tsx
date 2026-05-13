import React, { useEffect, useState } from "react";
import LucideIcon from "./LucideIcon";

const sections = [
  { id: "promises", label: "Promises" },
  { id: "scandals", label: "Scandals" },
  { id: "ministers", label: "Ministers" },
  { id: "statistics", label: "Statistics" },
  { id: "timeline", label: "Timeline" },
  { id: "history", label: "JVP History" },
  { id: "ideology", label: "Ideology" },
];

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="flex gap-1">
            <div className="w-3 h-6 bg-[#8B0000] rounded-sm" />
            <div className="w-1.5 h-6 bg-[#DAA520] rounded-sm" />
            <div className="w-1.5 h-6 bg-[#FF8C00] rounded-sm" />
            <div className="w-3 h-6 bg-[#006400] rounded-sm" />
          </div>
          <span className="text-white font-bold text-sm ml-1 hidden sm:block">NPP Truth Record</span>
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
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          <LucideIcon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
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
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
