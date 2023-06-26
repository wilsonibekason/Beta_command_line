"use client";

import React from "react";
import getWikiResults from "@/lib/getWikiPages";
import { Result, SearchResult } from "@/types";
import { Metadata } from "next";
import Item from "./components/items";
import Navbar from "../../components/Navbar";
type Props = {
  params: {
    searchTerm: string;
  };
};
export const generateMetadata = async ({
  params: { searchTerm },
}: Props): Promise<Metadata> => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data: SearchResult = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `No results found for    ${displayTerm}`,
    };
  }
  return {
    title: displayTerm,
    description: `This is the description of ${displayTerm}`,
    keywords: ["user", "profile", "information"],
  };
};
const SearchPage = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data.query?.pages;

  return (
    <>
      <Navbar />
      <main>
        {results ? (
          Object.values(results).map((result) => (
            <>
              <Item result={result} key={result.pageid} />
            </>
          ))
        ) : (
          <>
            <p>${searchTerm} not found</p>
          </>
        )}
      </main>
    </>
  );
};

export default SearchPage;
