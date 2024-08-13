"use client";

import { createContext, useContext } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const user = {
  id: 0,
  name: "",
  email: "",
};

export const UserContext = createContext<User>(user);

export function UserProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
