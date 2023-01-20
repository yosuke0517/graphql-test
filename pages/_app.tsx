import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import {Sidebar} from "../components/Sidebar";
import {ApolloProvider} from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
      <ApolloProvider client={client}>
          <SessionProvider session={session}>
              <div className="mx-auto max-h-screen lg:max-w-6xl">
                  <main className="grid grid-cols-9">
                      <Sidebar />
                      <Component {...pageProps} />
                      {/* Widget */}
                  </main>
              </div>
          </SessionProvider>
      </ApolloProvider>

  );
}

export default MyApp;