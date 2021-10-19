import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useGetContentInfoQuery } from "../../services/anilistApi";
import { BsDot } from "react-icons/bs";
import ReactPlayer from "react-player";

export const ContentInfoResources = ({ related, trailer }) => {
  const first = { type: related[0].type, id: related[0].mal_id };
  const second = { type: related[1].type, id: related[1].mal_id };
  const { data: data1, isFetching: isFetching1 } = useGetContentInfoQuery({
    type: first.type,
    id: first.id,
  });
  const { data: data2, isFetching: isFetching2 } = useGetContentInfoQuery({
    type: second.type,
    id: second.id,
  });
  console.log(related);

  if (isFetching1) return "loading...";

  if (isFetching2) return "loading...";

  console.log(data1);
  console.log(data2);

  return (
    <Flex w="100%" ml="3rem" direction="column">
      <Text color="gray.200" fontSize="1.25rem" mb="1rem">
        Relations
      </Text>
      <Flex gridGap="2rem">
        <Flex bgColor="blue.400" w="100%">
          <Image src={data1.image_url} h="10rem" />
          <Box ml="2rem">
            <Text color="gray.200" mt="2rem">
              <Link to={`/${first.type}/${data1.mal_id}`}>{data1.title}</Link>
            </Text>
            <HStack color="gray.400" mt="3rem">
              <Text>{data1.type}</Text>
              <BsDot />
              <Text>{data1.status}</Text>
            </HStack>
          </Box>
        </Flex>
        <Flex bgColor="blue.400" w="100%">
          <Image src={data2.image_url} h="10rem" />
          <Box ml="2rem">
            <Text color="gray.200" mt="2rem">
              <Link to={`/${second.type}/${data2.mal_id}`}>{data2.title}</Link>
            </Text>
            <HStack color="gray.400" mt="3rem">
              <Text>{data2.type}</Text>
              <BsDot />
              <Text>{data2.status}</Text>
            </HStack>
          </Box>
        </Flex>
      </Flex>

      <Text color="gray.200" mt="3rem" fontSize="1.5rem">
        Trailer
      </Text>
      <ReactPlayer
        controls
        url={trailer}
        style={{ margin: "2rem auto" }}
        width="100%"
        height="35rem"
      />
    </Flex>
  );
};
