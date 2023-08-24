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
      <Routes>
        <Route element={<NavigationBar />}>
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
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
