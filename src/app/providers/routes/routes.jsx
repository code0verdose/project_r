import { Home } from "../../../pages/Home/Home";
import { About } from "../../../pages/About/About";
import { Time } from "../../../pages/Time/Time";
import { NotFound } from "../../../pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/time",
    element: <Time />,
  },
  {
    path: "*", //404 не существующий маршрут
    element: <NotFound />,
  },
]);
