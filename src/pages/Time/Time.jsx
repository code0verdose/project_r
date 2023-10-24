import React, { useEffect, useState } from "react";
import { Layout } from "../../layout/Layout";

export const Time = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date().toLocaleTimeString("ru-RU");
      console.log(date);
      setDate(date);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Layout>
      <h1>{date}</h1>
    </Layout>
  );
};
