import LoginForm from "../../components/auth/LoginForm";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AuthFormWrapper from "../../components/auth/AuthFormWrapper";

export default function LoginPage() {
  return (
    <AuthFormWrapper>
      <Heading mb={8}>Login</Heading>
      <LoginForm />
      <Link to={"/register"}>Don't have an account?</Link>
    </AuthFormWrapper>
  );
}
