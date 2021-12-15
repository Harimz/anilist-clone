import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IconButton,
  useDisclosure,
  Modal,
  ModalContent,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaBars,
  FaSearch,
  FaUserPlus,
  FaSignInAlt,
  FaTimes,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { MobileNavItem } from "./MobileNavItem";
import { useIsDark } from "../../hooks";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../app/userSlice";

export const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isDark } = useIsDark();
  const { user } = useAuth();

  const logoutHandler = () => {
    dispatch(logout());

    navigate("/");
  };

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
          display={{ base: "flex", md: "none" }}
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
            {user && (
              <Link to={`/user/${user.username}`}>
                <MobileNavItem icon={FaUser} text="profile" onClick={onClose} />
              </Link>
            )}

            <Link to="/search/anime">
              <MobileNavItem icon={FaSearch} text="search" onClick={onClose} />
            </Link>

            {user && (
              <MobileNavItem
                icon={FaSignOutAlt}
                text="logout"
                onClick={() => {
                  logoutHandler();
                  onClose();
                }}
                cursor="pointer"
              />
            )}

            {!user && (
              <Link to="/signup">
                <MobileNavItem
                  icon={FaUserPlus}
                  text="sign up"
                  onClick={onClose}
                />
              </Link>
            )}

            {!user && (
              <Link to="/login">
                <MobileNavItem
                  icon={FaSignInAlt}
                  text="login"
                  onClick={onClose}
                />
              </Link>
            )}

            <MobileNavItem icon={FaTimes} onClick={onClose} cursor="pointer" />
          </SimpleGrid>
        </ModalContent>
      </Modal>
    </>
  );
};
