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
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";
import { AddContent } from "./AddContent";

export const AnimeInfoHeader = ({ img, title, synopsis, image, id, type }) => {
  const { colorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 550px)");
  const isDark = colorMode === "dark";
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} size="5xl" closeOnOverlayClick={false}>
        <ModalOverlay />
        <AddContent
          onClose={onClose}
          image={image}
          id={id}
          type={type}
          title={title}
        />
      </Modal>

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
                disabled={user ? false : true}
                _hover={{}}
                onClick={onOpen}
              >
                Add to List
              </Button>
              <IconButton
                bgColor="red.300"
                icon={<AiFillHeart style={{ color: "white" }} />}
                disabled={user ? false : true}
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
    </>
  );
};
