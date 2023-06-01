import { useState } from "react";
import LoaderContext from "../context/LoaderContext";

const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
