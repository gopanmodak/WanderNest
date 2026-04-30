/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  

 




  const authInfo = {
   
  };


  
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
