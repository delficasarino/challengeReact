import { useContext } from "react";
import LoaderContext from "../context/LoaderContext";
import "../scss/loader.scss";

const Loader = () => {
  const { loader } = useContext(LoaderContext);
  return (
    loader && (
      <section className="loader">
        <span className="loader__spin"></span>
      </section>
    )
  );
};

export default Loader;
