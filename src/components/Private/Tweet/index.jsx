import Metadata from "../../../metadata/Metadata";
import Navbar from "../../../assets/commons/components/Navbar";
import TweetTemplate from "../TweetTemplate";
import { ReactComponent as ProfileImage } from "../../../assets/images/icons/profile_icon_optional.svg";
import searchIcon from "../../../assets/images/icons/search_icon.png";
import { useParams } from "react-router-dom";
import {
  getTweetsService,
  deleteCommentService,
  createCommentService,
} from "../../../services/userService";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import Input from "../../Input";
import Swal from "sweetalert2";
import "./tweet.scss";

const Tweet = () => {
  const [tweet, setTweet] = useState({});
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [subLoading, setSubLoading] = useState(true);
  const [mainComments, setComments] = useState([]);
  const history = useHistory();
  let { id } = useParams();
  let userLogged = localStorage.getItem("user");
  let tkn = JSON.parse(userLogged).token;
  // useEffect(() => {
  //   getTweetService(id).then((data) => {
  //     let { comments, content, createdAt, likes, user, _id } = data.payload;
  //     getUserService(user).then((data) => {
  //       let { username, name } = data.payload;
  //       let tw = {
  //         comments,
  //         content,
  //         createdAt,
  //         likes,
  //         user,
  //         _id,
  //         username,
  //         name,
  //       };
  //       setLoading(true);
  //       setTweet(tw);
  //       setComments(comments);
  //       setLoading(false);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    let userLogged = localStorage.getItem("user");
    let tkn = JSON.parse(userLogged).token;
    getTweetsService(tkn).then((data) => {
      let listTweets = data.payload.data;
      let prevComments = [];
      listTweets.map((item) => {
        if (id === item["_id"]) {
          prevComments.unshift(item);
        }
      });
      console.log(prevComments);
      setComments(prevComments[0].comments);
    });
  }, []);

  const createComment = (e) => {
    e.preventDefault();

    createCommentService(content, id, tkn)
      .then((data) => {
        let comment = data.payload;
        console.log(comment);
        if (data.ok) {
          history.go(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const deleteComment = (value) => {
  //   let tweetId = value;
  //   deleteCommentService(id, tweetId, JSON.parse(userLogged).token)
  //     .then((data) => {
  //       if (data.ok) {
  //         history.go(0);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
                isComment={false}
                // deleteTweet={deleteTweet}
              />
            ) : (
              <> </>
            )}
          </div>
          <div className="input_information" style={{ paddingTop: "10px" }}>
            <ProfileImage className="tweet_main_profile" />
            <Input
              type="textarea"
              name="createTweet"
              placeholder="Tweet your answer"
              id="createTweet"
              setState={setContent}
              value={content}
            />
          </div>
          <div className="buttonTweetContainer">
            <button
              className="button button__primary tweet_button"
              type="submit"
              onClick={createComment}
            >
              Tweet
            </button>
          </div>
          <div className="tweets">
            {mainComments.map((item) => {
              let { comment, user, _id } = item;
              return (
                <TweetTemplate
                  key={_id}
                  content={comment}
                  name={user.name}
                  username={user.username}
                  time={new Date()}
                  tweetId={_id}
                  isComment={true}
                  // deleteComment={deleteComment}
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

export default Tweet;
