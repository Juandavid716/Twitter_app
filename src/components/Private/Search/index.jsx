import Metadata from "../../../metadata/Metadata";
import Page from "../../Page";
import "./search.scss";

const Search = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        path="search/results"
      />
      <Page name="Search" />
    </>
  );
};
export default Search;
