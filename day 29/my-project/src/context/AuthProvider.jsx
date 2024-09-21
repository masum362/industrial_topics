import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const authContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user , setUser ] = useState({})

    const registerUser = (email,password) => {
      console.log(email,password)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email,password) => {
      console.log(email,password)
        return signInWithEmailAndPassword(auth, email, password)
    }

  
    useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log(user)
              setUser(user);
          } else {
              // User is signed out
              // ...
          }
      });

      return () => unSuscribe();
  }, []);

  const authValues = {
    registerUser,loginUser,user
}


  return (
    <authContext.Provider value={authValues}>{children}</authContext.Provider>
  )
}

export default AuthProvider