import { useContext } from "react";
import LoaderContext from "../context/LoaderContext";

const Loader = () => {
  const { loader } = useContext(LoaderContext);
  return (
    loader && (
      <section className="loading">
        <span className="loader"></span>
      </section>
    )
  );
};

export default Loader;
