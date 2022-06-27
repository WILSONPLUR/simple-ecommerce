// @ts-nocheck
import { createContext, useState } from "react";
export const Context = createContext();

const MainContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const addCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  const minusCount = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      } else {
        return 0;
      }
    });
  };
  const addProducts = (products) => {
    items.push(products);
  };
  return (
    <Context.Provider
      value={{ count, addCount, minusCount, items, addProducts }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainContext;
