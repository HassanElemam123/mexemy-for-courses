/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getCurrentAuthUser, loginWithDummy } from "./services/authApi.js";

const AuthContext = createContext(null);

const STORAGE_KEYS = {
  currentUser: "currentUser",
  accessToken: "accessToken",
  keepSignedIn: "keepSignedIn",
  registeredUser: "registeredUser",
};

function clearAuthStorage() {
  localStorage.removeItem(STORAGE_KEYS.currentUser);
  localStorage.removeItem(STORAGE_KEYS.accessToken);
  localStorage.removeItem(STORAGE_KEYS.keepSignedIn);

  sessionStorage.removeItem(STORAGE_KEYS.currentUser);
  sessionStorage.removeItem(STORAGE_KEYS.accessToken);
  sessionStorage.removeItem(STORAGE_KEYS.keepSignedIn);
}

function getStorageByPreference() {
  const localKeepSignedIn =
    localStorage.getItem(STORAGE_KEYS.keepSignedIn) === "true";
  const sessionKeepSignedIn =
    sessionStorage.getItem(STORAGE_KEYS.keepSignedIn) === "true";

  if (localKeepSignedIn) return localStorage;
  if (sessionKeepSignedIn) return sessionStorage;

  if (localStorage.getItem(STORAGE_KEYS.accessToken)) return localStorage;
  if (sessionStorage.getItem(STORAGE_KEYS.accessToken)) return sessionStorage;

  return null;
}

function saveAuthSession(loginData, keepSignedIn) {
  clearAuthStorage();

  const storage = keepSignedIn ? localStorage : sessionStorage;

  const userToStore = {
    id: loginData.id,
    username: loginData.username,
    email: loginData.email,
    firstName: loginData.firstName,
    lastName: loginData.lastName,
    image: loginData.image,
    gender: loginData.gender,
  };

  storage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(userToStore));
  storage.setItem(STORAGE_KEYS.accessToken, loginData.accessToken);
  storage.setItem(STORAGE_KEYS.keepSignedIn, String(keepSignedIn));

  return userToStore;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const bootstrapAuth = async () => {
      try {
        const storage = getStorageByPreference();

        if (!storage) {
          setAuthLoading(false);
          return;
        }

        const accessToken = storage.getItem(STORAGE_KEYS.accessToken);

        if (!accessToken) {
          setAuthLoading(false);
          return;
        }

        const authUser = await getCurrentAuthUser(accessToken);
        storage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(authUser));
        setUser(authUser);
      } catch (error) {
        clearAuthStorage();
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    bootstrapAuth();
  }, []);

  const register = (userData) => {
    localStorage.setItem(STORAGE_KEYS.registeredUser, JSON.stringify(userData));
  };

  const login = async (identity, password, keepSignedIn = false) => {
    try {
      const data = await loginWithDummy(identity, password, keepSignedIn);
      const savedUser = saveAuthSession(data, keepSignedIn);

      setUser(savedUser);

      return { ok: true, user: savedUser };
    } catch (error) {
      return {
        ok: false,
        message: error.message || "Invalid username/email or password",
      };
    }
  };

  const logout = () => {
    setUser(null);
    clearAuthStorage();
  };

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: !!user,
      authLoading,
      register,
      login,
      logout,
    }),
    [user, authLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}