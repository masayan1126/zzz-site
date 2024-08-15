import {
  UserDocument,
  UserQuery,
  UsersDocument,
  UsersQuery,
} from "@/gql/graphql";
import { getClient } from "@/lib/apolloClient";

export class UserRepository {
  static async searchUsers() {
    const { data, loading, error } = await getClient().query<UsersQuery>({
      query: UsersDocument,
    });

    return { users: data.users, loading, error };
  }

  static async findUser(id: string) {
    const { data, loading, error } = await getClient().query<UserQuery>({
      query: UserDocument,
      variables: { id },
    });

    return { user: data.user, loading, error };
  }
}
