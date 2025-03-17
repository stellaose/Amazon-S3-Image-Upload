import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout";

import { Home, Contact } from "./routes";
import Routes from "./constants";

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: Routes.HOME,
        element: <Home />,
      },
      {
        path: Routes.CONTACT,
        element: <Contact />,
      },
    ],
    // errorElement: <NotFound />,
  },
])