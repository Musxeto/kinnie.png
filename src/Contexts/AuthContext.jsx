// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signup = async (email, password, username) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      throw error;
    }
  };

  const changePass = async (password) => {
    try {
      await updatePassword(auth.currentUser, password);
      console.log("Password reset successfully.");
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  };
  const updateName = async (username) => {
    try {
      await updateProfile(currentUser, {
        displayName: username,
      });
      setCurrentUser({
        ...currentUser,
        displayName: username,
      });
    } catch (error) {
      console.error("Error updating username: ", error);
      throw error;
    }
  };

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    resetPassword,
    changePass,
    updateName,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
