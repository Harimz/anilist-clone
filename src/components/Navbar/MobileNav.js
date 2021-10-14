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
        />
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent
          bgColor="blue.400"
          position="fixed"
          right="2rem"
          bottom="-1.5rem"
          w="18rem"
        >
          <SimpleGrid columns={3} spacing={6} p="1.5rem">
            <Link>
              <MobileNavItem
                icon={<BsFillChatFill size={24} style={{ color: "#748899" }} />}
                text="forum"
              />
            </Link>

            <Link>
              <MobileNavItem
                icon={<FaUsers size={24} style={{ color: "#748899" }} />}
                text="social"
              />
            </Link>

            <Link>
              <MobileNavItem
                icon={<FaSearch size={24} style={{ color: "#748899" }} />}
                text="search"
              />
            </Link>

            <Link>
              <MobileNavItem
                icon={<FaUserPlus size={24} style={{ color: "#748899" }} />}
                text="sign up"
              />
            </Link>

            <Link>
              <MobileNavItem
                icon={<FaSignInAlt size={24} style={{ color: "#748899" }} />}
                text="login"
              />
            </Link>

            <Link>
              <MobileNavItem
                icon={<FaTimes size={24} style={{ color: "#748899" }} />}
              />
            </Link>
          </SimpleGrid>
        </ModalContent>
      </Modal>
    </>
  );
};
