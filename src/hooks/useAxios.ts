import axios from "axios";
const baseURL = "https://frontend-test-be.stage.thinkeasy.cz";
import { useAuthHeader } from "react-auth-kit";

const source = axios.CancelToken.source();

export default function useAxios() {
  const authHeader = useAuthHeader();
  const headers = {
    "Content-Type": "application/json",
    Authorization: authHeader(),
  };
  const api = axios.create({
    baseURL,
    headers,
  });
  return { api, source };
}
