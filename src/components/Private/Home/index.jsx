import { useState } from "react";
import Metadata from "../../../metadata/Metadata";
import Navbar from "../../../assets/commons/components/Navbar";
import searchIcon from "../../../assets/images/icons/search_icon.png";
import TweetTemplate from "../TweetTemplate";
import "./home.scss";
import Input from "../../Input";
import { createTweetService } from "../../../services/userService";

const Home = () => {
  const [content, setContent] = useState("");
  const user = localStorage.getItem("user");

  const createTweet = (e) => {
    e.preventDefault();
    createTweetService(content, JSON.parse(user).token)
      .then((data) => {
        let user = data;
        console.log(user);
        // if (user.message === "ok") {
        //   console.log("done");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          <h2 style={{ padding: "0 32px", marginBottom: "27px" }}>Home</h2>
          <Input
            type="textarea"
            name="createTweet"
            id="createTweet"
            setState={setContent}
            value={content}
          />
          <button
            className="button button__primary"
            type="submit"
            onClick={createTweet}
          >
            Create Tweet
          </button>
          <div className="tweets">
            {" "}
            <TweetTemplate />
            <TweetTemplate />
            <TweetTemplate />
            <TweetTemplate />
          </div>
        </div>
        <div className="item trends">
          <div className="search__container">
            <span className="icon">
              <img src={searchIcon} alt="search_icon" />
            </span>
            <input type="search" id="search" placeholder="Search Twitter" />
          </div>
          <div className="main_trends">
            <h1 className="main_trends_title">Paris Trend</h1>
            <div className="main_trends_item">
              <span className="trendings">1.Trending</span>
              <span className="numeral">#JessieMueller</span>
              <span className="numberTweets">456k tweets</span>
            </div>
            <div className="main_trends_item">
              <span className="trendings">2.Trending</span>
              <span className="numeral">#HolaMundo</span>
              <span className="numberTweets">260k tweets</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
