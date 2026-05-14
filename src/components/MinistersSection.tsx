import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from "recharts";
import { ministersWealth } from "../data/nppData";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

const wealthColors = ["#8B0000", "#B8860B", "#8B4513", "#6B0000", "#A0522D", "#800000"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a0505] border border-[#8B0000]/50 rounded-xl p-3 shadow-xl">
        <p className="text-white font-bold text-sm mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-[#DAA520] text-sm">Rs. {p.value}M declared wealth</p>
        ))}
      </div>
    );
  }
  return null;
};

const MinistersSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="ministers" className="py-20 bg-[#0d0d00] relative">
      <div className="h-1 absolute top-0 left-0 right-0 flex">
        <div className="flex-1 bg-[#8B0000]" />
        <div className="w-20 bg-[#DAA520]" />
        <div className="w-20 bg-[#FF8C00]" />
        <div className="flex-1 bg-[#006400]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#B8860B]/30 border border-[#DAA520]/50 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#DAA520] rounded-full animate-pulse" />
            <span className="text-[#DAA520] text-sm font-semibold uppercase tracking-widest">Section 3</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {t("ministers.heading").split(",")[0]},<br /><span className="text-[#DAA520]">{t("ministers.heading").split(",")[1]?.trim() || t("ministers.heading").split(" ").slice(2).join(" ")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("ministers.intro")}
          </p>
        </div>

        {/* Featured scandal: Wasantha Samarasinghe */}
        <div className="bg-gradient-to-br from-[#1a1500] to-[#0d0d00] border border-[#DAA520]/30 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#DAA520]/20 border-2 border-[#DAA520]/50 rounded-full flex items-center justify-center">
                <LucideIcon name="User" size={40} className="text-[#DAA520]" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="bg-[#DAA520]/20 text-[#DAA520] text-xs font-bold px-3 py-1 rounded-full">{t("ministers.samarasinghe.title")}</span>
                <span className="bg-[#8B0000]/30 text-[#FF6B6B] text-xs px-2 py-1 rounded-full flex items-center gap-1.5">
                  <LucideIcon name="ShieldAlert" size={12} /> {t("ministers.samarasinghe.investigation")}
                </span>
              </div>
              <h3 className="text-white font-black text-2xl mb-1">{t("ministers.samarasinghe.name")}</h3>
              <p className="text-[#DAA520] font-semibold mb-3">{t("ministers.samarasinghe.wealth").split(":")[0]}: <span className="text-2xl font-black text-white">{t("ministers.samarasinghe.wealth").split(":")[1]}</span></p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {t("ministers.samarasinghe.body")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((idx) => {
                  const asset = t(`ministers.samarasinghe.asset${idx}`);
                  const [item, value] = asset.split(" — ");
                  return (
                    <div key={idx} className="bg-[#0d0d00] border border-[#DAA520]/20 rounded-lg p-2">
                      <div className="text-[#DAA520] font-bold text-xs">{value}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bar chart: all ministers */}
        <div className="bg-[#1a1500] border border-[#3a2500] rounded-2xl p-6 mb-8">
          <h3 className="text-white font-bold text-lg mb-2">{t("ministers.chart_title")}</h3>
          <p className="text-gray-400 text-sm mb-5">{t("ministers.chart_subtitle")}</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={ministersWealth} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2000" />
              <XAxis type="number" stroke="#666" tick={{ fill: "#999", fontSize: 11 }} tickFormatter={(v) => `Rs.${v}M`} />
              <YAxis 
                type="category" 
                dataKey="name" 
                stroke="#666" 
                tick={{ fill: "#ccc", fontSize: 10 }} 
                width={140} 
                tickFormatter={(v) => {
                  const key = v.toLowerCase().replace(/\s/g, "_").replace(/\./g, "");
                  return t(`ministers.names.${key}`) !== `ministers.names.${key}` ? t(`ministers.names.${key}`) : v;
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="wealth" radius={[0, 6, 6, 0]} label={{ position: "right", fill: "#DAA520", fontSize: 11, formatter: (v: any) => `Rs.${v}M` }}>
                {ministersWealth.map((_, i) => (
                  <Cell key={i} fill={wealthColors[i % wealthColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Lal Kantha callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#1a1500] border border-[#DAA520]/20 rounded-2xl p-5">
            <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-[#DAA520]/20 mb-4">
              <LucideIcon name="Home" size={24} className="text-[#DAA520]" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{t("ministers.lal_kantha.title")}</h3>
            <p className="text-[#DAA520] text-sm font-semibold mb-3">{t("ministers.lal_kantha.subtitle")}</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("ministers.lal_kantha.body")}
            </p>
          </div>
          <div className="bg-[#1a0505] border border-[#8B0000]/30 rounded-2xl p-5">
            <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-[#8B0000]/20 mb-4">
              <LucideIcon name="Scale" size={24} className="text-[#FF6B6B]" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{t("ministers.ciaboc.title")}</h3>
            <p className="text-[#FF6B6B] text-sm font-semibold mb-3">{t("ministers.ciaboc.subtitle")}</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              {t("ministers.ciaboc.body")}
            </p>
            <ul className="space-y-1.5">
              {[
                { name: "Wasantha Samarasinghe", key: "samarasinghe" },
                { name: "Sunil Handunetti", key: "handunetti" },
                { name: "Bimal Rathnayake", key: "rathnayake" },
                { name: "Dr. Nalinda Jayathissa", key: "jayathissa" },
                { name: "Kumara Jayakody", key: "jayakody" },
                { name: "Deputy Min. Sunil Watagala", key: "watagala" }
              ].map((min, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full flex-shrink-0" />
                  {t(`ministers.ciaboc.ministers.${min.key}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-8 bg-[#1a1500] border-l-4 border-[#DAA520] rounded-xl p-5">
          <p className="text-gray-300 italic leading-relaxed text-lg">
            {t("ministers.quote.body")}
          </p>
          <p className="text-[#DAA520] font-semibold mt-3 text-sm">{t("ministers.quote.attribution")}</p>
        </div>
      </div>
    </section>
  );
};

export default MinistersSection;
