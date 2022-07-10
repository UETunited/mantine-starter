import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Landing from "../pages/Landing";

export default [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
];
