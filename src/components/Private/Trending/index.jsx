import Metadata from "../../../metadata/Metadata";
import Page from "../../Page";
import "./trending.scss";

const Trending = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        path="trending/:topic"
      />
      <Page name="Trending" />
    </>
  );
};

export default Trending;
