import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeGenres } from "../../app/filterSlice";

export const FilterTag = ({ genre, tagId }) => {
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const removeHandler = () => {
    console.log(tagId);
    dispatch(removeGenres({ genre: tagId }));
  };

  return (
    <Flex
      bgColor="blue.150"
      p="0.15rem 0.5rem"
      borderRadius="md"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      align="center"
    >
      <Text
        color="white"
        fontWeight="semibold"
        fontSize="sm"
        mr={isHovering ? "0.5rem" : ""}
      >
        {genre}
      </Text>
      <FaTimes
        size={12}
        style={{ display: isHovering ? "block" : "none", color: "white" }}
        cursor="pointer"
        onClick={removeHandler}
      />
    </Flex>
  );
};
