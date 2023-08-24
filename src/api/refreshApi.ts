import { createRefresh } from "react-auth-kit";
import axios from "./publicAxios";

const refreshApi = createRefresh({
  interval: 5,
  refreshApiCallback: async ({ authToken, refreshToken }) => {
    try {
      const response = await axios.post(
        "/auth/refresh-token",
        { token: refreshToken },
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      return {
        isSuccess: true,
        newAuthToken: response.data.access_token,
        newAuthTokenExpireIn: 10,
        newRefreshTokenExpiresIn: 60,
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
      };
    }
  },
});

export default refreshApi;
