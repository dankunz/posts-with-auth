import axios from "axios";
import dayjs from "dayjs";

const baseURL = "https://frontend-test-be.stage.thinkeasy.cz";
import { useAuthUser } from "react-auth-kit";
import { useAuthHeader } from "react-auth-kit";
import jwt_decode from "jwt-decode";

export default function useAxios() {
  const authUser = useAuthUser();
  const authHeader = useAuthHeader();
  const headers = {
    "Content-Type": "application/json",
    Authorization: authHeader(),
  };
  const axiosInstance = axios.create({
    baseURL,
    headers,
  });
  if (!authUser()) return axiosInstance;

  axiosInstance.interceptors.request.use(async (req) => {
    const data = authUser();
    const user = data?.accessToken;
    const { exp }: { exp: number } = jwt_decode(user);
    const isExpired = dayjs.unix(exp).diff(dayjs()) < 1;
    console.log("isExpired", isExpired);
    //if (!isExpired) return req;
    console.log("data?.refreshToken", data?.refreshToken);

    const res = await axios.post(
      `${baseURL}/auth/refresh-token`,
      {
        token: data?.refreshToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader(),
        },
      }
    );
    console.log("new token?", res);
    console.log("new token?", res);
    req.headers.Authorization = `Bearer ${res.data.access_token}`;
    return req;
  });
  return axiosInstance;
}
