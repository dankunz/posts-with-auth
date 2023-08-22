import { Box, Heading } from "@chakra-ui/react";
import { Post } from "../types/types";

type PostTile = {
  post: Post;
};

export default function PostTile({ post }: PostTile) {
  return (
    <Box
      key={post.id}
      bgColor={"blackAlpha.400"}
      rounded={"10"}
      padding={"3"}
      marginBlock={"5"}
      width={700}
    >
      <Heading>{post.title}</Heading>
      <Box>{post.content}</Box>
    </Box>
  );
}
