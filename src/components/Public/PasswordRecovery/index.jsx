import TwitterBlueLogo from "../../../assets/images/twitter_blue_logo.png";
import Metadata from "../../../metadata/Metadata";
import Input from "../../Input";
import "./passwordRecovery.scss";

const PasswordRecovery = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        url=""
      />
      <main>
        <section className="formContainer">
          <form className="form">
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
              Recover your password
            </h1>
            <Input content="Email or Username" type="text" name="email" />

            <button
              className="button button__primary"
              style={{ marginTop: "27px" }}
              type="submit"
            >
              Recover your password
            </button>
            <span className="already" style={{ marginTop: "98px" }}>
              Return to{" "}
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

export default PasswordRecovery;
