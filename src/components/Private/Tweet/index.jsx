import Metadata from "../../../metadata/Metadata";
import Navbar from "../../../assets/commons/components/Navbar";
import TweetTemplate from "../TweetTemplate";
import searchIcon from "../../../assets/images/icons/search_icon.png";
import { useParams } from "react-router-dom";
import { getTweetService, getUserService } from "../../../services/userService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./tweet.scss";
const Tweet = () => {
  const [tweet, setTweet] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    getTweetService(id).then((data) => {
      let { comments, content, createdAt, likes, user, _id } = data.payload;
      getUserService(user).then((data) => {
        let { username, name } = data.payload;
        let tw = {
          comments,
          content,
          createdAt,
          likes,
          user,
          _id,
          username,
          name,
        };
        setLoading(true);
        setTweet(tw);
        setLoading(false);
      });
    });
  }, []);

  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        path="tweets/:id"
      />
      <main className="grid">
        <div className="item-navbar">
          <Navbar />
        </div>
        <div className="item feed">
          <div className="tweets">
            {!loading ? (
              <TweetTemplate
                key={tweet._id}
                content={tweet.content}
                name={tweet.name}
                username={tweet.username}
                time={tweet.createdAt}
                likes={tweet.likes}
                tweetId={tweet._id}
                // deleteTweet={deleteTweet}
              />
            ) : (
              <> </>
            )}
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

export default Tweet;
