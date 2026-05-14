import React from "react";
import LucideIcon from "./LucideIcon";
import { useTranslation } from "../i18n/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#030303] border-t border-[#1a1a1a] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-3 h-8 bg-[#8B0000] rounded-sm" />
              <div className="w-1.5 h-8 bg-[#DAA520] rounded-sm" />
              <div className="w-1.5 h-8 bg-[#FF8C00] rounded-sm" />
              <div className="w-3 h-8 bg-[#006400] rounded-sm" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">{t("site.title")}</div>
              <div className="text-gray-500 text-xs">Sri Lanka Political Accountability</div>
            </div>
          </div>

          <div className="text-center max-w-xl">
            <p className="text-gray-600 text-xs mb-2">
              {t("disclaimer.body")}
            </p>
            <p className="text-gray-700 text-[10px]">
              Compiled from: International Crisis Group · JURIST · HRW · World Bank · UNDP · UNHRC · CPA · The Diplomat
            </p>
          </div>

          <div className="flex gap-2">
            {["#8B0000", "#DAA520", "#FF8C00", "#006400"].map((color, i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#111] text-center flex items-center justify-center gap-2">
          <LucideIcon name="Map" size={14} className="text-gray-800" />
          <p className="text-gray-800 text-xs">
            Sri Lanka — 2024/2025/2026 Governance Record
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
