import React, { useContext } from "react";
import { Layout } from "../../layout/Layout";
import { LangContext } from "../../app/providers/context/LangContext";
import { Button } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

export const About = () => {
  const { lang, toggleLang } = useContext(LangContext);
  return (
    <Layout>
      <section>
        <h1>About page</h1>
        <h2>{lang}</h2>
        <Button
          endIcon={<TranslateIcon />}
          onClick={() => toggleLang()}
          variant="contained"
          sx={{ width: 300 }}
          className="btn"
        >
          toggle lang
        </Button>
      </section>
    </Layout>
  );
};
