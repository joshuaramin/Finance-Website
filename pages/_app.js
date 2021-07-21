import "../styles/globals.scss";
import { Provider } from "next-auth/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Layout from "../components/Layout";

export const client = new ApolloClient({
  uri: "",  //link of graphql api
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
