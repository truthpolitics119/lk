import React from "react";
import LucideIcon from "./LucideIcon";

const IdeologySection: React.FC = () => {
  const contradictions = [
    {
      claim: "We are Marxist-Leninists fighting capitalism",
      reality: "Ministers own millions in crypto, stocks, and commercial property",
      claimIcon: "Hammer",
      realityIcon: "TrendingUp",
    },
    {
      claim: "We will renegotiate the IMF agreement — no austerity",
      reality: "Full IMF compliance. Not a single renegotiation attempted.",
      claimIcon: "Hand",
      realityIcon: "Building2",
    },
    {
      claim: "We champion the working class and will raise salaries 25%",
      reality: "8,250 rupees over 3 years. Overtime and allowances cut.",
      claimIcon: "HardHat",
      realityIcon: "Scissors",
    },
    {
      claim: "We stand for press freedom and democracy",
      reality: "Emergency regulations used to criminalize social media critics",
      claimIcon: "Newspaper",
      realityIcon: "Lock",
    },
    {
      claim: "We are outsiders who will clean up corruption",
      reality: "Protected corrupt ministers with parliamentary majority votes",
      claimIcon: "Eraser",
      realityIcon: "ShieldCheck",
    },
    {
      claim: "We will stop privatization of state enterprises",
      reality: "State Holding Company proposed to restructure 400+ SOEs",
      claimIcon: "Factory",
      realityIcon: "Briefcase",
    },
  ];

  const ideologyPhases = [
    {
      phase: "1965–1989",
      ideology: "Marxist-Leninist Revolutionary",
      description: "Anti-imperialism, economic self-sufficiency, abolition of private property, socialist state through armed revolution",
      icon: "Hammer",
      color: "#8B0000",
    },
    {
      phase: "1994–2019",
      ideology: "Parliamentary Left",
      description: "Gradual moderation. Kept Marxist rhetoric but began integrating into the democratic establishment. Joined UPFA coalition in 2004.",
      icon: "Landmark",
      color: "#4682B4",
    },
    {
      phase: "2020–Today",
      ideology: "Neoliberal Populism",
      description: "Courts foreign investors, upholds IMF framework, ministers hold crypto and equity portfolios, continues VAT hikes, pro-austerity in practice.",
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
          <div className="inline-flex items-center gap-2 bg-[#DAA520]/20 border border-[#DAA520]/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#DAA520] rounded-full animate-pulse" />
            <span className="text-[#DAA520] text-sm font-semibold uppercase tracking-widest">Section 7</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Ideological <span className="text-[#DAA520]">Hypocrisy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From Marxist-Leninist communists to capitalist practitioners — the JVP's extraordinary ideological transformation, and the contradiction between their words and actions.
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
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: phase.color + "30", border: `2px solid ${phase.color}` }}
                  >
                    <LucideIcon name={phase.icon} size={24} style={{ color: phase.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: phase.color }}>{phase.phase}</div>
                    <h3 className="text-white font-bold text-sm">{phase.ideology}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center">
                  <LucideIcon name="MoveRight" size={16} className="text-[#DAA520]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* What they said vs. what they do */}
        <h3 className="text-white font-bold text-xl mb-5 text-center">
          What They <span className="text-[#4CAF50]">Said</span> vs. What They <span className="text-[#FF6B6B]">Did</span>
        </h3>

        <div className="space-y-3 mb-10">
          {contradictions.map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Claim */}
              <div className="bg-[#0d1a0d] border border-[#006400]/50 rounded-xl p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-black/40 rounded-lg flex items-center justify-center border border-[#006400]/20 flex-shrink-0">
                  <LucideIcon name={item.claimIcon} size={20} className="text-[#4CAF50]" />
                </div>
                <div>
                  <div className="text-[#4CAF50] text-xs font-bold uppercase mb-1">✓ They Claimed:</div>
                  <p className="text-gray-300 text-sm italic">"{item.claim}"</p>
                </div>
              </div>
              {/* Reality */}
              <div className="bg-[#1a0505] border border-[#8B0000]/50 rounded-xl p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-black/40 rounded-lg flex items-center justify-center border border-[#8B0000]/20 flex-shrink-0">
                  <LucideIcon name={item.realityIcon} size={20} className="text-[#FF6B6B]" />
                </div>
                <div>
                  <div className="text-[#FF6B6B] text-xs font-bold uppercase mb-1">✗ The Reality:</div>
                  <p className="text-gray-300 text-sm">{item.reality}</p>
                </div>
              </div>
            </div>
          ))}
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
