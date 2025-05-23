import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./themes.css";
import { ThemeProvider } from "./context/ThemeContext"; // ✅ import here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {" "}
      {/* ✅ wrap your app */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
