import { Box, Heading } from "@chakra-ui/react";
import CreatePostForm from "../components/CreatePostForm";

export default function NewPostPage() {
  return (
    <Box className="sentence-form">
      <Heading textAlign={"center"} as="h1" size="xl" mb={"1rem"}>
        Create a new post
      </Heading>
      <CreatePostForm />
    </Box>
  );
}
