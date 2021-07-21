import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { client } from "../../../pages/_app";

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const data = await client.mutate({
          mutation: gql`
            mutation UserloggedMutation(
              $userloggedUsername: String!
              $userloggedPassword: String!
            ) {
              userlogged(
                Username: $userloggedUsername
                Password: $userloggedPassword
              ) {
                id
                Username
                Email
                Password
              }
            }
          `,
          variables: {
            userloggedUsername: credentials.username,
            userloggedPassword: credentials.password,
          },
        });
        return data;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/login",
  },
});
