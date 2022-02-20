import { GetServerSideProps, NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};

const Settings: NextPage = () => {
  const session = useSession({
    required: true,
  });
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Music collecting app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session.status === "loading" && <h1>Loading...</h1>}
      {session.status === "authenticated" && (
        <Link href="/api/auth/signout">
          <a
            onClick={(e) => {
              e.preventDefault();
              signOut({ redirect: false });
              router.push("/");
            }}
          >
            Log Out
          </a>
        </Link>
      )}
    </>
  );
};

export default Settings;
