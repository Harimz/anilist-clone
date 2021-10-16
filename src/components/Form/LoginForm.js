import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  CloseButton,
  Container,
  Flex,
  Heading,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { loginOptions } from "../../helpers";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  const { firebase } = useSelector((state) => state.firebase);
  const history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(loginOptions);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const noErrors = Object.keys(errors).length === 0;

  const submitHandler = (data) => {
    const { email, password, username } = data;

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => history.push("/anime"));
  };

  // Fix error alert message, set to close on click

  return (
    <>
      <Alert
        status="error"
        display="flex"
        position="fixed"
        left="50%"
        transform={`translate(-50%, ${noErrors ? "-10rem" : "2rem"})`}
        maxW="35rem"
        bgColor="red.100"
        color="red.200"
        fontWeight="bold"
        borderRadius="0.5rem"
        transition="all 0.3s ease"
      >
        <AlertIcon />
        <Flex direction="column">
          <AlertDescription>{errors.email?.message}</AlertDescription>
          <AlertDescription>{errors.username?.message}</AlertDescription>
          <AlertDescription>{errors.password?.message}</AlertDescription>
          <AlertDescription>{errors.confirmPassword?.message}</AlertDescription>
        </Flex>
        <CloseButton
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          right="1rem"
        />
      </Alert>

      <Container
        maxW="30rem"
        bgColor={isDark ? "blue.400" : "white"}
        mt="5rem"
        p={{ base: "1rem", lg: "3rem" }}
        mb="35rem"
      >
        <form onSubmit={handleSubmit(submitHandler)}>
          <Flex direction="column" align="center">
            <Heading size="lg" color="gray.400" textAlign="center" mb="4rem">
              Sign up to AniClone
            </Heading>
            <Input
              bgColor={isDark ? "blue.700" : "gray.50"}
              variant="unstyled"
              p="0.75rem"
              color="gray.400"
              placeholder="Email"
              {...register("email")}
              mb="2rem"
            />

            <Input
              bgColor={isDark ? "blue.700" : "gray.50"}
              variant="unstyled"
              p="0.75rem"
              color="gray.400"
              placeholder="Password"
              type="password"
              {...register("password")}
              mb="2rem"
            />

            <Button variant="form" type="submit">
              Login
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
};
