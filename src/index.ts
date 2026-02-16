export { default } from "./App";

export type TradingIconsTheme = "light" | "dark";
export type TradingIconsProps = {
  symbol: string;
  theme?: TradingIconsTheme;
};