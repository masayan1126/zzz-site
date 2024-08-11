import PageTitle from "@/shared/components/PageTitle";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
export default function Home() {
  const client = new ApolloClient({
    uri: "https://flyby-router-demo.herokuapp.com/",
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `,
    })
    .then((result) => console.log(result["data"]["locations"][0]));

  return (
    <main>
      <PageTitle title="トップ" />
      <Link href="/regular-application">申し込み</Link>
    </main>
  );
}
