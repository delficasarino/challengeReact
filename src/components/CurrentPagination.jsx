import { useContext } from "react";
import Pagination from "react-js-pagination";
import "../styles/pagination.css";
import PaginationContext from "../context/PaginationContext";
import BooksContext from "../context/BooksContext";

const CurrentPagination = () => {
  const { activePage, setActivePage, itemsPerPage } =
    useContext(PaginationContext);
  const { books } = useContext(BooksContext);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={itemsPerPage}
      totalItemsCount={books.numFound}
      pageRangeDisplayed={3}
      onChange={handlePageChange}
      itemClass="page-item"
      linkClass="page-link"
    />
  );
};

export default CurrentPagination;
