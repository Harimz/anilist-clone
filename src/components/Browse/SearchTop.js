import React from "react";
import { useParams } from "react-router-dom";
import { useSearchTopQuery } from "../../app/services/contentApi";
import { BrowseContent } from "./BrowseContent";

export const SearchTop = () => {
  const { content, searchType } = useParams();
  const { data, isFetching } = useSearchTopQuery({ content, searchType });

  if (isFetching) {
    return "loading...";
  }

  return <BrowseContent data={data.top} type={content} amount={100} />;
};
