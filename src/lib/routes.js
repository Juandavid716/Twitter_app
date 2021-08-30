import Login from "../components/public/Login";
import SignUp from "../components/public/SignUp";
import Home from "../components/public/Home";
import Timeline from "../components/private/Timeline";

const routes = {
  restricted: [
    {
      title: "Timeline",
      path: "/timeline",
      component: Timeline,
    },
  ],
  unrestricted: [
    {
      title: "Home",
      path: "/",
      component: Home,
    },
    {
      title: "Login",
      path: "/login",
      component: Login,
    },
    {
      title: "Sign Up",
      path: "/signup",
      component: SignUp,
    },
  ],
};
export default routes;
