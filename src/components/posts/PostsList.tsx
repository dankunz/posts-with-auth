import React, { useMemo, useState, useEffect } from "react";
import usePosts from "../../recoil/usePosts";
import usePostFilters from "../../recoil/usePostFilters";
import type { Post } from "../../types/types";
import PostTile from "./PostTile";
import { useErrorBoundary } from "react-error-boundary";
import Pagianation from "../Pagination";
import useFetch from "../../hooks/useFetch";
import { Spinner } from "@chakra-ui/react";

const POSTS_PER_PAGE = 10;

export default function PostsList() {
  const { showBoundary } = useErrorBoundary();
  const { posts, setPosts } = usePosts();
  const { postFilters } = usePostFilters();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { data, loading, error } = useFetch({ url: "/posts", type: "get" });
  useEffect(() => {
    setPosts(data);
  }, [setPosts, data]);

  const filteredPosts = useMemo(
    () =>
      posts
        .filter((post: Post) => {
          const content = post.content.toLocaleLowerCase();
          const title = post.title.toLocaleLowerCase();
          const query = postFilters.query.toLocaleLowerCase();
          return (
            (content.includes(query) || title.includes(query)) &&
            (postFilters.userId ? post.authorId === postFilters.userId : true)
          );
        })
        .slice(
          POSTS_PER_PAGE * currentPage,
          POSTS_PER_PAGE * currentPage + POSTS_PER_PAGE
        ),
    //It would be better to have this functionality on backend something like:
    //  `SELECT * from posts LIMIT ${limit} OFFSET ${offset};`,
    [posts, postFilters, currentPage]
  );

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    showBoundary(error);
  }

  return (
    <>
      {filteredPosts.map(
        (post: Post): React.ReactNode => (
          <PostTile key={post.id} post={post} />
        )
      )}
      <Pagianation
        currentPage={currentPage}
        recordCount={posts.length}
        limit={POSTS_PER_PAGE}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </>
  );
}
