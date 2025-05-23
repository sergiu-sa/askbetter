import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

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
    document.documentElement.style.setProperty(
      "--accent-color",
      getAccentHex(accentColor)
    );
  }, [accentColor]);

  const getAccentHex = (name) => {
    switch (name) {
      case "indigo":
        return "#6366f1";
      case "blue":
        return "#3b82f6";
      case "red":
        return "#ef4444";
      case "green":
        return "#10b981";
      case "orange":
        return "#f97316";
      default:
        return "#6366f1"; // default to indigo
    }
  };
  

  // Save font size
  useEffect(() => {
    localStorage.setItem("askbetterFontSize", fontSize);
    document.documentElement.style.setProperty(
      "--font-size",
      getFontSizeValue(fontSize)
    );
  }, [fontSize]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const getFontSizeValue = (sizeKey) => {
    switch (sizeKey) {
      case "sm":
        return "14px";
      case "md":
        return "16px";
      case "lg":
        return "18px";
      case "xl":
        return "20px";
      default:
        return "16px";
    }
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
