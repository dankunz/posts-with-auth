import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Outlet, Link as RouterLink, useNavigate } from "react-router-dom";
import { useSignOut, useAuthUser } from "react-auth-kit";

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
  const user = useAuthUser();
  const navigate = useNavigate();
  const logout = () => {
    signOut();
    navigate("/login");
  };
  return (
    <>
      <Flex bg="cyan.800" justify={"space-between"} padding={"5"}>
        <Heading color={"white"}> Posts App</Heading>
        <Flex gap={10} alignItems={"center"} color={"white"}>
          <Text>{`${user()?.firstname} ${user()?.lastname}`}</Text>
          <Button colorScheme="cyan" onClick={logout}>
            Logout
          </Button>
        </Flex>
      </Flex>
      <Flex bg="gray.300" padding={"5"} gap={"20"}>
        <NavigationLink text="All Posts" url="/" />
        <NavigationLink text="Create Post" url="/new" />
      </Flex>
      <Box mb={10}></Box>
      <Outlet />
    </>
  );
}
