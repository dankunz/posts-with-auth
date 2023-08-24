import { Box, Text } from "@chakra-ui/react";

export default function StandardError({ error }: { error: Error }) {
  return (
    <Box role="alert">
      <Text>Something went wrong:</Text>
      <Text as="i" color={"red"}>
        {error.message}
      </Text>
    </Box>
  );
}
