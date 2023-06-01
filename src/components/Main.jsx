import { useContext } from "react";
import CurrentSearch from "./CurrentSearch";
import CurrentPagination from "./CurrentPagination";
import Books from "./Books";
import Selected from "./Selected";
import Loader from "./Loader";
import LoaderContext from "../context/LoaderContext";
import PaginationContext from "../context/PaginationContext";
import "../scss/loader.scss";

function Main() {
  const { loader } = useContext(LoaderContext);
  const { currentItems } = useContext(PaginationContext);
  return (
    <main className="df rw wp jcc aic">
      <CurrentSearch />

      {loader && <Loader />}

      {<Books />}

      {<Selected />}

      {currentItems && currentItems.length > 0 ? <CurrentPagination /> : null}
    </main>
  );
}

export default Main;
