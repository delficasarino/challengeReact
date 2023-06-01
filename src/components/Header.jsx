import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import "../scss/header.scss";

function Header() {
  const { setSearch } = useContext(SearchContext);
  const submit = () => {
    setSearch("");
  };
  return (
    <header className="df rw wp jcc aic header">
      <span className="header__title" onClick={submit}>
        SEARCH BOOKS
      </span>
    </header>
  );
}

export default Header;
