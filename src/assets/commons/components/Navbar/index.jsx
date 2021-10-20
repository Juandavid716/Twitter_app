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
      <div className="navbar__item_container navbar__item_container--modifier-hover">
        <Link to="/" className="navbar__item">
          <TwitterIcon />
        </Link>
      </div>
      <div className="navbar__item_container">
        <Link to="/home" className="navbar__item">
          <HomeIcon />
          <span className="navbar__text">Home</span>
        </Link>
      </div>
      <div className="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <ExploreIcon />
          <span className="navbar__text">Explore</span>
        </Link>
      </div>
      <div className="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <NotificationIcon />
          <span className="navbar__text">Notifications</span>
        </Link>
      </div>
      <div className="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <MessageIcon />
          <span className="navbar__text">Messages</span>
        </Link>
      </div>
      <div className="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <BookmarkIcon />
          <span className="navbar__text">Bookmarks</span>
        </Link>
      </div>
      <div className="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <ListIcon />
          <span className="navbar__text">Lists</span>
        </Link>
      </div>
      <div className="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <ProfileIcon />
          <span className="navbar__text">Profile</span>
        </Link>
      </div>
      <div className="navbar__item_container">
        <Link to="/" className="navbar__item">
          {" "}
          <MoreIcon />
          <span className="navbar__text">More</span>
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
