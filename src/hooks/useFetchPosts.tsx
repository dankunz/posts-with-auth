import { useEffect } from "react";
import usePosts from "../recoil/usePosts";
import useAxios from "./useAxios";

export default function useFetchPosts() {
  const { setPosts } = usePosts();
  const axios = useAxios();
  useEffect(() => {
    axios.get("/posts").then(({ data }) => {
      //const uniqueIds: string[] = [];

      /*  for (const obj of res2) {
          if (!uniqueIds.includes(obj.id)) {
            uniqueIds.push(obj.id);
          }
        } */
      setPosts(data);
    });
  }, []);
}
