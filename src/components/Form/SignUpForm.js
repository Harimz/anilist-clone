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
import { formOptions } from "../../helpers";
import { useRegisterMutation } from "../../app/services/userApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../app/userSlice";
import { useNavigate } from "react-router-dom";
import { ErrorBox } from "./ErrorBox";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm(formOptions);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [serverError, setServerError] = useState("");

  const submitHandler = async (data) => {
    try {
      const { email, password, username, confirmPassword } = data;

      const user = await registerUser({
        email,
        password,
        username,
        confirmPassword,
      });

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
          <Text color="red.200">{errors.username?.message}</Text>
          <Text color="red.200">{errors.password?.message}</Text>
          <Text color="red.200">{errors.confirmPassword?.message}</Text>
        </ErrorBox>
      }

      <Container
        maxW="30rem"
        bgColor={isDark ? "blue.400" : "white"}
        mt="5rem"
        p={{ base: "1rem", lg: "3rem" }}
        mb="25rem"
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
              placeholder="Username"
              {...register("username")}
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
            <Input
              bgColor={isDark ? "blue.700" : "gray.50"}
              variant="unstyled"
              p="0.75rem"
              color="gray.400"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              mb="4rem"
            />
            <Button variant="form" type="submit">
              {isLoading ? <Spinner color="white" /> : "Sign Up"}
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
};
