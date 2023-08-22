import { Box, Heading, Spinner } from "@chakra-ui/react";
import React, { Suspense, useMemo } from "react";
import { Post } from "../types/types";
import PostTile from "../components/PostTile";
import usePosts from "../recoil/usePosts";
import useFetchPosts from "../hooks/useFetchPosts";
import usePostFilters from "../recoil/usePostFilters";
import PostsFilter from "../components/PostsFilter";

export default function AllPostsPage() {
  useFetchPosts();
  const { posts } = usePosts();

  const { postFilters } = usePostFilters();
  const filteredPosts = useMemo(
    () =>
      posts.filter((post: Post) => {
        return (
          post.content.includes(postFilters.query) &&
          (postFilters.userId ? post.authorId === postFilters.userId : true)
        );
      }),
    [posts, postFilters]
  );
  console.log(posts);

  return (
    <Box>
      <Heading mb={10}>All Posts </Heading>
      <PostsFilter />
      <Suspense fallback={<Spinner />}>
        {filteredPosts.map(
          (post: Post): React.ReactNode => (
            <PostTile key={post.id} post={post} />
          )
        )}
      </Suspense>
    </Box>
  );
}
