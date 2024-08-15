import { UserRepository } from "@/features/my-page/customer-info/_user-repository";

export async function UserList() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const { users, loading, error } = await UserRepository.searchUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {users &&
        users.map((t, i) => (
          <p key={i.toString()}>
            ID: {t?.id} 氏名: {t?.name} 年齢: {t?.age}
          </p>
        ))}
    </div>
  );
}
