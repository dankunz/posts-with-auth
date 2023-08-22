import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Box width={500}>
        <LoginForm />
        <Link to={"/register"}>Don't have an account?</Link>
      </Box>
    </Box>
  );
}
