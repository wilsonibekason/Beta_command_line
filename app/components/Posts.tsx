import { getSortedPostsData } from "@/lib/posts";
import React from "react";
import ListItem from "./ListItem";

const Posts = () => {
  const posts = getSortedPostsData();
  return (
    <section>
      <h2></h2>
      <ul>
        {posts.map((post) => (
          <>
            <ListItem key={post.id} post={post} />
          </>
        ))}
      </ul>
    </section>
  );
};

export default Posts;
