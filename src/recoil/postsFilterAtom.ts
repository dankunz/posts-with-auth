import { atom } from "recoil";
import { PostFilters } from "../types/types";

export const postsFilterState = atom<PostFilters>({
  key: "postsFilterState",
  default: { query: "", userId: "" },
});
