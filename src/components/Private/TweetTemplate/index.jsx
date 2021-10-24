import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ProfileImage } from "../../../assets/images/icons/profile_icon_optional.svg";
import { ReactComponent as LikeIcon } from "../../../assets/images/icons/like_icon.svg";
import { ReactComponent as UploadIcon } from "../../../assets/images/icons/upload_icon.svg";
import { ReactComponent as RetweetIcon } from "../../../assets/images/icons/retweet_icon.svg";
import { ReactComponent as CommentIcon } from "../../../assets/images/icons/comment_icon.svg";
import { ReactComponent as Delete } from "../../../assets/images/icons/delete.svg";
import { postLikesService } from "../../../services/userService";
import ReactTimeAgo from "react-time-ago";
import "./tweetTemplate.scss";

const TweetTemplate = ({
  tweetId,
  name,
  username,
  content,
  time,
  likes,
  deleteTweet,
  deleteComment,
  isComment,
}) => {
  const [like, setLike] = useState(false);
  const [Username, setUsername] = useState("");

  useEffect(() => {
    let userLogged = localStorage.getItem("user");
    setUsername(JSON.parse(userLogged).username);
  }, []);

  const handleLikes = (e) => {
    e.preventDefault();
    let userLogged = localStorage.getItem("user");
    let tkn = JSON.parse(userLogged).token;
    setLike(!like);
    postLikesService(like ? 1 : 0, tweetId, tkn)
      .then((data) => {
        let response = data.ok;
        if (response) {
          console.log("done");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="tweet_container">
      <div className="tweet_info">
        <div className="tweet_profile_image">
          <ProfileImage className="tweet_profile_img" />
        </div>
        <div className="tweet_profile_information">
          <div className="tweet_profile_header">
            <span className="tweet_profile_name"> {name}</span>
            <span className="tweet_profile_user">@{username} </span>
            <span className="tweet_profile_time">
              <span className="dot"> </span>
              {!isComment ? (
                <ReactTimeAgo date={Date.parse(time)} timeStyle="twitter" />
              ) : (
                <></>
              )}
            </span>
          </div>
          <div className="tweet_message">
            <span className="tweet_main_message">{content}</span>
            {/* <img
              className="tweet_image"
              src={tweetImage}
              alt="tweet_message_image"
            /> */}
          </div>
        </div>
        {Username === username ? (
          <>
            <div className="tweet_configuration">
              <div tabIndex="0" className="menu">
                <div className="menu-dropdown">
                  {!isComment ? (
                    <span onClick={() => deleteTweet(tweetId)}>
                      <Delete className="buttonRemoveTweet" /> Delete tweet
                    </span>
                  ) : (
                    <></>
                    // <span onClick={() => deleteComment(tweetId)}>
                    //   <Delete className="buttonRemoveTweet" /> Delete comment
                    // </span>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {!isComment ? (
        <div className="tweet_options">
          <div className="tweet_options_icons">
            <Link to={`/tweets/${tweetId}`}>
              <CommentIcon />{" "}
            </Link>
          </div>
          <div className="tweet_options_icons">
            <RetweetIcon />
          </div>
          <div className="tweet_options_icons">
            <LikeIcon
              className={like ? "likeActive" : "likeNotActive"}
              onClick={handleLikes}
            />{" "}
            <span style={{ marginLeft: "10px" }}>
              {Number(likes) + (like ? Number(1) : Number(0))}
            </span>
          </div>
          <div className="tweet_options_icons">
            <UploadIcon />
          </div>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default TweetTemplate;
