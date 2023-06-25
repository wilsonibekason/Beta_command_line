import React, { Suspense } from "react";
import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Post, User, UserPromise } from "@/types";
import UserPosts from "./components/UserPosts";
type Params = {
  params: {
    userId: string;
  };
};
const UserPage = async ({ params: { userId } }: Params) => {
  const userData: UserPromise<User> = () => getUser(userId);
  const userPost: Promise<Post[]> = getUserPost(userId);
  const [user, userPosts] = await Promise.all([userData, userPost]);
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>loading</h2>}>
        <UserPosts promise={userPost} />
      </Suspense>
    </>
  );
};

export default UserPage;
