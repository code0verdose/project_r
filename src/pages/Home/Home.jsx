import React, { useContext, useRef, useEffect } from "react";
import { Layout } from "../../layout/Layout";
import { LangContext } from "../../app/providers/context/LangContext";

export const Home = () => {
  const { lang, toggleLang } = useContext(LangContext);

  const titleRef = useRef(null);
  const inputRef = useRef(null);

  const showRef = () => {
    console.log(titleRef.current.textContent);
  };
  
  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <Layout>
      <section>
        <h2>{lang}</h2>

        <h1 ref={titleRef}>{lang === "ru" ? "Привет мир" : "Hello world"}</h1>
        <button onClick={showRef}>Show title</button>

        <input ref={inputRef} type="text" />
        <button onClick={inputFocus}>Focus on input</button>
        <hr />
        <button onClick={toggleLang}>toggle lang</button>
      </section>
    </Layout>
  );
};
