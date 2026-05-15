import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { insurrectionCosts } from "../data/nppData";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

const HistorySection: React.FC = () => {
  const { t } = useTranslation();

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
            <span className="text-[#FF6B6B] text-sm font-semibold uppercase tracking-widest">{t("section.sn6")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t("history.heading").split("|")[0]} <span className="text-[#8B0000]">{t("history.heading").split("|")[1]}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("history.intro")}
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
                  <div className="text-[#FF6B6B] text-xs font-bold uppercase tracking-wider">{t("history.first_insurrection.title")}</div>
                  <h3 className="text-white font-black text-2xl">{t("history.first_insurrection.year")}</h3>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#8B0000]/40 rounded-xl p-3 text-center flex-1">
                  <div className="text-2xl font-black text-[#FF6B6B]">~5,000</div>
                  <div className="text-gray-400 text-xs">{t("stats.lives_1971").split("—")[1].trim()}</div>
                </div>
                <div className="bg-[#8B0000]/40 rounded-xl p-3 text-center flex-1">
                  <div className="text-2xl font-black text-[#FF6B6B]">2 months</div>
                  <div className="text-gray-400 text-xs">{t("history.duration")}</div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#FF4444] mt-0.5 flex-shrink-0">
                      <LucideIcon name="ChevronsRight" size="14" />
                    </span>
                    <span className="text-gray-300 text-sm">{t(`history.first_insurrection.point${idx}`)}</span>
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
                  <div className="text-[#FF4444] text-xs font-bold uppercase tracking-wider">{t("history.second_insurrection.title")}</div>
                  <h3 className="text-white font-black text-2xl">{t("history.second_insurrection.year")}</h3>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#8B0000]/60 rounded-xl p-3 text-center flex-1">
                  <div className="text-2xl font-black text-[#FF4444]">~60,000</div>
                  <div className="text-gray-400 text-xs">{t("stats.lives_1989").split("—")[1].trim()}</div>
                </div>
                <div className="bg-[#8B0000]/60 rounded-xl p-3 text-center flex-1">
                  <div className="text-2xl font-black text-[#FF4444]">3 years</div>
                  <div className="text-gray-400 text-xs">{t("history.country_paralyzed")}</div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#FF4444] mt-0.5 flex-shrink-0">
                      <LucideIcon name="ChevronsRight" size="14" />
                    </span>
                    <span className="text-gray-300 text-sm">{t(`history.second_insurrection.point${idx}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Economic Cost chart */}
        <div className="bg-[#1a0505] border border-[#3a1010] rounded-2xl p-6 mb-8">
          <h3 className="text-white font-bold text-lg mb-1">{t("history.chart_economic.title")}</h3>
          <p className="text-gray-500 text-xs mb-5">{t("history.chart_economic.subtitle")}</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={insurrectionCosts}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a0505" />
              <XAxis
                dataKey="translationKey"
                stroke="#555"
                tick={{ fill: "#888", fontSize: 9 }}
                interval={0}
                height={60}
                tickFormatter={(v) => t(`history.human_cost.${v}`)}
              />
              <YAxis stroke="#555" tick={{ fill: "#888", fontSize: 11 }} tickFormatter={(v) => `$${v}B`} />
              <Tooltip
                contentStyle={{ background: "#1a0505", border: "1px solid #8B0000", borderRadius: "8px" }}
                labelStyle={{ color: "#fff", fontSize: "11px" }}
                labelFormatter={(v) => t(`history.human_cost.${v}`)}
                formatter={(v: any) => [`$${v}B ${t("history.estimated_cost")}`, t("history.economic_impact")]}
              />
              <Bar dataKey="cost" radius={[6, 6, 0, 0]}>
                {insurrectionCosts.map((_, i) => (
                  <Cell key={i} fill={i < 2 ? "#8B0000" : "#4682B4"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-gray-500 text-xs mt-2 text-center">{t("history.chart_economic.note")}</p>
        </div>

        {/* Death toll visualization */}
        <div className="bg-[#1a0505] border border-[#8B0000]/30 rounded-2xl p-6 mb-8">
          <h3 className="text-white font-bold text-lg mb-1">{t("history.human_cost.title")}</h3>
          <p className="text-gray-500 text-xs mb-5">{t("history.human_cost.subtitle")}</p>
          <div className="space-y-4">
            {insurrectionCosts.map((item, i) => {
              const maxDeaths = 100000;
              const width = Math.min(100, (item.deaths / maxDeaths) * 100);
              const colors = ["#8B0000", "#FF4444", "#4682B4", "#B8860B"];
              return (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-gray-300 text-sm">{t(`history.human_cost.${item.translationKey}`)}</span>
                    <span className="font-bold text-sm" style={{ color: colors[i] }}>
                      {item.deaths.toLocaleString()} {t("history.human_cost.lives")}
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
            {t("history.quote1.body")}
          </p>
          <p className="text-[#FF6B6B] font-semibold mt-3 text-sm">{t("history.quote1.attribution")}</p>
        </div>

        <div className="bg-[#1a0000] border-l-4 border-[#DAA520] rounded-xl p-5">
          <p className="text-gray-300 italic leading-relaxed">
            {t("history.quote2.body")}
          </p>
          <p className="text-[#DAA520] font-semibold mt-3 text-sm">{t("history.quote2.attribution")}</p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
