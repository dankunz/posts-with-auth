import { useRecoilState } from "recoil";
import { postsFilterState } from "./postsFilterAtom";

export default function usePostFilters() {
  const [postFilters, setPostFilters] = useRecoilState(postsFilterState);
  return { postFilters, setPostFilters };
}
