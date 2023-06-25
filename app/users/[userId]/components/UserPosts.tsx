import { Post } from "@/types";
import React from "react";
type Props = {
  promise: Promise<Post>;
};
const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;
  console.log(posts);

  return (
    <article>
      <div>
        <h1>{posts.title} </h1>
      </div>
    </article>
  );
};

export default UserPosts;
