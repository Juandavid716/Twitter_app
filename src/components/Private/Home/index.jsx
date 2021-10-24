import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { ReactComponent as ProfileImage } from "../../../assets/images/icons/profile_icon_optional.svg";
import Metadata from "../../../metadata/Metadata";
import Navbar from "../../../assets/commons/components/Navbar";
import searchIcon from "../../../assets/images/icons/search_icon.png";
import TweetTemplate from "../TweetTemplate";
import "./home.scss";
import Input from "../../Input";
import {
  createTweetService,
  getTweetsService,
  deleteTweetService,
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
        tweet.user = JSON.parse(user);
        if (data.ok) {
          setTweets([tweet, ...tweets]);
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something is wrong. Your tweet could not be created. Try again.",
        });
      });
  };

  const deleteTweet = (value) => {
    let tweetId = value;

    deleteTweetService(tweetId, JSON.parse(user).token)
      .then((data) => {
        if (data.ok) {
          let tweetsFiltered = tweets.filter((item) => item._id !== tweetId);
          setTweets(tweetsFiltered);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your tweet has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something is wrong. Your tweet could not be deleted. Try again.",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something is wrong. Your tweet could not be deleted. Try again.",
        });
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
          <h2
            style={{
              padding: "0 32px",
              marginBottom: "27px",
              borderBottom: "1px solid rgba(229, 229, 229, 0.5)",
              paddingBottom: "24px",
            }}
          >
            Home
          </h2>
          <div className="input_information">
            <ProfileImage className="tweet_main_profile" />
            <Input
              type="textarea"
              name="createTweet"
              placeholder="What's happening?"
              id="createTweet"
              setState={setContent}
              value={content}
            />
          </div>
          <div className="buttonTweetContainer">
            <button
              className={
                content.length > 0
                  ? "button button__primary tweet_button"
                  : "button button button__primary  tweet_button button_inactive"
              }
              type="submit"
              disabled={content.length === 0 ? true : false}
              onClick={createTweet}
            >
              Tweet
            </button>
          </div>
          <hr style={{ border: "1px solid rgba(229, 229, 229, 0.5)" }}></hr>
          <div className="tweets">
            {tweets.map((item) => {
              let { content, user, createdAt, likes, _id } = item;
              return (
                <TweetTemplate
                  key={_id}
                  content={content}
                  name={user.name}
                  username={user.username}
                  time={createdAt}
                  likes={likes}
                  tweetId={_id}
                  deleteTweet={deleteTweet}
                  isComment={false}
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
