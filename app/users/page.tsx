import React from "react";
import type { Metadata, NextApiResponse } from "next";
import { fetchUser } from "@/lib/fetchUser";
import Link from "next/link";
import { User } from "@/types";

export const metadata: Metadata = {
  title: "Users",
};

const UserInfo = async () => {
  const userData: () => Promise<User[]> = () => fetchUser();
  const users = await userData();
  console.table(users);
  return (
    <div>
      <p>
        <Link href={"/"}>Back to home</Link>
      </p>
      {users &&
        users.map(({ address, name }: User) => (
          <>
            <h1>{name} </h1>
          </>
        ))}{" "}
    </div>
  );
};

export default UserInfo;
