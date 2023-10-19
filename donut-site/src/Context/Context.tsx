import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  let [order, setOrder] = useState([]);
  

  return (
    <MyContext.Provider value={{
      order,
      setOrder
    }}>
        {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};