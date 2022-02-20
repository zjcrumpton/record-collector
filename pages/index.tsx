import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getSession, signIn, signOut, useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};

const Home: NextPage = () => {
  const session = useSession();

  return (
    <div>
      <Head>
        <title>Record Collector</title>
        <meta name="description" content="Music collecting app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {session.status === "unauthenticated" && (
          <Link href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Log In
            </a>
          </Link>
        )}

        {session.status === "authenticated" && (
          <Link href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Log Out
            </a>
          </Link>
        )}
      </main>
    </div>
  );
};

export default Home;
