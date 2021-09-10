import Metadata from "../../../metadata/Metadata";
import Page from "../../Page";
import "./profile.scss";

const Profile = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        url="profile"
      />
      <Page name="Profile" />
    </>
  );
};
export default Profile;
