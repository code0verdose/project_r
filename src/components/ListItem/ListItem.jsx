import React, { useEffect, useState } from "react";

export const ListItem = ({ text, handler }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date().toLocaleTimeString("ru-RU");
      setDate(date);
      console.log(text, date);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <li>
      {text}
      ---
      {date}
      <button onClick={() => handler(text)}>x</button>
    </li>
  );
};
