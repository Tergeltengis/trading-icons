import "./App.css";
const App = ({
  symbol,
  theme = "light",
}: {
  symbol: string;
  theme?: "light" | "dark";
}) => {
  const imageUrls = symbol.split("_").map((image) => `/symbols/${image}.svg`);

  return (
    <div className="trading-icons">
      {imageUrls.length === 1 && (
        <img
          src={imageUrls[0]}
          alt={"forex icon"}
          width={24}
          height={24}
          className={`trading-icons__img trading-icons__img--single ${theme === "dark" ? "trading-icons__img--dark" : "trading-icons__img--light"}`}
        />
      )}
      {imageUrls.length === 2 && (
        <>
          <img
            src={imageUrls[0]}
            alt={"forex icon 1"}
            width={18}
            height={18}
            className={`trading-icons__img trading-icons__img--left ${theme === "dark" ? "trading-icons__img--dark" : "trading-icons__img--light"}`}
          />
          <img
            src={imageUrls[1]}
            alt={"forex icon 2"}
            width={18}
            height={18}
            className={`trading-icons__img trading-icons__img--right ${theme === "dark" ? "trading-icons__img--dark" : "trading-icons__img--light"}`}
          />
        </>
      )}
    </div>
  );
};

export default App;
