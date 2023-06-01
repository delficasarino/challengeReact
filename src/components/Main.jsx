import { useContext } from "react";
import "../styles/main.css";
import CurrentSearch from "./CurrentSearch";
import CurrentPagination from "./CurrentPagination";
import Books from "./Books";
import Selected from "./Selected";
import LoaderContext from "../context/LoaderContext";
import PaginationContext from "../context/PaginationContext";

function Main() {
  const { loader } = useContext(LoaderContext);
  const { currentItems } = useContext(PaginationContext);
  return (
    <main className="df rw wp jcc aic">
      <CurrentSearch />
      {loader && (
        <section className="loading">
          <span className="loader"></span>
        </section>
      )}
      {<Books />}

      {<Selected />}

      {currentItems && currentItems.length > 0 ? <CurrentPagination /> : null}
    </main>
  );
}

export default Main;
