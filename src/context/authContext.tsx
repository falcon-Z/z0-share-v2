// src/context/AuthContext.tsx
import { db } from "@falcon-z/lib/db";
import { createContext, useContext, useState, ReactNode } from "react";

export interface AuthContextType {
  user: User | null;
  createUser: (username: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export interface User {
  username: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const createUser = (username: string, password: string) => {
    db.user().create(username, password, (ack) => {
      if (ack.err) {
        console.error("Error creating user:", ack?.err);
        window.alert(ack.err);
        return;
      } else {
        console.log("User created successfully");
        window.alert("User created successfully");
      }
    });
  };

  const login = (username: string, password: string) => {
    db.user().auth(username, password, (ack) => {
      if (ack.err) {
        console.error("Error creating user:", ack?.err);
        window.alert(ack.err);
      } else {
        console.log(ack);
      }
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, createUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
