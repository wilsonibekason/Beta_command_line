"use client";

import React from "react";
import type { Metadata, NextApiResponse } from "next";
import { fetchUser } from "@/lib/fetchUser";
import Link from "next/link";
import { User } from "@/types";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Users",
};

const UserInfo = async () => {
  const userData: () => Promise<User[]> = () => fetchUser();
  const users = await userData();
  console.table(users);
  return (
    <div >
      <Navbar />
      <p>
        <Link href={"/"}>Back to home</Link>
      </p>
      {users &&
        users.map(({ address, name, id }: User) => (
          <>
            <p>
              <Link href={`users/${id}`}>{name} </Link>
            </p>
          </>
        ))}{" "}
    </div>
  );
};

export default UserInfo;
