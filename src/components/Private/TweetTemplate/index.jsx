import "./tweetTemplate.scss";
import tweetImage from "../../../assets/images/tweet_image.png";
import { ReactComponent as ProfileImage } from "../../../assets/images/icons/profile_icon_optional.svg";
import { ReactComponent as LikeIcon } from "../../../assets/images/icons/like_icon.svg";
import { ReactComponent as UploadIcon } from "../../../assets/images/icons/upload_icon.svg";
import { ReactComponent as RetweetIcon } from "../../../assets/images/icons/retweet_icon.svg";
import { ReactComponent as CommentIcon } from "../../../assets/images/icons/comment_icon.svg";
const TweetTemplate = () => {
  return (
    <div className="tweet_container">
      <div className="tweet_info">
        <div className="tweet_profile_image">
          <ProfileImage className="tweet_profile_img" />
        </div>
        <div className="tweet_profile_information">
          <div className="tweet_profile_header">
            <span className="tweet_profile_name">Annie</span>
            <span className="tweet_profile_user">@annie</span>
            <span className="tweet_profile_time">
              <span className="dot"> </span>14s
            </span>
          </div>
          <div className="tweet_message">
            <span className="tweet_main_message">
              This is a tweet. It can be long, or short. Depends on what you
              have to say. It can have some hashtags too. #likethis This is a
              tweet. It can be long, or short. Depends on what you have to say.
              It can have some hashtags too. #likethis
            </span>
            <img
              className="tweet_image"
              src={tweetImage}
              alt="tweet_message_image"
            />
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
          <LikeIcon />
        </div>
        <div className="tweet_options_icons">
          <UploadIcon />
        </div>
      </div>
    </div>
  );
};

export default TweetTemplate;
