import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthContext";
import { loginService } from "../../../services/userService";
import { Link } from "react-router-dom";
import TwitterBlueLogo from "../../../assets/images/twitter_blue_logo.png";
import Metadata from "../../../metadata/Metadata";
import Input from "../../Input";
import "./login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    loginService(username, password)
      .then((data) => {
        let user = data.payload;
        if (user.message === "ok") {
          auth.login(user.data);
          Swal.fire(
            "Good job!",
            "you have successfully logged in",
            "success"
          ).then(function (result) {
            if (result.value) {
              history.push("/home");
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong email or password",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something is wrong on the server. Please wait until it is available",
        });
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
              type="password"
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
