import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

const Profile: NextPage = () => {
  const session = useSession({
    required: true,
  });

  return (
    <>
      <Head>
        <title>My Collection</title>
        <meta name="description" content="Music collecting app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{session.status}</h1>
    </>
  );
};

export default Profile;
