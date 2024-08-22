// src/context/AuthContext.tsx
import { db } from "@falcon-z/lib/db";
import { createContext, useState, ReactNode, useEffect } from "react";

export interface AuthContextType {
  username: string | undefined | null;
  createUser: (username: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string | undefined | null>(null);

  const user = db.user().recall({ sessionStorage: true });

  useEffect(() => {
    db.on("auth", async () => {
      const username = await user.get("alias");
      setUsername(username);
    });
  }, [user, username]);

  const createUser = (username: string, password: string) => {
    db.user().create(username, password, ({ err }) => {
      if (err) {
        setUsername(null);
        alert(err);
      } else {
        login(username, password);
      }
    });
  };

  const login = (username: string, password: string) => {
    db.user().auth(username, password, ({ err }) => {
      if (err) {
        setUsername(null);
        alert(err);
      }
    });
  };

  const logout = () => {
    db.user().leave();
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, createUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
