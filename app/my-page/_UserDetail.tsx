import { UserRepository } from "@/features/my-page/customer-info/_user-repository";

export async function UserDetail() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const { user, loading, error } = await UserRepository.findUser("1");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {user && (
        <p>
          ID: {user.id}, 氏名: {user.name}, 年齢: {user.age}
        </p>
      )}
    </div>
  );
}
