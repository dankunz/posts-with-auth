import { useRecoilState } from "recoil";
import { postsState } from "./postsAtom";

export default function usePosts() {
  const [posts, setPosts] = useRecoilState(postsState);

  return { posts, setPosts };
}
