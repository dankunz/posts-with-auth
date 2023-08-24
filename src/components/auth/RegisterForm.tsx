import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "../../api/publicAxios";
import { RegisterUser } from "../../types/types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<RegisterUser>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterUser> = (values) => {
    delete values["confirmPassword"];
    axios
      .post("/auth/signup", {
        ...values,
      })
      .then(() => {
        toast.success("Account created");
        navigate("/login");
      })
      .catch(() => toast.error("Account cannot be created"));
  };

  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          id="name"
          placeholder={"example@google.com"}
          {...register("email", {
            required: "This is required",
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address it not valid",
            },
          })}
        />
        <FormErrorMessage>
          <>{errors.email && errors.email.message}</>
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.firstname}>
        <FormLabel>First Name:</FormLabel>
        <Input
          id="firstname"
          placeholder={"John"}
          {...register("firstname", {
            required: "This is required",
          })}
        />
        <FormErrorMessage>
          <>{errors.firstname && errors.firstname.message}</>
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.lastname}>
        <FormLabel>Last Name:</FormLabel>
        <Input
          id="lastname"
          placeholder={"Doe"}
          {...register("lastname", {
            required: "This is required",
          })}
        />
        <FormErrorMessage>
          <>{errors.lastname && errors.lastname.message}</>
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
        <FormLabel>Password:</FormLabel>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This is required",
            minLength: { value: 8, message: "Minimum length should be 8" },
          })}
        />
        <FormErrorMessage>
          <>{errors.password && errors.password.message}</>
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.confirmPassword}>
        <FormLabel>Password again:</FormLabel>
        <Input
          autoComplete="new-password"
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "This is required",
            validate: (val: string = "") => {
              if (watch("password") != val) {
                return "Your passwords do no match";
              }
            },
          })}
        />
        <FormErrorMessage>
          <>{errors.confirmPassword && errors.confirmPassword.message}</>
        </FormErrorMessage>
      </FormControl>
      <Stack mt={"1rem"}>
        <Button colorScheme="teal" variant="solid" type="submit">
          Register
        </Button>
      </Stack>
    </Box>
  );
}
