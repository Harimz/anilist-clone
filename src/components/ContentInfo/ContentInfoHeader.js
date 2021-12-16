import React from "react";
import {
  Container,
  Flex,
  Text,
  Image,
  Button,
  IconButton,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";
import { EntryModal } from "./Modals/EntryModal";
import { useCheckList, useIsDark } from "../../hooks";

export const ContentInfoHeader = ({
  img,
  title,
  synopsis,
  id,
  type,
  episodes,
  volumes,
  animeType,
  mangaType,
}) => {
  const [isMobile] = useMediaQuery("(max-width: 550px)");
  const { isDark } = useIsDark();
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { content } = useCheckList(type, id, user);

  const saved = Object.keys(content).length !== 0;

  return (
    <>
      <EntryModal
        onClose={onClose}
        image={img}
        id={id}
        type={type}
        title={title}
        episodeCount={episodes}
        volumeCount={volumes}
        animeType={animeType}
        mangaType={mangaType}
        isOpen={isOpen}
        content={content}
      />

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
            <Flex mt="1.5rem" justify="center" w="100%">
              <Button
                fontWeight="normal"
                bgColor="blue.150"
                color="white"
                disabled={user ? false : true}
                _hover={{}}
                onClick={onOpen}
                w="100%"
              >
                {saved ? content.status : "Add to List"}
              </Button>
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
    </>
  );
};
