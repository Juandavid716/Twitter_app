import Login from "../components/public/Login";
import SignUp from "../components/public/SignUp";
import Activate from "../components/public/Activate";
import Start from "../components/public/Start";
import PasswordRecovery from "../components/public/PasswordRecovery";
import Home from "../components/private/Home";
import Timeline from "../components/private/Timeline";
import Profile from "../components/private/Profile";
import Tweet from "../components/private/Tweet";
import Trending from "../components/private/Trending";
import Search from "../components/private/Search";

const routes = {
  restricted: [
    {
      title: "Timeline",
      path: "/timeline/:username",
      component: Timeline,
    },
    {
      title: "Home",
      path: "/home",
      component: Home,
    },
    {
      title: "Profile",
      path: "/profile",
      component: Profile,
    },
    {
      title: "Tweets",
      path: "/tweets/:id",
      component: Tweet,
    },
    {
      title: "Trending",
      path: "/trending/:topic",
      component: Trending,
    },
    {
      title: "Search",
      path: "/search/results",
      component: Search,
    },
  ],
  unrestricted: [
    {
      title: "Start",
      path: "/",
      component: Start,
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
    {
      title: "Activate",
      path: "/activate",
      component: Activate,
    },
    {
      title: "Password",
      path: "/passwordRecovery",
      component: PasswordRecovery,
    },
  ],
};
export default routes;
