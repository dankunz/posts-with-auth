import RegisterForm from "../../components/auth/RegisterForm";
import { Link as RouterLink } from "react-router-dom";
import { Heading, Link } from "@chakra-ui/react";
import AuthFormWrapper from "../../components/auth/AuthFormWrapper";

export default function RegisterPage() {
  return (
    <div>
      <AuthFormWrapper>
        <Heading mb={5}>Register</Heading>
        <RegisterForm />
        <Link pt={5} as={RouterLink} to={"/login"}>
          Already have account?
        </Link>
      </AuthFormWrapper>
    </div>
  );
}
