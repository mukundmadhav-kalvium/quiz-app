import React, { useState, useEffect, useMemo, useContext } from "react";
import { AppContext } from "./Context";
import "./Navbar.css";
export const Navbar = () => {
  const {theme, toggleTheme} = useContext(AppContext);
  return (
    <nav className="navbar">
      <img
        id="quizwiz-logo"
        src="./src/assets/QuizWiz Logo.png"
        alt="QuizWiz Logo"
      />
      <button
        id="change-theme-button"
        onClick={toggleTheme}>{theme === "light" ? "dark" : "light"}
      </button>
    </nav>
  );
};
