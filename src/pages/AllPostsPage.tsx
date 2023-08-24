import { Box, Center, Heading } from "@chakra-ui/react";
import PostsFilter from "../components/posts/PostsFilter";
import { ErrorBoundary } from "react-error-boundary";
import PostsList from "../components/posts/PostsList";
import StandardError from "../components/errors/StandardError";

export default function AllPostsPage() {
  return (
    <Center>
      <Box width={800}>
        <Heading mb={10}>All Posts </Heading>
        <PostsFilter />
        <ErrorBoundary FallbackComponent={StandardError}>
          <PostsList />
        </ErrorBoundary>
      </Box>
    </Center>
  );
}
