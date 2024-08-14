"use client";

import { createContext, useContext } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
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

export function QueryProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export function useUser() {
  return useContext(UserContext);
}
