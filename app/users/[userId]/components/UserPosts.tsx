import { Post } from "@/types";
import React from "react";
type Props = {
  promise: Promise<Post[]>;
};
const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;
  const content = () => (
    <article>
      {posts.map(({ body, id, title, userId }: Post) => (
        <>
          <div key={id}>
            <h1>{title} </h1>
          </div>
        </>
      ))}
    </article>
  );
  return <></>;
};

export default UserPosts;
