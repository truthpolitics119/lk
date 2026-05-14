import React from "react";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

const IdeologySection: React.FC = () => {
  const { t } = useTranslation();

  const contradictions = [
    {
      translationKey: "marxism",
      claimIcon: "Hammer",
      realityIcon: "TrendingUp",
    },
    {
      translationKey: "imf",
      claimIcon: "Hand",
      realityIcon: "Building2",
    },
    {
      translationKey: "salary",
      claimIcon: "HardHat",
      realityIcon: "Scissors",
    },
    {
      translationKey: "press",
      claimIcon: "Newspaper",
      realityIcon: "Lock",
    },
    {
      translationKey: "corruption",
      claimIcon: "Eraser",
      realityIcon: "ShieldCheck",
    },
    {
      translationKey: "privatisation",
      claimIcon: "Factory",
      realityIcon: "Briefcase",
    },
  ];

  const ideologyPhases = [
    {
      phase: "1965–1989",
      translationKey: "phase1",
      icon: "Hammer",
      color: "#8B0000",
    },
    {
      phase: "1994–2019",
      translationKey: "phase2",
      icon: "Landmark",
      color: "#4682B4",
    },
    {
      phase: "2020–Today",
      translationKey: "phase3",
      icon: "Coins",
      color: "#DAA520",
    },
  ];

  return (
    <section id="ideology" className="py-20 bg-[#080808] relative">
      <div className="h-1 absolute top-0 left-0 right-0 flex">
        <div className="flex-1 bg-[#8B0000]" />
        <div className="w-20 bg-[#DAA520]" />
        <div className="w-20 bg-[#FF8C00]" />
        <div className="flex-1 bg-[#006400]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#DAA520]/20 border border-[#DAA520]/50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#DAA520] rounded-full animate-pulse" />
            <span className="text-[#DAA520] text-sm font-semibold uppercase tracking-widest">Section 7</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t("ideology.heading").split(" ")[0]} <span className="text-[#DAA520]">{t("ideology.heading").split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("ideology.intro")}
          </p>
        </div>

        {/* Ideology evolution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {ideologyPhases.map((phase, i) => (
            <div key={i} className="relative">
              <div
                className="bg-[#111] border rounded-2xl p-5 h-full"
                style={{ borderColor: phase.color + "60" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center border"
                    style={{ backgroundColor: phase.color + "20", borderColor: phase.color + "50" }}
                  >
                    <LucideIcon name={phase.icon} size={20} style={{ color: phase.color }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: phase.color }}>{phase.phase}</div>
                    <h3 className="text-white font-bold text-sm">{t(`ideology.${phase.translationKey}.label`)}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {t(`ideology.${phase.translationKey}.body`)}
                </p>
              </div>
              {i < 2 && (
                <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-gray-700">
                  <LucideIcon name="ChevronRight" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Claim vs Reality table */}
        <div className="bg-[#111] border border-[#2a2a2a] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-black/40 border-b border-[#2a2a2a]">
            <div className="p-4 flex items-center gap-2 border-b md:border-b-0 md:border-r border-[#2a2a2a]">
              <LucideIcon name="MessageSquare" size={18} className="text-[#DAA520]" />
              <span className="text-[#DAA520] font-black uppercase tracking-widest text-xs">{t("ideology.claimed")}</span>
            </div>
            <div className="p-4 flex items-center gap-2">
              <LucideIcon name="ShieldAlert" size={18} className="text-[#8B0000]" />
              <span className="text-[#8B0000] font-black uppercase tracking-widest text-xs">{t("ideology.reality")}</span>
            </div>
          </div>

          <div className="divide-y divide-[#2a2a2a]">
            {contradictions.map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 group hover:bg-white/[0.02] transition-colors">
                <div className="p-5 border-b md:border-b-0 md:border-r border-[#2a2a2a] flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#DAA520]/10 flex items-center justify-center shrink-0">
                    <LucideIcon name={item.claimIcon} size={16} className="text-[#DAA520]" />
                  </div>
                  <p className="text-gray-300 text-sm italic">"{t(`hypo.${item.translationKey}.claim`)}"</p>
                </div>
                <div className="p-5 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#8B0000]/10 flex items-center justify-center shrink-0">
                    <LucideIcon name={item.realityIcon} size={16} className="text-[#8B0000]" />
                  </div>
                  <p className="text-white text-sm font-medium">{t(`hypo.${item.translationKey}.reality`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suppression of dissent */}
        <div className="bg-gradient-to-br from-[#1a0000] to-[#0d0000] border border-[#8B0000]/50 rounded-2xl p-6 mb-6">
          <h3 className="text-white font-bold text-xl mb-5">Authoritarian Tendencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Emergency Powers Against Critics",
                desc: "Used emergency regulations against social media users criticizing Cyclone Ditwah response",
                icon: "Smartphone",
              },
              {
                title: "Auditor General Vacancy",
                desc: "Left the Auditor General position vacant for ~10 months until a more 'pliable' candidate was approved",
                icon: "Landmark",
              },
              {
                title: "Council Control Without Majority",
                desc: "Attempted to control local councils without winning outright majorities — called 'tarnishing good governance'",
                icon: "Vote",
              },
              {
                title: "AG Social Media Attacks",
                desc: "Tacitly supported social media brigade attacks against the Attorney General",
                icon: "Scale",
              },
              {
                title: "Media Freedom Threats",
                desc: "SLWJA documented multiple incidents threatening media freedom over 15 months",
                icon: "Newspaper",
              },
              {
                title: "NCM Defeated by Steamroller",
                desc: "Used parliamentary supermajority to defeat No-Confidence Motion against Energy Minister amid coal fraud",
                icon: "Hammer",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0d0000] border border-[#8B0000]/30 rounded-xl p-4">
                <div className="w-10 h-10 bg-black/40 rounded-lg flex items-center justify-center border border-[#8B0000]/20 mb-3">
                  <LucideIcon name={item.icon} size={20} className="text-[#FF6B6B]" />
                </div>
                <h4 className="text-[#FF6B6B] font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final quote */}
        <div className="bg-[#111] border border-[#DAA520]/30 rounded-2xl p-6 text-center">
          <div className="w-20 h-20 bg-black/40 rounded-full flex items-center justify-center border border-[#DAA520]/30 mx-auto mb-6">
            <LucideIcon name="Map" size={40} className="text-[#DAA520]" />
          </div>
          <h3 className="text-[#DAA520] font-black text-2xl mb-3">The Wolf in Sheep's Clothing</h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
            "The movement's founding ideology rested on anti-imperialism, economic self-sufficiency, independence from Cold War superpowers, a commitment to incorruptibility, and a vision of national unity under socialist governance. Yet today, the NPP proudly courts foreign investors, upholds the IMF framework, and its ministers hold cryptocurrency and equity portfolios."
          </p>
          <p className="text-gray-500 text-sm mt-4">— Documented ideological record vs. current government practice</p>
        </div>
      </div>
    </section>
  );
};

export default IdeologySection;
