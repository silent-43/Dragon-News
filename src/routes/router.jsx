import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import About from "../pages/About";
import Career from "../pages/Career";
import QZoneDetails from "../pages/QZoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: () => fetch("/news.json"),

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/q-zone/:id",
    element: <QZoneDetails></QZoneDetails>,
  },

  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
