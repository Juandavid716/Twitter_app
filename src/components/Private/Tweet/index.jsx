import Metadata from "../../../metadata/Metadata";
import Page from "../../Page";
import "./tweet.scss";

const Tweet = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        url=""
      />
      <Page name="Tweets" />
    </>
  );
};

export default Tweet;
