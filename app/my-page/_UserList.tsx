async function fetchUserData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
}
export async function UserList() {
  const user = await fetchUserData();
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
