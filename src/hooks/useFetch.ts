import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
const baseURL = "https://frontend-test-be.stage.thinkeasy.cz";

type useAxiosType = {
  url: string;
  type: "get";
  values?: unknown[];
};

function useFetch({ url, type, values }: useAxiosType) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const authHeader = useAuthHeader();
  const token = authHeader();

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    const axiosInstance = axios.create({
      baseURL,
      headers,
    });
    const source = axios.CancelToken.source();

    axiosInstance
      .get(url, { cancelToken: source.token })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      source.cancel("Request canceled by cleanup");
    };
  }, [url, token, values, type]);

  return { data, loading, error };
}

export default useFetch;
