import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import NotFound from "../page/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    errorElement: <NotFound />,
  },
]);

export default router;
