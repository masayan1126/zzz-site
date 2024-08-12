"use client";

import PageTitle from "@/shared/components/PageTitle";
import Link from "next/link";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const BOOKS_QUERY = gql`
  query {
    test {
      id
      title
    }
  }
`;

export default function Home() {
  return (
    <main>
      <PageTitle title="トップ" />

      <Link href="/regular-application">申し込み</Link>
    </main>
  );
}
