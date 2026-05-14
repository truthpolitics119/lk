import React, { useEffect, useRef, useState } from "react";
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie, Legend, AreaChart, Area
} from "recharts";
import { povertyData, vatData, voteShareData, localElectionData, economicComparison, keyStats } from "../data/nppData";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

function StatCard({ stat }: { stat: typeof keyStats[0] }) {
  const { t } = useTranslation();
  return (
    <div
      className="bg-[#1a0505] border border-[#3a1010] rounded-2xl p-5 flex flex-col items-center text-center hover:border-[#8B0000]/60 transition-all duration-300 group"
    >
      <div className="bg-[#8B0000]/20 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 border border-[#8B0000]/30">
        <LucideIcon name={stat.icon} size={24} className="text-[#FF6B6B]" />
      </div>
      <div className="text-2xl md:text-3xl font-black mb-1" style={{ color: stat.color === "#8B0000" ? "#FF6B6B" : "#DAA520" }}>
        {stat.value}
      </div>
      <div className="text-gray-400 text-xs leading-tight">{t(`stats.${stat.translationKey}`)}</div>
    </div>
  );
}

const StatisticsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pieColors = ["#8B0000", "#B8860B", "#4682B4", "#228B22", "#808080"];

  return (
    <section id="statistics" ref={sectionRef} className="py-20 bg-[#080808] relative">
      <div className="h-1 absolute top-0 left-0 right-0 flex">
        <div className="flex-1 bg-[#8B0000]" />
        <div className="w-20 bg-[#DAA520]" />
        <div className="w-20 bg-[#FF8C00]" />
        <div className="flex-1 bg-[#006400]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#8B0000]/30 border border-[#8B0000]/50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#DAA520] rounded-full animate-pulse" />
            <span className="text-[#DAA520] text-sm font-semibold uppercase tracking-widest">Section 4</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t("stats.heading").split("&")[0]} & <span className="text-[#DAA520]">{t("stats.heading").split("&")[1]?.trim() || t("stats.heading").split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("stats.intro")}
          </p>
        </div>

        {/* Key stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {keyStats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>

        {/* Charts row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Poverty chart */}
          <div className="bg-[#1a0505] border border-[#3a1010] rounded-2xl p-5">
            <h3 className="text-white font-bold text-base mb-1">{t("stats.poverty_food_heading")}</h3>
            <p className="text-gray-500 text-xs mb-4">{t("stats.stats_wb_undp")}</p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={povertyData}>
                <defs>
                  <linearGradient id="povertyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B0000" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#8B0000" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="foodGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#DAA520" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#DAA520" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a0505" />
                <XAxis dataKey="year" stroke="#555" tick={{ fill: "#888", fontSize: 11 }} />
                <YAxis stroke="#555" tick={{ fill: "#888", fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                <Tooltip contentStyle={{ background: "#1a0505", border: "1px solid #8B0000", borderRadius: "8px" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#DAA520" }} />
                <Area type="monotone" dataKey="poverty" name={t("chart.poverty_rate")} stroke="#FF4444" fill="url(#povertyGrad)" strokeWidth={2.5} dot={{ fill: "#FF4444", r: 4 }} />
                <Area type="monotone" dataKey="food_insecurity" name={t("chart.food_insecurity")} stroke="#DAA520" fill="url(#foodGrad)" strokeWidth={2} dot={{ fill: "#DAA520", r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-[#FF4444] inline-block" /> {t("chart.poverty_rate")}</span>
              <span className="flex items-center gap-1 text-gray-400"><span className="w-3 h-0.5 bg-[#DAA520] inline-block" /> {t("chart.food_insecurity")}</span>
            </div>
            <div className="mt-3 bg-[#8B0000]/20 rounded-lg p-2">
              <p className="text-[#FF6B6B] text-xs">⚠️ {t("stats.poverty_doubled")}</p>
            </div>
          </div>

          {/* VAT chart */}
          <div className="bg-[#1a1500] border border-[#3a2500] rounded-2xl p-5">
            <h3 className="text-white font-bold text-base mb-1">{t("stats.vat_trajectory")}</h3>
            <p className="text-gray-500 text-xs mb-4">{t("stats.stats_revenue")}</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={vatData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2000" />
                <XAxis dataKey="year" stroke="#555" tick={{ fill: "#888", fontSize: 11 }} />
                <YAxis stroke="#555" tick={{ fill: "#888", fontSize: 11 }} tickFormatter={(v) => `${v}%`} domain={[0, 25]} />
                <Tooltip contentStyle={{ background: "#1a1500", border: "1px solid #DAA520", borderRadius: "8px" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#DAA520" }} />
                <Bar dataKey="vat" name={t("chart.vat_rate")} radius={[4, 4, 0, 0]}>
                  {vatData.map((entry, i) => (
                    <Cell key={i} fill={entry.vat >= 18 ? "#8B0000" : entry.vat >= 12 ? "#B8860B" : "#006400"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-3 bg-[#8B0000]/20 rounded-lg p-2">
              <p className="text-[#FF6B6B] text-xs">⚠️ {t("stats.vat_regressive")}</p>
            </div>
          </div>
        </div>

        {/* Charts row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Vote share collapse */}
          <div className="bg-[#1a0505] border border-[#3a1010] rounded-2xl p-5">
            <h3 className="text-white font-bold text-base mb-1">{t("stats.vote_collapse")}</h3>
            <p className="text-gray-500 text-xs mb-4">{t("stats.stats_elections")}</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={voteShareData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a0505" />
                <XAxis dataKey="label" stroke="#555" tick={{ fill: "#888", fontSize: 11 }} />
                <YAxis stroke="#555" tick={{ fill: "#888", fontSize: 11 }} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                <Tooltip
                  contentStyle={{ background: "#1a0505", border: "1px solid #8B0000", borderRadius: "8px" }}
                  labelStyle={{ color: "#fff" }}
                  formatter={(v: any) => [`${(v / 1000000).toFixed(2)} ${t("stats.m_votes")}`, t("stats.npp_votes")]}
                />
                <Bar dataKey="votes" name={t("stats.npp_votes")} radius={[6, 6, 0, 0]}>
                  {voteShareData.map((_entry, i) => (
                    <Cell key={i} fill={i === 2 ? "#8B0000" : i === 1 ? "#DAA520" : "#006400"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-3 bg-[#8B0000]/20 rounded-lg p-2">
              <p className="text-[#FF6B6B] text-xs">⚠️ {t("stats.vote_collapse_detail")}</p>
            </div>
          </div>

          {/* Local election pie */}
          <div className="bg-[#1a1500] border border-[#3a2500] rounded-2xl p-5">
            <h3 className="text-white font-bold text-base mb-1">{t("stats.local_councils")}</h3>
            <p className="text-gray-500 text-xs mb-4">{t("stats.local_councils_detail")}</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={localElectionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  dataKey="councils"
                  nameKey="party"
                  paddingAngle={2}
                >
                  {localElectionData.map((_entry, i) => (
                    <Cell key={i} fill={pieColors[i]} />
                  ))}
                </Pie>
                <Legend
                  formatter={(value, entry: any) => (
                    <span style={{ color: "#ccc", fontSize: "11px" }}>{value}: {entry.payload.councils}</span>
                  )}
                />
                <Tooltip contentStyle={{ background: "#1a1500", border: "1px solid #DAA520", borderRadius: "8px" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-3 bg-[#8B0000]/20 rounded-lg p-2">
              <p className="text-[#FF6B6B] text-xs">⚠️ {t("stats.council_control_warning")}</p>
            </div>
          </div>
        </div>

        {/* Promise vs Reality comparison */}
        <div className="bg-[#1a0505] border border-[#3a1010] rounded-2xl p-6">
          <h3 className="text-white font-bold text-lg mb-2">{t("stats.promises_reality")}</h3>
          <p className="text-gray-500 text-xs mb-6">{t("stats.chart_green")} | {t("stats.chart_red")}</p>
          <div className="space-y-5">
            {economicComparison.map((item, i) => {
              const promisedWidth = Math.min(100, Math.abs(item.promised) * 3);
              const actualWidth = Math.min(100, Math.abs(item.actual) * 3);
              const isNegative = item.actual < 0;
              return (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300 text-sm font-semibold">{t(`chart.${item.translationKey}`)}</span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-[#4CAF50]">{t("stats.chart_green").split("=")[1].trim()}: {item.promised}{item.unit}</span>
                      <span className={isNegative ? "text-[#FF6B6B]" : "text-[#FF4444]"}>
                        {t("stats.chart_red").split("=")[1].trim()}: {isNegative ? "" : ""}{item.actual}{item.unit}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <div className="flex-1 h-5 bg-[#0d0500] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#006400] rounded-full transition-all duration-1000"
                        style={{ width: visible ? `${promisedWidth}%` : "0%" }}
                      />
                    </div>
                    <div className="text-gray-600 text-xs">vs</div>
                    <div className="flex-1 h-5 bg-[#0d0500] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: visible ? `${actualWidth}%` : "0%",
                          backgroundColor: isNegative ? "#4682B4" : "#8B0000"
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* World bank poverty quote */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "24.5%", translationKey: "poverty", src: "World Bank 2024", color: "#FF6B6B" },
            { num: "26%", translationKey: "food", src: "UNDP 2024", color: "#DAA520" },
            { num: "38.5%", translationKey: "debt", src: "UNDP 2024", color: "#FF8C00" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#1a0505] border border-[#3a1010] rounded-xl p-4 text-center">
              <div className="text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.num}</div>
              <div className="text-white font-semibold text-sm">{t(`verdict.stat.${stat.translationKey}`)}</div>
              <div className="text-gray-500 text-xs mt-1">{t("stats.source_undp").split(":")[0]}: {stat.src}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
