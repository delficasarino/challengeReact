import { useState } from "react";
import PaginationContext from "../context/PaginationContext";

const PaginationProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <PaginationContext.Provider
      value={{
        activePage,
        setActivePage,
        itemsPerPage,
        setItemsPerPage,
        setCurrentItems,
        currentItems,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
