import React, { useState } from "react";
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { loginOptions } from "../../helpers";
import { useLoginMutation } from "../../app/services/userApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../app/userSlice";
import { useNavigate } from "react-router";
import { ErrorBox } from "./ErrorBox";

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm(loginOptions);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const submitHandler = async (data) => {
    try {
      const { email, password } = data;
      const user = await loginUser({ email, password });

      if (user.error) {
        throw new Error(user.error.data.message);
      }

      dispatch(
        setCredentials({ token: user.data.token, user: user.data.user })
      );

      navigate("/search/anime");
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <>
      {
        <ErrorBox error={serverError} closeError={() => setServerError("")}>
          <Text color="red.200">{serverError}</Text>
        </ErrorBox>
      }

      {
        <ErrorBox
          error={Object.keys(errors).length !== 0}
          closeError={() => {
            clearErrors();
          }}
        >
          <Text color="red.200">{errors.email?.message}</Text>
          <Text color="red.200">{errors.password?.message}</Text>
        </ErrorBox>
      }

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
              Login
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
              {isLoading ? <Spinner /> : "Login"}
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
};
