import Header from "./components/Header";
import Main from "./components/Main";
import BooksProvider from "./provider/BooksProvider";
import LoaderProvider from "./provider/LoaderProvider";
import PaginationProvider from "./provider/PaginationProvider";
import SearchProvider from "./provider/SearchProvider";
import SelectedProvider from "./provider/SelectedProvider";

import "./scss/flexbox.scss";

function App() {
  return (
    <LoaderProvider>
      <SearchProvider>
        <PaginationProvider>
          <BooksProvider>
            <SelectedProvider>
              <Header />
              <Main />
            </SelectedProvider>
          </BooksProvider>
        </PaginationProvider>
      </SearchProvider>
    </LoaderProvider>
  );
}

export default App;
