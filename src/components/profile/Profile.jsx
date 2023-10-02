import React from "react";
import { UnorderedListOutlined, UploadOutlined } from "@ant-design/icons";
import "./profile.css";
import Button from "../buttons/Button";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Navbar/>
        <Link to="/" style={{textDecoration:"none"}}><Button className="exit-btn"/></Link>
        <div className="containers">
          <div className="top">
            <UnorderedListOutlined className="buttons" />
            <h1>SIMOTAP</h1>
            <UploadOutlined className="buttons" />
          </div>
          <div>
            <img
              src="src/assets/Rectangle 61.png"
              className="img-fluid cover-img"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              src="src/assets/Ellipse 16.png"
              className="img-fluid profile-img"
              alt="..."
            ></img>
            <div className="profile-name">
              <h3>Saurav Majhi</h3>
            </div>
          </div>

          <div className="description">
            <p>Business is all about knowing more opportunities.</p>
          </div>

          <div className="phone">
            <p>Add to your Phone</p>
          </div>

          <div className="link-section">
            <div className="component">
              <img src="src/assets/facebook.png" />
              <p>Facebook</p>
            </div>
            <div className="component">
              <img src="src/assets/whatsapp.png" />
              <p>WhatsApp</p>
            </div>
            <div className="component">
              <img src="src/assets/viber.png" />
              <p className="ml-2">Viber</p>
            </div>
            <div className="component">
              <img src="src/assets/linkedin.png" />
              <p>Linkedin</p>
            </div>
            <div className="component">
              <img src="src/assets/gmail.png" />
              <p>Gmail</p>
            </div>
            <div className="component">
              <img src="src/assets/tiktok.png" />
              <p>TikTok</p>
            </div>
          </div>

          <div className="additional-links">
            <p>Other Links</p>
            <div className="add-link">
              <img src="src/assets/ph_link.png" />
              <p>www.dreampte.com</p>
            </div>
            <div className="add-link">
              <img src="src/assets/ph_link.png" />
              <p>www.dreamgre.com</p>
            </div>
          </div>

          <div className="profile-edit">
          <p>Edit Profile</p>
          </div>
          <div className="bottom">
      <img src="src/assets/system-uicons_home.png"/>
      <img src="src/assets/Contact Icon.png"/>
      </div>
      </div>
      

      <Footer />
    </>
  );
};

export default Profile;
