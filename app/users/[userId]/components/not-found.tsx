import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <p>The requested page was not found</p>
      <Link href={"/"}>Go back to home</Link>
    </div>
  );
};

export default PageNotFound;
