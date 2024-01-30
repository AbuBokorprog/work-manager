"use client";
import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function loadUser() {
      try {
        fetch("http://localhost:3000/api/current")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setUser(data);
          });
      } catch (error) {
        setUser([]);
      }
    }
    loadUser();
  }, []);

  const value = { user, setUser };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
