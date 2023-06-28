import React from "react";
import Posts from "../components/Posts";

export const revalidate = 10;

const BlogHome = () => {
  return (
    <div>
      <Posts />
    </div>
  );
};

export default BlogHome;

// require("crypto").randomBytes(25).toString("hex")
