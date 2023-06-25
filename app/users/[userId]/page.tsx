import React, { Suspense } from "react";
import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Post, User, UserPromise } from "@/types";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import { fetchUser } from "@/lib/fetchUser";
// import  {notFound} from  "next/" 
type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params: { userId },
}: Params): Promise<Metadata> => {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the description of ${user.name}`,
    keywords: ["user", "profile", "information"],
    openGraph: {
      title: user.name,
      description: `This is the description of ${user.name}`,
      images: {
        url: "https://example.com/user-profile-image.jpg",
        alt: "User Profile Image",
      },
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourTwitterHandle",
    },
  };
};
const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPost: Promise<Post> = getUserPost(userId);
  //   const [userZ, userPosts] = await Promise.all([userData, userPost]);
  const user = await userData;

  return (
    <>
      <p>User details Page</p>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>loading</h2>}>
        <UserPosts promise={userPost} />
      </Suspense>
    </>
  );
};
export async function generateStaticParams() {
  const usersData: Promise<User[]> = fetchUser();
  const users = await usersData;
  return users.map((user: User) => {
    userId: user.id.toString();
  });
}

export default UserPage;
