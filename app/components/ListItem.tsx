import getFormatedDate from "@/lib/getFormatedDate";
import { BlogPost } from "@/types";
import Link from "next/link";
import React from "react";

type Props = {
  post: BlogPost;
};

const ListItem = ({ post: { date, id, title } }: Props) => {
  const formatedDate = getFormatedDate(date);
  return (
    <>
      <li>
        <Link href={`/posts/${id} `}>{title} </Link>
        <p> {formatedDate} </p>
      </li>
    </>
  );
};

export default ListItem;
