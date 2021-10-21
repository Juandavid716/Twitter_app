import { useState, useEffect } from "react";
import Metadata from "../../../metadata/Metadata";
import Navbar from "../../../assets/commons/components/Navbar";
import searchIcon from "../../../assets/images/icons/search_icon.png";
import TweetTemplate from "../TweetTemplate";
import "./home.scss";
import Input from "../../Input";
import {
  createTweetService,
  getTweetsService,
} from "../../../services/userService";

const Home = () => {
  const [content, setContent] = useState("");
  const user = localStorage.getItem("user");
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    let userLogged = localStorage.getItem("user");
    getTweetsService(JSON.parse(userLogged).token).then((data) => {
      let listTweets = data.payload.data;
      setTweets(listTweets);
    });
  }, []);
  const createTweet = (e) => {
    e.preventDefault();
    createTweetService(content, JSON.parse(user).token)
      .then((data) => {
        let tweet = data.payload;
        console.log(tweet);
        if (data.ok) {
          setTweets([tweet, ...tweets]);
        }
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
            {tweets.map((item) => {
              let { content, user, createdAt, likes } = item;
              return (
                <TweetTemplate
                  content={content}
                  name={user.name}
                  username={user.username}
                  time={createdAt}
                  likes={likes}
                />
              );
            })}
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
