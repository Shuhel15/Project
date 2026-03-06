import React from "react";
import { FaCamera } from "react-icons/fa";

const Account = () => {
  return (
    <div className="account-page">
      <h2 className="title">Account Settings</h2>

      <div className="profile-section">
        <div className="image-wrapper">
          <img
            src="/Profile.png"
            alt="profile"
            className="profile-img"
          />
          <div className="camera-icon">
            <FaCamera />
          </div>
        </div>

        <div className="user-info">
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        <div className="divider"></div>
      </p>

      <div className="divider"></div>
    </div>
  );
};

export default Account;
