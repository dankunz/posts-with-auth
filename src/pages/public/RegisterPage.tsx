import RegisterForm from "../../components/auth/RegisterForm";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
      <Link as={RouterLink} to={"/login"}>
        Already have account?
      </Link>
    </div>
  );
}
