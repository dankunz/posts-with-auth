import { Flex, Input, Select, Text } from "@chakra-ui/react";
import { Post } from "../../types/types";
import usePostFilters from "../../recoil/usePostFilters";
import usePosts from "../../recoil/usePosts";
import { useMemo } from "react";

export default function PostsFilter() {
  const { setPostFilters } = usePostFilters();
  const { posts } = usePosts();

  const uniqueUsers = useMemo(
    () => [...new Set(posts.map((post): string => post.authorId))],
    [posts]
  );

  return (
    <Flex gap={50} alignItems={"center"} flexWrap={"nowrap"}>
      <Text minWidth={100}>Content filter:</Text>
      <Input
        onChange={(e) =>
          setPostFilters((prev) => ({ ...prev, query: e.target.value }))
        }
      />
      <Text minWidth={90}>User Id:</Text>

      <Select
        placeholder="Select option"
        onChange={(e) =>
          setPostFilters((prev) => ({ ...prev, userId: e.target.value }))
        }
      >
        {uniqueUsers.map((id: Post["id"]) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </Select>
    </Flex>
  );
}
