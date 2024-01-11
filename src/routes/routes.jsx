import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/:id",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: LoginLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
