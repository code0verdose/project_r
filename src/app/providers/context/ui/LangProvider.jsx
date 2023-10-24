import React from "react";
import { useState } from "react";
import { LangContext } from "../LangContext";

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ru");

  const toggleLang = () => {
    switch (lang) {
      case "ru":
        setLang("en");
        break;
      case "en":
        setLang("ru");
        break;
      default:
        setLang("ru");
        break;
    }
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
