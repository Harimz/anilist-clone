import { Grid } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import { ContentCard } from "./ContentCard";

export const DisplayContent = ({ data, type }) => {
  const { view } = useSelector((state) => state.views);

  console.log(data);
  console.log(view);
  const viewMode = () => {
    if (view === "grid") return "196px";
    if (view === "card") return "300px";
    if (view === "list") return "100%";
  };

  if (data.length === 5) {
    return (
      <Grid
        templateColumns="repeat(auto-fill, minmax(196px, 1fr))"
        gap={6}
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

  // if (view === "grid") {
  //   return (
  //     <Grid
  //       templateColumns="repeat(auto-fill, minmax(196px, 1fr))"
  //       gap={6}
  //       mb="3rem"
  //     >
  //       {data.map((item) => (
  //         <ContentCard
  //           key={item.mal_id}
  //           imgUrl={item.image_url}
  //           title={item.title}
  //           id={item.mal_id}
  //           type={type}
  //         />
  //       ))}
  //     </Grid>
  //   );
  // }

  return (
    <Grid
      templateColumns={`repeat(auto-fill, minmax(${viewMode()}, 1fr))`}
      gap={6}
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
};
