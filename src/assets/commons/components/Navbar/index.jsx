import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../../images/icons/home_icon.svg";
import { ReactComponent as TwitterIcon } from "../../../images/icons/twitter_icon.svg";
import { ReactComponent as ExploreIcon } from "../../../images/icons/explore_icon.svg";
import { ReactComponent as NotificationIcon } from "../../../images/icons/notification_icon.svg";
import { ReactComponent as ListIcon } from "../../../images/icons/list_icon.svg";
import { ReactComponent as MessageIcon } from "../../../images/icons/message_icon.svg";
import { ReactComponent as BookmarkIcon } from "../../../images/icons/bookmarks_icon.svg";
import { ReactComponent as ProfileIcon } from "../../../images/icons/profile_icon.svg";
import { ReactComponent as MoreIcon } from "../../../images/icons/more_icon.svg";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__item">
        <TwitterIcon />
      </Link>
      <div class="navbar__item_container">
        <Link to="/home" className="navbar__item">
          <HomeIcon />
          Home
        </Link>
      </div>
      <div class="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <ExploreIcon /> Explore
        </Link>
      </div>
      <div class="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <NotificationIcon /> Notifications
        </Link>
      </div>
      <div class="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <MessageIcon /> Messages
        </Link>
      </div>
      <div class="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <BookmarkIcon /> Bookmarks
        </Link>
      </div>
      <div class="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <ListIcon /> Lists
        </Link>
      </div>
      <div class="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <ProfileIcon /> Profile
        </Link>
      </div>
      <div class="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <MoreIcon /> More
        </Link>
      </div>

      <div style={{ marginTop: "30px" }}>
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
