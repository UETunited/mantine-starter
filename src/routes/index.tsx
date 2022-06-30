import { useRoutes } from "react-router-dom";
import staticRoutes from "./static-routes";

export default function Router() {
  let element = useRoutes([...staticRoutes]);
  return element;
}
