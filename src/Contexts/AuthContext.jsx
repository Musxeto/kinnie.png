import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = ({ email, password }) => {
    createUserWithEmailAndPassword(email, password);
  };
  onAuthStateChanged((user) => {
    setCurrentUser(user);
  });
  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
