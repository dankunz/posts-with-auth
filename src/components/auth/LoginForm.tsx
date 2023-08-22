import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignIn } from "react-auth-kit";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useAuthUser } from "react-auth-kit";
import { useAuthHeader } from "react-auth-kit";
type FormValues = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const signIn = useSignIn();
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  console.log("auth", auth());
  console.log("authHeader", authHeader());
  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    await axios
      .post("/auth/login", { ...values })
      .then(({ data }) => {
        console.log("refresh token save it please", data);
        signIn({
          token: data.accessToken,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: {
            ...data.user,
            refreshToken: data.refreshToken,
            accessToken: data.accessToken,
          },
        });
        toast.success("Successfully logged in");
        navigate("/");
      })
      .catch((e) => {
        if (e.response.status === 404) {
          toast.error("Invalid email");
        } else if (e.response.status === 400) {
          toast.error("Invalid password");
        } else {
          toast.error("Something went wrong please contact admin");
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          id="name"
          placeholder={"example@google.com"}
          {...register("email", {
            required: "This is required",
          })}
        />
        <FormErrorMessage>
          <>{errors.email && errors.email.message}</>
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <FormLabel>Password:</FormLabel>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This is required",
          })}
        />
        <FormErrorMessage>
          <>{errors.password && errors.password.message}</>
        </FormErrorMessage>
      </FormControl>
      <Stack mt={"1rem"}>
        <Button colorScheme="teal" variant="solid" type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
}
