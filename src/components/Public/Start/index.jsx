import Metadata from "../../../metadata/Metadata";
import TwitterLogo from "../../../assets/images/twitter_logo.png";
import "./start.scss";

const Start = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        url=""
      />
      <main>
        <section class="logo">
          <img src={TwitterLogo} alt="Twitter Logo" />
        </section>
        <section class="welcome">Hola</section>
      </main>
    </>
  );
};

export default Start;
