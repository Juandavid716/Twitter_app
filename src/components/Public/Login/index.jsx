import { useState } from "react";
import { login } from "../../../services/userService";
import { Link } from "react-router-dom";
import TwitterBlueLogo from "../../../assets/images/twitter_blue_logo.png";
import Metadata from "../../../metadata/Metadata";
import Input from "../../Input";
import "./login.scss";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    login(username, password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        path="login"
      />
      <main>
        <section className="formContainer">
          <form className="form">
            <a href="/">
              <img
                className="blue_logo "
                src={TwitterBlueLogo}
                alt="Welcome logo"
              />
            </a>
            <span className="form__label form__label--modifier-margin">
              {" "}
              My Twitter{" "}
            </span>
            <h1 className="title title--modifier-margin">
              {" "}
              Login to your account
            </h1>
            <Input
              content="Email or Username"
              type="text"
              name="email"
              setState={setUsername}
              value={username}
            />
            <Input
              content="Password"
              type="text"
              name="password"
              setState={setPassword}
              value={password}
            />
            <Link
              to="/passwordRecovery"
              className="text-decoration blue"
              style={{ margin: "28px 0px" }}
            >
              {" "}
              Forgot password?
            </Link>
            <button
              className="button button__primary"
              type="submit"
              onClick={handleLogin}
            >
              Login now
            </button>
            <span style={{ marginTop: "38px" }}>
              Dont have an account?{" "}
              <a href="/signup" className="blue text-decoration">
                Join free today{" "}
              </a>
            </span>
          </form>
        </section>
      </main>
    </>
  );
};
export default Login;
