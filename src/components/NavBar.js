import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../css/barchart.css";
import "../css/navbar.css";
import LoginPopUp from "./LoginPopUp";

import { MusicUpIcon, MusicOffIcon } from "../icons";
import thegreeninvestor from "../assets/thegreeninvestor.png";
import myMusic from "../assets/music.mp3";
import MuteButton from "./MuteButton";

import AuthService from "../services/auth.service";
// import AuthVerify from "./common/auth-verify";
import EventBus from "../common/EventBus";

const languages = [
  { value: "", text: "Change language" },
  { value: "en", text: "English" },
  { value: "zh", text: "中文(简体）" },
  { value: "es", text: "español" },
  // { value: 'ms', text: "Bahasa Melayu" },
];

export default function NavBar() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isMuted, setIsMuted] = useState(false);
  const [music, setMusic] = useState(new Audio(myMusic));

  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:8081/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  function logOut() {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  }

  function _toggleMuteButton() {
    var myAudio = document.getElementById("audio_player");
    myAudio.muted = !myAudio.muted;

    setIsMuted(!isMuted);
  }
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "ar,zh-TW,ms,es,",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    if (typeof Node === "function" && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function (child) {
        if (child.parentNode !== this) {
          if (console) {
            console.error(
              "Cannot remove a child from a different parent",
              child,
              this
            );
          }
          return child;
        }
        return originalRemoveChild.apply(this, arguments);
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function (newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.error(
              "Cannot insert before a reference node from a different parent",
              referenceNode,
              this
            );
          }
          return newNode;
        }
        return originalInsertBefore.apply(this, arguments);
      };
    }
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <nav className="navbar navbar-expand h-12 bg-gradient-to-r from-transparent via-teal-400/70 border-bottom-line h-15">
      <audio id="audio_player" autoPlay loop>
        {/* <source src={myMusic} type="audio/mp3" /> */}
        <source src={null} type="audio/mp3" />
      </audio>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link" class="notranslate">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={"/leaderboard"}
            className="nav-link"
            onClick={_toggleMuteButton}
            class="notranslate"
          >
            {t("home-leaderboard")}
          </Link>
        </li>

        {showModeratorBoard && (
          <li className="nav-item">
            <Link to={"/mod"} className="nav-link" class="notranslate">
              Moderator Board
            </Link>
          </li>
        )}

        {showAdminBoard && (
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link" class="notranslate">
              Admin Board
            </Link>
          </li>
        )}

        {currentUser && (
          <li className="nav-item">
            <Link to={"/user"} className="nav-link" class="notranslate">
              User
            </Link>
          </li>
        )}
      </div>

      {/* green investor logo */}
      <img
        className="logo"
        src={thegreeninvestor}
        alt="thegreeninvestorlogo"
        class="notranslate"
      />

      <div className="navbar-nav ml-auto">
        {/* language selector */}
        {/* <li className="nav-item">
          <select value={lang} onChange={handleChange}
            style={{ top: "50%", left: "50%", marginTop: "1vh" }}>
            {languages.map(item => {
              return (<option key={item.value}
                value={item.value}>{item.text}</option>);
            })}
          </select>
        </li> */}
        <div className="pt-2 pr-2">
          <div id="google_translate_element"></div>
        </div>

        {/* music button */}
        <li className="nav-item pt-2 pr-2">
          <span className="changeColor">
            <MuteButton
              isMuted={isMuted}
              _toggleMuteButton={_toggleMuteButton}
              class="notranslate"
            />
          </span>
        </li>
      </div>

      {/* when user is logged in */}
      {currentUser ? (
        <div className="navbar-nav">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link" class="notranslate">
              {currentUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <a href="/home" className="nav-link" onClick={logOut}>
              {t("home-logout")}
            </a>
          </li>
        </div>
      ) : (
        // when user is not logged in
        <div className="navbar-nav">
          <li className="nav-item" class="notranslate">
            {/* <Link to={"/login"} className="nav-link">
              {t("home-login")}
            </Link> */}
            <LoginPopUp class="notranslate" />
          </li>

          {/* <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              {t("home-signup")}
            </Link>
          </li> */}
        </div>
      )}
    </nav>
  );
}
