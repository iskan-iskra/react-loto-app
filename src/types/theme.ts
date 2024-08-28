export type TiThemeState = "light" | "dark";

export type TiUseTheme = {
  theme: TiThemeState;
  toggleTheme(): void;
};
