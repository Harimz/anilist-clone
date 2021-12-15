import React from "react";
import { Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../app/userSlice";
import { useIsDark } from "../../hooks";

export const UserHoverBox = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isDark } = useIsDark();

  const logoutHandler = () => {
    dispatch(logout());

    navigate("/");
  };

  return (
    <SimpleGrid
      gridAutoFlow="row"
      p="1.5rem"
      gap="1rem"
      bgColor={isDark ? "blue.400" : "white"}
    >
      <Flex align="center">
        <FaUser size={18} style={{ color: "#A0B1C5" }} />
        <Link to={`/user/${user.username}`}>
          <Text color="#A0B1C5" ml="1rem" fontWeight="semibold">
            Profile
          </Text>
        </Link>
      </Flex>
      <Flex align="center" cursor="pointer" onClick={logoutHandler}>
        <FaSignOutAlt size={18} style={{ color: "#A0B1C5" }} />
        <Text color="#A0B1C5" ml="1rem" fontWeight="semibold">
          Logout
        </Text>
      </Flex>
    </SimpleGrid>
  );
};
