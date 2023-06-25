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
    router.push(`${search}`);
  };

  const  SearchInput = tw.input``

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={cx("")}
        />
      </form>
    </div>
  );
};

export default Search;
