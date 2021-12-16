import { Grid } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import { ContentCard } from "./Cards/ContentCard";
import { LargeCard } from "./Cards/LargeCard";
import { ListCard } from "./Cards/ListCard";

export const DisplayContent = ({ data, type }) => {
  const { view } = useSelector((state) => state.views);

  if (data.length === 5 || view === "grid") {
    return (
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(156px, 1fr))",
          md: "repeat(auto-fit, minmax(196px, 1fr))",
        }}
        gap={{ base: 0, md: 6 }}
        mb="3rem"
      >
        {data.map((item) => (
          <ContentCard
            key={item.mal_id}
            imgUrl={item.image_url}
            title={item.title}
            id={item.mal_id}
            type={type}
          />
        ))}
      </Grid>
    );
  }

  if (view === "card") {
    return (
      <Grid
        templateColumns={{
          base: `repeat(auto-fill, minmax(250px, 1fr))`,
          md: `repeat(auto-fill, minmax(350px, 1fr))`,
          lg: `repeat(auto-fill, minmax(450px, 1fr))`,
        }}
        gap={6}
      >
        {data.map((item) => (
          <LargeCard key={item.mal_id} data={item} type={type} />
        ))}
      </Grid>
    );
  }

  return (
    <Grid templateColumns={`repeat(1, 1fr)`} gap={6}>
      {data.map((item) => (
        <ListCard key={item.mal_id} data={item} type={type} />
      ))}
    </Grid>
  );
};
