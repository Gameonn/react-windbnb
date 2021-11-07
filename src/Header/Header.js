
import classes from "./Header.module.css";
import SearchBar from "./Search/SearchBar";
import logo from "../assets/logo.png";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div>
          {/* <span className={classes.polygon}> </span>
          <span className={classes["logo-text"]}>Windbnb</span> */}
          <img src={logo} className="img-thumbnail" alt="Logo" />
        </div>
        <SearchBar />
      </header>
    </>
  );
};

export default Header;
