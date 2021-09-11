import { Link } from "react-router-dom";
import twitterIcon from "../../../images/icons/twitter_icon.png";
import homeIcon from "../../../images/icons/home_icon.png";
import exploreIcon from "../../../images/icons/explore_icon.png";
import notificationIcon from "../../../images/icons/notification_icon.png";
import listIcon from "../../../images/icons/list_icon.png";
import messageIcon from "../../../images/icons/message_icon.png";
import bookmarkIcon from "../../../images/icons/bookmarks_icon.png";
import profileIcon from "../../../images/icons/profile_icon.png";
import moreIcon from "../../../images/icons/more_icon.png";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__item">
        <img src={twitterIcon} alt="logo_feed__icon" />
      </div>
      <div className="navbar__item">
        <img src={homeIcon} alt="home__icon" />

        <Link to="/home">Home</Link>
      </div>

      <div className="navbar__item">
        <img src={exploreIcon} alt="explore__icon" />

        <Link to="/">Explore</Link>
      </div>
      <div className="navbar__item">
        <img src={notificationIcon} alt="notification__icon" />

        <Link to="/">Notifications</Link>
      </div>
      <div className="navbar__item">
        <img src={messageIcon} alt="message__icon" />

        <Link to="/">Messages</Link>
      </div>
      <div className="navbar__item">
        <img src={bookmarkIcon} alt="bookmark__icon" />

        <Link to="/">Bookmarks</Link>
      </div>
      <div className="navbar__item">
        <img src={listIcon} alt="list__icon" />

        <Link to="/">Lists</Link>
      </div>
      <div className="navbar__item">
        <img src={profileIcon} alt="profile__icon" />

        <Link to="/">Profile</Link>
      </div>
      <div className="navbar__item">
        <img src={moreIcon} alt="more_options__icon" />

        <Link to="/">More</Link>
      </div>
      <div>
        <Link
          to="/"
          style={{ borderRadius: "100px" }}
          className="button button__primary center text-decoration"
        >
          Tweet
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
