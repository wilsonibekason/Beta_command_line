"use client";

import React from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";

const ProfilePic = () => {
  const SectionLayout = tw.section`w-56`;
  return (
    <>
      <SectionLayout>
        <Image
          src={"/wanbek.jpg"}
          alt={"profile image"}
          width={200}
          height={200}
          priority={true}
        />
      </SectionLayout>
    </>
  );
};

export default ProfilePic;
