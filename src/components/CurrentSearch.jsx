import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import SearchContext from "../context/SearchContext";
import SelectedContext from "../context/SelectedContext";
import PaginationContext from "../context/PaginationContext";
import LoaderContext from "../context/LoaderContext";

const CurrentSearch = () => {
  const { setSearch } = useContext(SearchContext);
  const { setSelected } = useContext(SelectedContext);
  const { setActivePage } = useContext(PaginationContext);
  const { setLoader } = useContext(LoaderContext);

  const submit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const { elements } = e.target;
    const { keyWord } = elements;
    const { value } = keyWord;
    if (value && value.length > 2) {
      setSearch(String(value).toLowerCase().trim().split(" ").join("+"));
      setActivePage(1);
      setSelected(null);
    }
  };
  return (
    <form onSubmit={submit}>
      <input type="text" name="keyWord" id="keyWord" />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default CurrentSearch;
