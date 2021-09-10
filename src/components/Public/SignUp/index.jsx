import TwitterBlueLogo from "../../../assets/images/twitter_blue_logo.png";
import Metadata from "../../../metadata/Metadata";
import Input from "../../Input";
import "./signUp.scss";

const SignUp = () => {
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
            <img
              className="blue_logo "
              src={TwitterBlueLogo}
              alt="Welcome logo"
            />
            <span className="form__label form__label--modifier-margin">
              {" "}
              My Twitter{" "}
            </span>
            <h1 className="title title--modifier-margin">
              {" "}
              Create your account
            </h1>
            <Input content="Name" type="text" name="name" />
            <Input content="Username" type="text" name="username" />
            <Input content="Email" type="text" name="email" />
            <Input content="Password" type="text" name="password" />
            <Input
              content="Password Confirmation"
              type="text"
              name="passwordConfirmation"
            />

            <button
              style={{ marginTop: "34px" }}
              className="button button__primary"
              type="submit"
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
