import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";

const Profile: FC = () => {
  const session = useSession({
    required: true,
  });

  return (
    <>
      <h1>My Collection</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>{session.status}</h1>
    </>
  );
};

export default Profile;
