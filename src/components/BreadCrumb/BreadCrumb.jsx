import React from "react";
import { useLang } from "../../context/LanguageContext";

const BreadCrumb = ({ title }) => {
  const { lang, switchLang, t } = useLang();
  const handleLangChange = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    switchLang(newLang);
    window.location.reload();
  };
  return (
    <div className="content" style={{ width: "100%" }}>
      {/* Header */}
      <div className="header d-flex justify-content-between align-items-center">
        {/* Language dropdown */}
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            {lang === "ar" ? t.langArabic : t.langEnglish}
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={handleLangChange}>
              {lang === "ar" ? t.langEnglish : t.langArabic}
            </button>
          </div>
        </div>

        {/* Title */}
        <div>
          <strong>{title}</strong>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
