import Metadata from "../../../metadata/Metadata";
import Page from "../../Page";
import "./timeline.scss";

const Timeline = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        path="timeline/:username"
      />
      <Page name="Timeline" />
    </>
  );
};

export default Timeline;
