import Metadata from "../../../metadata/Metadata";
import Navbar from "../../../assets/commons/components/Navbar";
import searchIcon from "../../../assets/images/icons/search_icon.png";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        path="home"
      />
      <main className="grid">
        <div className="item-navbar">
          <Navbar />
        </div>
        <div className="item feed">
          <h2>Home</h2>
        </div>
        <div className="item trends">
          <div className="search__container">
            <span className="icon">
              <img src={searchIcon} alt="search_icon" />
            </span>
            <input type="search" id="search" placeholder="Search..." />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
