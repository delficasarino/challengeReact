import { useEffect, useContext } from "react";
import SearchContext from "../context/SearchContext";
import PaginationContext from "../context/PaginationContext";
import BooksContext from "../context/BooksContext";
import SelectedContext from "../context/SelectedContext";
import LoaderContext from "../context/LoaderContext";
import "../styles/main.css";

const url = "https://openlibrary.org";

async function getBooks(search) {
  let endpoint = `${url}/search.json?q=${search}`;
  return (await fetch(endpoint)).json();
}

async function getWork(key) {
  let endpoint = `${url}${key}.json`;
  return (await fetch(endpoint)).json();
}

async function getAuthor(key) {
  let endpoint = `${url}/authors/${key}.json`;
  return (await fetch(endpoint)).json();
}

const Books = () => {
  const { search } = useContext(SearchContext);
  const { activePage, itemsPerPage, currentItems, setCurrentItems } =
    useContext(PaginationContext);
  const { books, setBooks } = useContext(BooksContext);
  const { selected, setSelected } = useContext(SelectedContext);
  const { setLoader, loader } = useContext(LoaderContext);

  useEffect(() => {
    (async () => {
      const result = await getBooks(search, activePage);
      setLoader(false);
      setBooks(result);
    })();
  }, [search, activePage]);

  useEffect(() => {
    (async () => {
      const indexOfLastItem = activePage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const items =
        books?.docs && books?.docs?.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentItems(items);
    })();
  }, [search, currentItems]);

  const selectBook = async (book) => {
    setLoader(true);
    const work = await getWork(book.key);
    const author = await getAuthor(book.author_key);
    setLoader(false);
    setSelected({ book, work, author });
  };

  return (
    <section className="df cl jcc">
      {currentItems &&
        currentItems?.length > 0 &&
        currentItems.map((book) => (
          <ul
            onClick={() => selectBook(book)}
            className="list"
            key={book?.key ? book?.key : selected?.book?.title}
          >
            <li className="title">{book?.title}</li>
            <li>Author: {book?.author_name}</li>
            <li>First Publish Year: {book?.first_publish_year}</li>
          </ul>
        ))}
    </section>
  );
};

export default Books;
