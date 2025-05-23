import React from "react";
import { useTheme } from "../context/ThemeContext";

const SettingsPanel = () => {
  const { accentColor, setAccentColor, fontSize, setFontSize } = useTheme();

  const accentOptions = ["indigo", "green", "orange"];
  const fontSizes = ["sm", "md", "lg"];

  return (
    <div className="p-4 space-y-4 border border-gray-200 rounded-lg dark:border-gray-700">
      <div>
        <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
          Accent Color
        </h3>
        <div className="flex gap-2">
          {accentOptions.map((color) => (
            <button
              key={color}
              onClick={() => setAccentColor(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                accentColor === color
                  ? `border-${color}-600`
                  : "border-transparent"
              } bg-${color}-500 hover:scale-105 transition`}
            ></button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
          Font Size
        </h3>
        <div className="flex gap-2">
          {fontSizes.map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={`px-3 py-1 rounded-md border ${
                fontSize === size
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-gray-800 border-gray-300 text-gray-700"
              }`}
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
