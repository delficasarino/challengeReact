import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/main.css";
import Pagination from "react-js-pagination";
import "../styles/pagination.css";

const url = "https://openlibrary.org";

async function getBooks(search) {
  let endpoint = `${url}/search.json?q=${search}`;
  return await (await fetch(endpoint)).json();
}

async function getWork(key) {
  let endpoint = `${url}${key}.json`;
  return await (await fetch(endpoint)).json();
}

async function getAuthor(key) {
  let endpoint = `${url}/authors/${key}.json`;
  return await (await fetch(endpoint)).json();
}

function Main() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingSelected, setLoadingSelected] = useState(false);

  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const books = await getBooks(search, activePage);
      setLoading(false);
      setBooks(books);
    })();
  }, [search, activePage]);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { elements } = e.target;
    const { search } = elements;
    const { value } = search;
    if (value && value.length > 2) {
      setSearch(String(value).toLowerCase().trim().split(" ").join("+"));
    }
  };

  const selectBook = async (book) => {
    setLoadingSelected(true);
    const work = await getWork(book.key);
    const author = await getAuthor(book.author_key);
    setLoadingSelected(false);
    setSelected({ book, work, author });
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    books.docs && books.docs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main className="df rw wp jcc aic">
      <form onSubmit={submit}>
        <input type="text" name="search" id="search" />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      <section>{loading && <span className="loader"></span>}</section>
      {currentItems && currentItems?.length > 0 && (
        <section className="df cl jcc">
          {currentItems.map((book) => (
            <ul
              onClick={() => selectBook(book)}
              className={
                selected && selected?.book?.key === book?.key
                  ? "selected"
                  : "list"
              }
              key={book?.key ? book?.key : selected?.book?.title}
            >
              <section>
                {loadingSelected && <span className="loader"></span>}
              </section>
              {selected && selected?.book?.key == book?.key ? (
                <>
                  {selected?.work?.covers && (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${selected?.work?.covers[0]}-L.jpg`}
                      alt="cover"
                    />
                  )}
                  <article>
                    <li className="title">{selected?.book?.title}</li>
                    <li>
                      First Publish Year: {selected?.book?.first_publish_year}
                    </li>
                    <li>
                      {!selected?.work?.description
                        ? null
                        : selected?.work?.description?.value
                        ? selected?.work?.description?.value
                        : selected?.work?.description}
                    </li>
                    <li>Author: {selected?.book?.author_name}</li>
                    <li>
                      {!selected?.author?.bio
                        ? null
                        : selected?.author?.bio?.value
                        ? selected?.author?.bio?.value
                        : selected?.author?.bio}
                    </li>
                  </article>
                </>
              ) : (
                <>
                  <li className="title">{book?.title}</li>
                  <li>Author: {book?.author_name}</li>
                  <li>First Publish Year: {book?.first_publish_year}</li>
                </>
              )}
            </ul>
          ))}
        </section>
      )}
      {currentItems && currentItems.length > 0 ? (
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={books.numFound}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      ) : null}
    </main>
  );
}

export default Main;
