import { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import TwitterBlueLogo from "../../../assets/images/twitter_blue_logo.png";
import Metadata from "../../../metadata/Metadata";
import { signupService } from "../../../services/userService";
import Input from "../../Input";
import "./signUp.scss";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();

    signupService(username, password, passwordConfirmation, name, email)
      .then((data) => {
        let response = data.ok;
        if (response) {
          Swal.fire(
            "Good job!",
            "you have successfully registered",
            "success"
          ).then(function (result) {
            if (result.value) {
              history.push("/login");
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please input all the fields or enter a valid information",
            footer:
              "Don't forget that the username must have numbers while the password must be greater than 6 digits , with uppercase, lowercase letters and special characters.",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something is wrong here",
          footer: "Please wait until the site is available",
        });
      });
  };
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        path="signup"
      />
      <main>
        <section className="formContainer">
          <form className="form" style={{ padding: "20px 0" }}>
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
              Create your account
            </h1>
            <Input
              content="Name"
              type="text"
              name="name"
              setState={setName}
              value={name}
            />
            <Input
              content="Username"
              type="text"
              name="username"
              setState={setUsername}
              value={username}
            />
            <Input
              content="Email"
              type="text"
              name="email"
              setState={setEmail}
              value={email}
            />
            <Input
              content="Password"
              type="password"
              name="password"
              setState={setPassword}
              value={password}
            />
            <Input
              content="Password Confirmation"
              type="password"
              name="passwordConfirmation"
              setState={setPasswordConfirmation}
              value={passwordConfirmation}
            />
            <button
              style={{ marginTop: "34px" }}
              className="button button__primary"
              type="submit"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <span className="already" style={{ marginTop: "38px" }}>
              Already have an account?{" "}
              <a href="/login" className="blue text-decoration">
                Login{" "}
              </a>
            </span>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
