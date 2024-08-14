"use client";

import { GET_USERS } from "@/gql/queries/userQueries";
import { useQuery } from "@apollo/client";

// async function fetchUserData() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
//   if (!response.ok) {
//     throw new Error("Failed to fetch user data");
//   }
//   return response.json();
// }
export function UserList() {
  //   const user = await fetchUserData();
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data["test"][0]["id"]);
  return (
    <div>
      {/* <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p> */}
    </div>
  );
}
