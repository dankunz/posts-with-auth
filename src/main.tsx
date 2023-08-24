import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "react-auth-kit";
import { ChakraProvider } from "@chakra-ui/react";
import refreshApi from "./api/refreshApi.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
        refresh={refreshApi}
      >
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </AuthProvider>
    </ChakraProvider>
    <ToastContainer />
  </React.StrictMode>
);
