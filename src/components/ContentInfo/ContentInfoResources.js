import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useColorMode,
  Spinner,
} from "@chakra-ui/react";
import { useGetContentInfoQuery } from "../../services/anilistApi";
import { BsDot } from "react-icons/bs";
import ReactPlayer from "react-player";

export const ContentInfoResources = ({ related, trailer }) => {
  const values = Object.values(related).flat();

  const first = {
    type: values[0]?.type || "anime",
    id: values[0]?.mal_id || 40456,
  };
  const second = {
    type: values[1]?.type || "anime",
    id: values[1]?.mal_id || 40456,
  };
  const { data: data1, isFetching: isFetching1 } = useGetContentInfoQuery({
    type: first.type,
    id: first.id,
  });
  const { data: data2, isFetching: isFetching2 } = useGetContentInfoQuery({
    type: second.type,
    id: second.id,
  });
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  if (isFetching1) return <Spinner color="white" margin="0 auto" />;

  if (isFetching2) return <Spinner color="white" margin="0 auto" />;

  return (
    <Flex w="100%" ml="3rem" direction="column">
      <Text color="gray.200" fontSize="1.25rem" mb="1rem">
        Relations
      </Text>
      <Flex gridGap="2rem">
        <Flex bgColor={isDark ? "blue.400" : "white"} w="100%">
          <Image src={data1?.image_url || ""} h="10rem" />
          <Box ml="2rem">
            <Text color="gray.400" mt="2rem" fontWeight="semibold">
              <Link to={`/${first.type}/${data1.mal_id}`}>{data1.title}</Link>
            </Text>
            <HStack color="gray.400" mt="3rem">
              <Text>{data1.type}</Text>
              <BsDot />
              <Text>{data1.status}</Text>
            </HStack>
          </Box>
        </Flex>
        <Flex bgColor={isDark ? "blue.400" : "white"} w="100%">
          <Image src={data2?.image_url || ""} h="10rem" />
          <Box ml="2rem">
            <Text color="gray.400" mt="2rem" fontWeight="semibold">
              <Link to={`/${second?.type}/${data2?.mal_id || ""}`}>
                {data2.title}
              </Link>
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
