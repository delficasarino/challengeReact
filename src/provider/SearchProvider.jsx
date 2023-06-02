import { useState } from "react";
import SearchContext from "../context/SearchContext";

const SearchProvider = ({ children }) => {
  const query = localStorage.getItem("key");
  const [search, setSearch] = useState(query || "");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
