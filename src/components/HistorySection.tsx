import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { insurrectionCosts } from "../data/nppData";
import LucideIcon from "./LucideIcon";

const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-[#0a0000] relative">
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
            <span className="text-[#FF6B6B] text-sm font-semibold uppercase tracking-widest">Section 6</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            The JVP's <span className="text-[#8B0000]">Violent History</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Before becoming a parliamentary party, the JVP conducted two bloody armed insurrections that killed tens of thousands and devastated Sri Lanka's economy.
          </p>
        </div>

        {/* Two insurrections side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* 1971 */}
          <div className="bg-gradient-to-br from-[#1a0000] to-[#0d0000] border border-[#8B0000]/50 rounded-2xl overflow-hidden">
            <div className="bg-[#8B0000]/30 p-5 border-b border-[#8B0000]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-red-900/30">
                  <LucideIcon name="Flame" size={28} className="text-[#FF4444]" />
                </div>
                <div>
                  <div className="text-[#FF6B6B] text-xs font-bold uppercase tracking-wider">First Insurrection</div>
                  <h3 className="text-white font-black text-2xl">1971 Uprising</h3>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#8B0000]/40 rounded-xl p-3 text-center flex-1">
                  <div className="text-2xl font-black text-[#FF6B6B]">~5,000</div>
                  <div className="text-gray-400 text-xs">Lives Lost</div>
                </div>
                <div className="bg-[#8B0000]/40 rounded-xl p-3 text-center flex-1">
                  <div className="text-2xl font-black text-[#FF6B6B]">2 months</div>
                  <div className="text-gray-400 text-xs">Duration</div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {[
                  "Began April 5, 1971 — against PM Sirimavo Bandaranaike's government",
                  "JVP insurgents held towns and rural areas for several weeks",
                  "Suppressed with international military support",
                  "Devastated the rural economy of Sri Lanka",
                  "JVP leader Rohana Wijeweera imprisoned",
                  "Mass arrests of thousands of young people",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#FF4444] mt-0.5 flex-shrink-0">
                      <LucideIcon name="ChevronsRight" size={14} />
                    </span>
                    <span className="text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 1987-1989 */}
          <div className="bg-gradient-to-br from-[#1a0000] to-[#0d0000] border border-[#8B0000] rounded-2xl overflow-hidden">
            <div className="bg-[#8B0000]/50 p-5 border-b border-[#8B0000]/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-red-900/30">
                  <LucideIcon name="Skull" size={28} className="text-[#FF4444]" />
                </div>
                <div>
                  <div className="text-[#FF4444] text-xs font-bold uppercase tracking-wider">Second Insurrection — Far Deadlier</div>
                  <h3 className="text-white font-black text-2xl">1987–1989 Uprising</h3>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#8B0000]/60 rounded-xl p-3 text-center flex-1">
                  <div className="text-2xl font-black text-[#FF4444]">~60,000</div>
                  <div className="text-gray-400 text-xs">Extrajudicial Killings</div>
                </div>
                <div className="bg-[#8B0000]/60 rounded-xl p-3 text-center flex-1">
                  <div className="text-2xl font-black text-[#FF4444]">3 years</div>
                  <div className="text-gray-400 text-xs">Country Paralyzed</div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {[
                  "Launched against the Indo-Sri Lanka Peace Accord (1987)",
                  "JVP resorted to assassinations, raids, and attacks on civilian targets",
                  "Country paralyzed by violently enforced general strikes (hartals) for 3 years",
                  "Exploited Sinhalese nationalist sentiment against Indian IPKF",
                  "Most JVP leaders including Rohana Wijeweera extrajudicially executed (1989)",
                  "Development, investment, and rural enterprises came to a standstill",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#FF0000] mt-0.5 flex-shrink-0">
                      <LucideIcon name="ChevronsRight" size={14} />
                    </span>
                    <span className="text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Economic Cost chart */}
        <div className="bg-[#1a0505] border border-[#3a1010] rounded-2xl p-6 mb-8">
          <h3 className="text-white font-bold text-lg mb-1">Economic Cost to Sri Lanka — Major Conflicts</h3>
          <p className="text-gray-500 text-xs mb-5">Estimated direct & indirect costs in USD Billion — borne by Sri Lankan taxpayers</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={insurrectionCosts}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a0505" />
              <XAxis
                dataKey="conflict"
                stroke="#555"
                tick={{ fill: "#888", fontSize: 9 }}
                interval={0}
                height={60}
                tickFormatter={(v) => v.length > 20 ? v.substring(0, 20) + "…" : v}
              />
              <YAxis stroke="#555" tick={{ fill: "#888", fontSize: 11 }} tickFormatter={(v) => `$${v}B`} />
              <Tooltip
                contentStyle={{ background: "#1a0505", border: "1px solid #8B0000", borderRadius: "8px" }}
                labelStyle={{ color: "#fff", fontSize: "11px" }}
                formatter={(v: any) => [`$${v}B estimated cost`, "Economic Impact"]}
              />
              <Bar dataKey="cost" radius={[6, 6, 0, 0]}>
                {insurrectionCosts.map((_, i) => (
                  <Cell key={i} fill={i < 2 ? "#8B0000" : "#4682B4"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-gray-500 text-xs mt-2 text-center">* JVP conflict costs are estimates based on aggregate economic research. LTTE war cost is widely cited. All borne by Sri Lankan taxpayers.</p>
        </div>

        {/* Death toll visualization */}
        <div className="bg-[#1a0505] border border-[#8B0000]/30 rounded-2xl p-6 mb-8">
          <h3 className="text-white font-bold text-lg mb-1">Human Cost Comparison</h3>
          <p className="text-gray-500 text-xs mb-5">Deaths associated with each conflict (estimated)</p>
          <div className="space-y-4">
            {insurrectionCosts.map((item, i) => {
              const maxDeaths = 100000;
              const width = Math.min(100, (item.deaths / maxDeaths) * 100);
              const colors = ["#8B0000", "#FF4444", "#4682B4", "#B8860B"];
              return (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-gray-300 text-sm">{item.conflict}</span>
                    <span className="font-bold text-sm" style={{ color: colors[i] }}>
                      {item.deaths.toLocaleString()} lives
                    </span>
                  </div>
                  <div className="h-6 bg-[#0d0000] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
                      style={{ width: `${width}%`, backgroundColor: colors[i] }}
                    >
                      <span className="text-white text-xs font-bold">{item.deaths.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key quote */}
        <div className="bg-[#1a0000] border-l-4 border-[#8B0000] rounded-xl p-5 mb-6">
          <p className="text-gray-300 italic text-lg leading-relaxed">
            "The JVP insurrections ate into the fabric of rural life. The development of enterprises and investment came to a standstill. Today, the JVP has changed its tune, but it is all a wolf in sheep's clothing!"
          </p>
          <p className="text-[#FF6B6B] font-semibold mt-3 text-sm">— Sri Lanka Economic History Research, cited sources</p>
        </div>

        <div className="bg-[#1a0000] border-l-4 border-[#DAA520] rounded-xl p-5">
          <p className="text-gray-300 italic leading-relaxed">
            "The JVP has a history of stifling dissent; old habits are said to die hard. In the past, it relied on mindless violence, but it now appears to be using Emergency regulations to achieve the same end under the pretext of controlling errant social media activists."
          </p>
          <p className="text-[#DAA520] font-semibold mt-3 text-sm">— The Island (Sri Lanka), 2025</p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
