/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedCurrentUser = localStorage.getItem("currentUser");
    if (savedCurrentUser) {
      setUser(JSON.parse(savedCurrentUser));
    }
  }, []);

  const register = (userData) => {
    localStorage.setItem("registeredUser", JSON.stringify(userData));
  };

  const login = (identity, password, keepSignedIn = false) => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!savedUser) {
      return { ok: false, message: "No registered user found" };
    }

    const identityMatched =
      identity === savedUser.email || identity === savedUser.username;

    const passwordMatched = password === savedUser.password;

    if (identityMatched && passwordMatched) {
      setUser(savedUser);
      localStorage.setItem("currentUser", JSON.stringify(savedUser));

      if (keepSignedIn) {
        localStorage.setItem("isLoggedIn", "true");
      } else {
        localStorage.removeItem("isLoggedIn");
      }

      return { ok: true, user: savedUser };
    }

    return { ok: false, message: "Invalid username/email or password" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
  };

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: !!user,
      register,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}