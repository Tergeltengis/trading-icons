export { default } from "./App";

export type TradingIconsTheme = "light" | "dark";
export type TradingIconsProps = {
  imageUrls: [string] | [string, string];
  theme?: TradingIconsTheme;
};  