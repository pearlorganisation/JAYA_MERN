import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Layout from "./components/layout/Layout";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Schemes from "./pages/Schemes/Schemes";
import SchemeDetail from "./pages/SchemeDetail/SchemeDetail";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import DocumentPage from "./pages/DocumentPage/DocumentPage";
import ChatBotForm from "./pages/ChatBotForm/ChatBotForm";
import NewChatBotForm from "./pages/ChatBotForm/NewChatBotForm";
import SchemesFormPage from "./pages/SchemesPage/SchemesPage";
import { ToastContainer } from "react-toastify";
import DefaultLayout from "./admin/components/DefaultLayout/DefaultLayout";
import Scheme from "./admin/pages/Scheme/Scheme";
import ViewScheme from "./admin/pages/Scheme/ViewScheme/ViewScheme";
import Editscheme from "./admin/pages/Scheme/EditScheme/Editscheme";
import CreateScheme from "./admin/pages/Scheme/CreateScheme/CreateScheme";
import { useSelector } from "react-redux";
import Document from "./admin/pages/documents/Document";
import User from "./admin/pages/user/user";
import BlogsPage from "./pages/Blogs/BlogsPage";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import EditBlog from "./admin/pages/Blogs/EditBlog/EditBlog";
import AddBlog from "./admin/pages/Blogs/AddBlog/AddBlog";
import AddScheme from "./admin/pages/Scheme/AddScheme/AddScheme";
import Blog from "./admin/pages/Blogs/Blog";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SavedSchemes from "./pages/SavedSchemes/SavedSchemes";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const { isUserLoggedIn, userData } = useSelector((state) => state.auth);
  const router = createBrowserRouter([
    {
      path: "/",
      element: isUserLoggedIn ? <Layout /> : <Navigate to="/signin" />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "schemes",
          element: <Schemes />,
        },
        {
          path: "schemes/:id",
          element: <SchemeDetail />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "mydocuments",
          element: <DocumentPage />,
        },
        {
          path: "/chatBotForm",
          element: <ChatBotForm />,
        },
        {
          path: "/newchatbot",
          element: <NewChatBotForm />,
        },
        {
          path: "/saved",
          element: <SavedSchemes />,
        },
        {
          path: "/schemesForm",
          element: <SchemesFormPage />,
        },
        {
          path: "/blogs",
          element: <BlogsPage />,
        },
        {
          path: "/blogs/:id",
          element: <BlogDetails />,
        },
      ],
    },
    {
      path: "signin",
      element: isUserLoggedIn ? <Navigate to="/" /> : <Signin />,
    },
    {
      path: "signup",
      element: isUserLoggedIn ? <Navigate to="/" /> : <Signup />,
    },
    {
      path: "admin",
      element:
        userData?.user?.role === "ADMIN" ? (
          <DefaultLayout />
        ) : (
          <Navigate to="/" />
        ),
      children: [
        {
          index: true,
          element: <Scheme />,
        },
        {
          path: "schemes",
          element: <Scheme />,
        },
        {
          path: "viewScheme",
          element: <ViewScheme />,
        },
        {
          path: "createScheme",
          element: <CreateScheme />,
        },
        {
          path: "editScheme/:id",
          element: <Editscheme />,
        },
        {
          path: "document",
          element: <Document />,
        },
        //user routes
        {
          path: "users",
          element: <User />,
        },

        {
          path: "addscheme",
          element: <AddScheme />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "addblog",
          element: <AddBlog />,
        },
        {
          path: "editblog/:id",
          element: <EditBlog />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
