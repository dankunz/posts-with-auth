import { atom } from "recoil";
import { Post } from "../types/types";

export const postsState = atom<Post[]>({
  key: "postsState",
  default: [],
});
