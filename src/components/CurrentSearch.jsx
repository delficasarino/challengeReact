import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchContext from "../context/SearchContext";
import SelectedContext from "../context/SelectedContext";
import PaginationContext from "../context/PaginationContext";
import LoaderContext from "../context/LoaderContext";
import "../scss/search.scss";

const CurrentSearch = () => {
  const { setSearch } = useContext(SearchContext);
  const { setSelected } = useContext(SelectedContext);
  const { setActivePage } = useContext(PaginationContext);
  const { setLoader } = useContext(LoaderContext);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const { elements } = e.target;
    const { keyWord } = elements;
    const { value } = keyWord;

    const word = String(value).toLowerCase().trim();

    if (value && word.length > 2) {
      setSearch(word.split(" ").join("+"));
      setActivePage(1);
      setSelected(null);
      setShowErrorMessage(false);
      keyWord.value = "";
    } else {
      setShowErrorMessage(true);
      keyWord.value = "";
      setLoader(false);
      setSearch("");
    }
  };

  const errorMessage =
    "You must enter more than 2 letters to perform the search";

  return (
    <form onSubmit={submit} className="search-form">
      <input
        type="text"
        name="keyWord"
        id="keyWord"
        className="search-form__input"
      />
      <button type="submit" className="search-form__button">
        <FaSearch />
      </button>
      {showErrorMessage && (
        <span className="search-form__error-message">{errorMessage}</span>
      )}
    </form>
  );
};

export default CurrentSearch;
