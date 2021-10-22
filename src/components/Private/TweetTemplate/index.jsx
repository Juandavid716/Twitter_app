import { useState } from "react";
import { ReactComponent as ProfileImage } from "../../../assets/images/icons/profile_icon_optional.svg";
import { ReactComponent as LikeIcon } from "../../../assets/images/icons/like_icon.svg";
import { ReactComponent as UploadIcon } from "../../../assets/images/icons/upload_icon.svg";
import { ReactComponent as RetweetIcon } from "../../../assets/images/icons/retweet_icon.svg";
import { ReactComponent as CommentIcon } from "../../../assets/images/icons/comment_icon.svg";
import "./tweetTemplate.scss";
import { postLikesService } from "../../../services/userService";
import ReactTimeAgo from "react-time-ago";
const TweetTemplate = ({ tweetId, name, username, content, time, likes }) => {
  const [like, setLike] = useState(false);
  const handleLikes = (e) => {
    e.preventDefault();
    let userLogged = localStorage.getItem("user");
    let tkn = JSON.parse(userLogged).token;
    setLike(!like);
    postLikesService(like ? 1 : 0, tweetId, tkn)
      .then((data) => {
        console.log("esto es", data, like);
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
            <span className="tweet_profile_name">{name}</span>
            <span className="tweet_profile_user">@{username}</span>
            <span className="tweet_profile_time">
              <span className="dot"> </span>
              <ReactTimeAgo date={time} locale="en-US" timeStyle="twitter" />
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
      </div>
      <div className="tweet_options">
        <div className="tweet_options_icons">
          <CommentIcon />
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
    </div>
  );
};

export default TweetTemplate;
