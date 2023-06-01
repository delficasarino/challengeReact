import { useState } from "react";
import SelectedContext from "../context/SelectedContext";

const SelectedProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);
  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectedProvider;
