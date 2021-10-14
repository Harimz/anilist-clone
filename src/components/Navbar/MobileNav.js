import React from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  useColorMode,
  useDisclosure,
  Modal,
  ModalContent,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaBars,
  FaUsers,
  FaSearch,
  FaUserPlus,
  FaSignInAlt,
  FaTimes,
} from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { MobileNavItem } from "./MobileNavItem";

export const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  console.log(isOpen);

  return (
    <>
      {!isOpen && (
        <IconButton
          bgColor={isDark ? "blue.400" : "white"}
          icon={<FaBars style={{ color: "rgb(61, 180, 242)" }} size={32} />}
          position="fixed"
          right="2rem"
          bottom="2rem"
          size="lg"
          onClick={onOpen}
          zIndex={999}
        />
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent
          bgColor={isDark ? "blue.400" : "white"}
          position="fixed"
          right="2rem"
          bottom="-1.5rem"
          w="15rem"
        >
          <SimpleGrid columns={3} spacing={6} p="1.5rem">
            <Link to="/forum">
              <MobileNavItem icon={BsFillChatFill} text="forum" />
            </Link>

            <Link to="/social">
              <MobileNavItem icon={FaUsers} text="social" />
            </Link>

            <Link to="/anime/search">
              <MobileNavItem icon={FaSearch} text="search" />
            </Link>

            <Link to="/signup">
              <MobileNavItem icon={FaUserPlus} text="sign up" />
            </Link>

            <Link to="/login">
              <MobileNavItem icon={FaSignInAlt} text="login" />
            </Link>

            <MobileNavItem icon={FaTimes} onClick={onClose} cursor="pointer" />
          </SimpleGrid>
        </ModalContent>
      </Modal>
    </>
  );
};
