import { Box, Center } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AuthFormWrapper({ children }: Props) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgGradient="linear(to-r, cyan.200, pink.500)"
    >
      <Center h="100vh" flexDir={"column"}>
        <Box bgColor={"white"} p={"10"} borderRadius={15} width={400}>
          {children}
        </Box>
      </Center>
    </Box>
  );
}
