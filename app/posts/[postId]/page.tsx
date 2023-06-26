import getFormatedDate from "@/lib/getFormatedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: {
    postId: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: "Post not found",
    };
  }
  return {
    title: post.title,
    description: post.title,
  };
}

const BlogPost = async ({ params }: Props) => {
  const posts = getSortedPostsData();
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) return notFound;

  // get post Item
  const { contentHtml, date, id, title } = await getPostData(postId);
  const dateFN = getFormatedDate(date);
  return (
    <>
      <main>
        <h1> {title} </h1>
        <p>{dateFN} </p>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
      </main>
    </>
  );
};

export default BlogPost;
