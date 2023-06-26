import React from "react";
import Image from "next/image";
import tw from "tailwind-styled-components/dist/tailwind";

const ProfilePic = () => {
  const SectionLayout = tw.section`w-56`;
  return (
    <>
      <SectionLayout>
        <Image src={""} alt={"profile image"} width={200} priority={true} />
      </SectionLayout>
    </>
  );
};

export default ProfilePic;
