import { Box, Heading } from "@chakra-ui/react";
import CreatePostForm from "../components/posts/CreatePostForm";

export default function NewPostPage() {
  return (
    <Box>
      <Heading textAlign={"center"} as="h1" size="xl" mb={"2rem"}>
        Create a new post
      </Heading>
      <CreatePostForm />
    </Box>
  );
}
