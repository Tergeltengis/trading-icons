# `trading-icons`

Small set of **trading symbol SVG icons** plus a tiny React renderer for **single** symbols (e.g. `BTC`) or **pairs** (e.g. `EUR_USD`).

## Install

```bash
npm i trading-icons
# or
pnpm add trading-icons
# or
yarn add trading-icons
```

## Assets

The SVGs live in `public/symbols/` in this repo. In the demo app they are served at **`/symbols/<CODE>.svg`**.

If you publish this package to npm and want the component to work the same way, make sure your app serves those SVGs at `/symbols` (for example by copying them into your app’s `public/symbols/`).

Example (copy icons into your app):

```bash
cp -R node_modules/trading-icons/dist/symbols ./public/symbols
```

Then you can use them directly:

```html
<img src="/symbols/BTC.svg" width="24" height="24" alt="BTC" />
```

## React component API

The renderer component (see `src/App.tsx`) accepts:

- **`imageUrls`**: `[string] | [string, string]`
  - single: `["/symbols/BTC.svg"]`
  - pair: `["/symbols/EUR.svg", "/symbols/USD.svg"]`
- **`theme`**: `"light" | "dark"` (default `"light"`)

Usage:

```tsx
import TradingIcons from "trading-icons";

export function Example() {
  return (
    <>
      <TradingIcons imageUrls={["/symbols/BTC.svg"]} />
      <TradingIcons imageUrls={["/symbols/EUR.svg", "/symbols/USD.svg"]} theme="dark" />
    </>
  );
}
```

If you prefer not to rely on runtime style injection, you can also import the CSS explicitly once:

```ts
import "trading-icons/trading-icons.css";
```

## Available symbols

These filenames exist under `public/symbols/`:

- `AAPL`
- `ADA`
- `AMZN`
- `AUD`
- `AVA`
- `AVAX`
- `BCO`
- `BNB`
- `BRK.B`
- `BTC`
- `CAD`
- `CHF`
- `DOGE`
- `DOT`
- `ETH`
- `EUR`
- `GBP`
- `GOOGL`
- `JPY`
- `KO`
- `META`
- `MSFT`
- `NAS100`
- `NFLX`
- `NKE`
- `NVDA`
- `NZD`
- `SOL`
- `SPX500`
- `TME`
- `TRX`
- `TSLA`
- `US30`
- `USD`
- `XAG`
- `XAU`
- `XCU`
- `XRP`

## TypeScript types (copy/paste)

If you want strong typing for `symbol`, you can use this:

```ts
export const TRADING_ICON_SYMBOLS = [
  "AAPL",
  "ADA",
  "AMZN",
  "AUD",
  "AVA",
  "AVAX",
  "BCO",
  "BNB",
  "BRK.B",
  "BTC",
  "CAD",
  "CHF",
  "DOGE",
  "DOT",
  "ETH",
  "EUR",
  "GBP",
  "GOOGL",
  "JPY",
  "KO",
  "META",
  "MSFT",
  "NAS100",
  "NFLX",
  "NKE",
  "NVDA",
  "NZD",
  "SOL",
  "SPX500",
  "TME",
  "TRX",
  "TSLA",
  "US30",
  "USD",
  "XAG",
  "XAU",
  "XCU",
  "XRP",
] as const;

export type TradingIconSymbol = (typeof TRADING_ICON_SYMBOLS)[number];
export type TradingIconsTheme = "light" | "dark";
export type TradingIconsSymbol =
  | TradingIconSymbol
  | `${TradingIconSymbol}_${TradingIconSymbol}`;
```

## Notes

- **Pairs**: the component renders at most 2 icons (when you pass `A_B`). Anything else is not supported.
- **Missing icons**: if you pass a symbol that doesn’t exist, the `<img>` will 404 (you’ll see a broken image).