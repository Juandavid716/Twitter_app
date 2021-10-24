import Metadata from "../../../metadata/Metadata";
import Navbar from "../../../assets/commons/components/Navbar";
import { ReactComponent as ProfileImage } from "../../../assets/images/icons/profile_icon_optional.svg";
import { ReactComponent as Location } from "../../../assets/images/icons/location_icon.svg";
import { ReactComponent as Birthday } from "../../../assets/images/icons/calendar.svg";
import { ReactComponent as Calendar } from "../../../assets/images/icons/birthday.svg";
import searchIcon from "../../../assets/images/icons/search_icon.png";
import { getUsersService } from "../../../services/userService";
import profile_header from "../../../assets/images/icons/profile_header.jpeg";
import { useEffect, useState } from "react";
import "./profile.scss";

const Profile = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    let userLogged = localStorage.getItem("user");
    let tkn = JSON.parse(userLogged).token;
    let username = JSON.parse(userLogged).username;
    getUsersService(tkn).then((data) => {
      let listUsers = data.payload.data;
      listUsers.map((item) => {
        if (username === item["username"]) {
          setUser(item);
        }
      });
    });
  }, []);

  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        url="profile"
      />
      <main className="grid">
        <div className="item-navbar">
          <Navbar />
        </div>
        <div className="item feed feed--padding profile_section">
          <h2
            style={{
              padding: "0 32px",
              borderBottom: "1px solid rgba(229, 229, 229, 0.5)",
              paddingBottom: "24px",
            }}
          >
            {user.username}
          </h2>
          <div className="profile_header_image">
            <img alt="header_profile" src={profile_header} />
          </div>
          <div className="input_information">
            <ProfileImage className="tweet_main_profile" />
          </div>
          <div className="personalInformation">
            <div className="name">{user.name}</div>
            <div className="username">@{user.username}</div>
            <div className="profile_description">
              Juegos, temáticas, textos dummie.
            </div>
            <div className="birthdayInfo">
              <div className="cityInfo">
                <Location />
                Barranquilla, Colombia.
              </div>
              <div className="birthInfo">
                <Calendar /> Fecha de nacimiento: 16 de julio de 1999
              </div>
            </div>
            <div className="dateJoined">
              {" "}
              <Birthday /> Se unió en marzo de 2013
            </div>
            <div className="numberFollow">
              <div className="following">
                240 <span>following </span>
              </div>
              <div className="followers">
                1303 <span> followers</span>
              </div>{" "}
            </div>
          </div>

          {/* <div className="tweets">
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
          </div> */}
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
export default Profile;
