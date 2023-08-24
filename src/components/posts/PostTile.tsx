import { Box, Text } from "@chakra-ui/react";
import { Post } from "../../types/types";

type PostTile = {
  post: Post;
};

export default function PostTile({ post }: PostTile) {
  return (
    <Box
      key={post.id}
      bgColor={"cyan.700"}
      rounded={"10"}
      padding={"3"}
      marginBlock={"5"}
      color="white"
    >
      <Text as="b" fontSize={"3xl"}>
        {post.title}
      </Text>
      <Text>{post.content}</Text>
      <Text as="i">{post.authorId}</Text>
    </Box>
  );
}
