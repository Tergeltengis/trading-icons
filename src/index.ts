export { default } from "./App";

// One-import experience:
//   import TradingIcons from "trading-icons";
// This injects a <style> tag in the browser at import-time.
import styles from "./App.css?inline";

const STYLE_ELEMENT_ID = "trading-icons__styles";
function ensureTradingIconsStyles() {
  if (typeof document === "undefined") return; // SSR / non-browser
  if (document.getElementById(STYLE_ELEMENT_ID)) return;

  const styleEl = document.createElement("style");
  styleEl.id = STYLE_ELEMENT_ID;
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
}

ensureTradingIconsStyles();

export type TradingIconsTheme = "light" | "dark";
export type TradingIconsProps = {
  imageUrls: [string] | [string, string];
  theme?: TradingIconsTheme;
};  