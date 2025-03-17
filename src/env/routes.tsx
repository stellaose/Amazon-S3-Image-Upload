import { lazy } from "react";

// const NewBusiness = lazy(
//   () => import("./views/MyBusiness/NewBusiness/NewBusiness")
// );

const Home = lazy(() => import("../pages/home"));
const Contact = lazy(() => import("../pages/contact"));

export { Home, Contact };
