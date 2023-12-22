import React, { useContext } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AppContext } from "./components/Context";
import AppProvider from "./components/Context";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

const App = () => {
  const { theme, showResult } = useContext(AppContext);

  return (
    <div
      className="body"
      style={{
        background:
          theme === "light"
            ? "linear-gradient(90deg, #22C1C3 0.05%, rgba(195, 42, 208, 0.71) 51.81%, rgba(200, 38, 208, 0.70) 51.82%, rgba(200, 38, 208, 0.70) 51.97%, #E4B040 99.95%)"
            : "linear-gradient(90deg, #105B5C 0.05%, rgba(141, 45, 149, 0.71) 50%, #937430 99.95%)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <Navbar />
      {showResult ? <Result /> : <QuestionBox />}
      <Footer />
    </div>
  );
};

const AppWrapper = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default AppWrapper;
