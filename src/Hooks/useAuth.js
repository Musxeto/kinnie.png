import { useContext } from "react";
import { AuthContext } from "../Context/auth";

export const useAuth = () => {
  return useContext(AuthContext);
};
