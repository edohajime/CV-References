import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import "./css/bootstrap.min.css";
import "./css/home.css";
import "./css/login.css";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfiles";
import PostDetailPage from "./pages/PostDetailPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import ContactPage from "./pages/ContactPage";
import CategoryPage from "./pages/CategoryPage";
import WriterDetailPage from "./pages/WriterDetailPage";
import AboutUsPage from "./pages/AboutUsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createContext, useEffect, useState } from "react";
import UserContext from "./pages/components/UserContext";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      console.log(sessionStorage.getItem("user"));
      setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home user={user} />,
    },
    {
      path: "/my-profiles",
      element: <MyProfile />,
    },
    {
      path: "/post-detail",
      element: <PostDetailPage />,
    },
    {
      path: "/update-profile",
      element: <UpdateProfilePage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/categories",
      element: <CategoryPage />,
    },
    {
      path: "/writer",
      element: <WriterDetailPage />,
    },
    {
      path: "/about-us",
      element: <AboutUsPage />,
    },
    {
      path: "/login",
      element: <Login setUser={setUser} user={user} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
