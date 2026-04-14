import { createContext, useState } from 'react';

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [call, setCall] = useState([]);

  const data = {
    call,
    setCall,
  };

  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;