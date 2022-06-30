import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";

export default function Router() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home/>
    }
  ]);
  return element;
}