import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("askbetterTheme") || "light";
  });

  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem("askbetterAccent") || "indigo";
  });

  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem("askbetterFontSize") || "md";
  });

  // Apply theme mode
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("askbetterTheme", theme);
  }, [theme]);

  // Save accent
  useEffect(() => {
    localStorage.setItem("askbetterAccent", accentColor);
  }, [accentColor]);

  // Save font size
  useEffect(() => {
    localStorage.setItem("askbetterFontSize", fontSize);
  }, [fontSize]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        accentColor,
        setAccentColor,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
