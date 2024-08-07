import React from "react";
import "./Profile.css";
import avatar from "../../../../assets/avatar.jpg";
import Goback from "./Goback";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  return (
    <div className="profile">
    <div className="profile-card">
        <div className="back-button">
            <Goback/>
        </div>
      <div className="profile-header">
        <img src={avatar} alt="User Name" className="profile-avatar" />
        <div className="profile-info">
          <h1 className="profile-name">User Name</h1>
          <p className="profile-email">user.email@example.com</p>
        </div>
      </div>

      <div className="profile-content">
        <h2>Personal Information</h2>
        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              className="input"
              type="text"
              id="first-name"
              name="first-name"
              defaultValue="John"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              className="input"
              type="text"
              id="last-name"
              name="last-name"
              defaultValue="Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              defaultValue="user.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Personal Address</label>
            <textarea cols={30} rows={5}
              id="Address"
              name="Address"
              defaultValue="Address"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="input"
              type="tel"
              id="phone"
              name="phone"
              defaultValue="(123) 456-7890"
            />
          </div>
          <button type="button" className="edit-button">
            Edit Profile
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Profile;
