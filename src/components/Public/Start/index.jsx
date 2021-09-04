import { Link } from "react-router-dom";
import Metadata from "../../../metadata/Metadata";
import TwitterWhiteLogo from "../../../assets/images/twitter_white_logo.png";
import TwitterBlueLogo from "../../../assets/images/twitter_blue_logo.png";
import "./start.scss";

const Start = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        url=""
      />
      <main className="container flex-direction">
        <section className="logo">
          <img src={TwitterWhiteLogo} alt="Twitter Logo" />
        </section>
        <section className="welcome">
          <div className="welcome__container">
            <img src={TwitterBlueLogo} alt="Welcome logo" />
            <h1 className="slogan"> Welcome to Twitter</h1>
            <div className="buttons">
              <Link
                to="/login"
                className="button center text-decoration"
                style={{ marginBottom: "40px" }}
              >
                Login now
              </Link>
              <label className="button__label">
                Dont have an account? <span id="join">Join free today </span>{" "}
              </label>
              <Link to="/signup" className="button center text-decoration">
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Start;
