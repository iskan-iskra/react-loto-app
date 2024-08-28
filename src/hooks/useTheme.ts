import { useEffect, useState } from "react";
import { TiThemeState, TiUseTheme } from "../types";

export default function useTheme(): TiUseTheme {
  const [theme, setTheme] = useState<TiThemeState>(
    (localStorage.getItem("theme") as TiThemeState) || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((val) => (val === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
