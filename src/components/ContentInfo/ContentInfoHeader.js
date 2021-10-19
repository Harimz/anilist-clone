import React from "react";
import {
  Container,
  Flex,
  Text,
  Image,
  useColorMode,
  Button,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

export const AnimeInfoHeader = ({ img, title, synopsis }) => {
  const { colorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 550px)");
  const isDark = colorMode === "dark";

  return (
    <Flex bgColor={isDark ? "blue.400" : "white"} p="1rem">
      <Container
        maxW="container.xl"
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
      >
        <Flex
          mt="5rem"
          align="center"
          direction={{ base: "row", lg: "column" }}
        >
          <Image
            src={img}
            mr="1rem"
            h={{ base: "8rem", sm: "12rem", md: "14rem", lg: "auto" }}
            margin={{ base: "", lg: "auto" }}
          />
          <Flex mt="1.5rem" w={{ base: "100%", lg: "" }}>
            <Button
              mr="1rem"
              w={{ base: "100%", lg: "" }}
              fontWeight="normal"
              bgColor="blue.150"
              color="white"
              _hover={{}}
            >
              Add to List
            </Button>
            <IconButton
              bgColor="red.300"
              icon={<AiFillHeart style={{ color: "white" }} />}
              _hover={{}}
            />
          </Flex>
        </Flex>
        <Flex
          justify="center"
          ml="2rem"
          direction="column"
          mt={{ base: "3rem", lg: "" }}
          w="100%"
          textAlign={{ base: "center", lg: "start" }}
        >
          <Text
            color="gray.200"
            fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
          >
            {title}
          </Text>
          {!isMobile && <Text color="gray.500">{synopsis}</Text>}
        </Flex>
      </Container>
    </Flex>
  );
};
