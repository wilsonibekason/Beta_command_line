import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import tw from "tailwind-styled-components";
import cx from "classnames";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  const SearchInput = tw.input`w-full h-10 mx-30 border border-red-100 shadow-lg   rounded-md  max-w-[70%] px-5`;
  const SearchLayout = tw.div`flex items-center justify-center w-full`;

  return (
    <SearchLayout>
      <form onSubmit={handleSearch}>
        <SearchInput
          type="text "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={cx("")}
        />
      </form>
    </SearchLayout>
  );
};

export default Search;
