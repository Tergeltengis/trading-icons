import "./App.css";
const App = ({
  imageUrls,
  theme = "light",
}: {
  imageUrls: [string] | [string, string];
  theme?: "light" | "dark";
}) => {
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
