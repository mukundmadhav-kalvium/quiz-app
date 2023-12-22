import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState("light");
  const [showResult, setShowResult] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        score,
        setScore,
        showResult,
        setShowResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
