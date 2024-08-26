import { graphql } from "@/gql";
import { UserQuery } from "@/gql/graphql";
import { getClient } from "@/lib/apolloClient";

export class UserRepository {
  static async searchUsers() {
    const UsersQueryDocument = graphql(
      `
        query Users {
          users {
            id
            name
            age
          }
        }
      `
    );

    const { data, loading, error } = await getClient().query({
      query: UsersQueryDocument,
    });

    return { users: data.users, loading, error };
  }

  static async findUser(id: string) {
    const UserQueryDocument = graphql(
      `
        query User($id: ID!) {
          user(id: $id) {
            id
            name
            age
          }
        }
      `
    );

    const { data, loading, error } = await getClient().query<UserQuery>({
      query: UserQueryDocument,
      variables: { id },
    });

    return { user: data.user, loading, error };
  }
}
