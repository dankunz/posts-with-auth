import { Box } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPostsPage from "./pages/AllPostsPage";
import NewPostPage from "./pages/NewPostPage";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Box padding={10}>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth loginPath={"/login"}>
                <AllPostsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/new"
            element={
              <RequireAuth loginPath={"/login"}>
                <NewPostPage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
