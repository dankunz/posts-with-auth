import { Button, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";

type NavigationLinkProps = {
  text: string;
  url: string;
};

const NavigationLink = ({ text, url }: NavigationLinkProps) => (
  <Link as={RouterLink} to={url}>
    {text}
  </Link>
);
export default function NavigationBar() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const logout = () => {
    signOut();
    navigate("/login");
  };
  return (
    <>
      <Flex bg="cyan.800" justify={"space-between"} padding={"5"}>
        <Heading color={"white"}> Posts App</Heading>
        <Button colorScheme="cyan" onClick={logout}>
          {" "}
          Logout{" "}
        </Button>
      </Flex>
      <Flex bg="gray.300" padding={"5"} gap={"20"}>
        <NavigationLink text="All Posts" url="/" />
        <NavigationLink text="Create Post" url="/new" />
      </Flex>
    </>
  );
}
