import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../css/barchart.css";
import "../css/navbar.css";

import { MusicUpIcon, MusicOffIcon } from "../icons";
import thegreeninvestor from "../assets/thegreeninvestor.png";
import myMusic from "../assets/music.mp3";
import MuteButton from "./MuteButton";

import AuthService from "../services/auth.service";
// import AuthVerify from "./common/auth-verify";
import EventBus from "../common/EventBus";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  _toggleMuteButton() {
    var myAudio = document.getElementById("audio_player");
    myAudio.muted = !myAudio.muted;

    this.setState({
      isMuted: !this.state.isMuted,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <nav className="navbar navbar-expand h-12 bg-gradient-to-r from-transparent via-teal-400/70 border-bottom-line h-15">
        <audio id="audio_player" autoPlay loop>
          {/* <source src={myMusic} type="audio/mp3" /> */}
          <source src={null} type="audio/mp3" />
        </audio>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/leaderboard"}
              className="nav-link"
              onClick={this.toggleMute}
            >
              Leaderboard
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        <img
          className="logo"
          src={thegreeninvestor}
          alt="thegreeninvestorlogo"
        />
        <div className="navbar-nav ml-auto">
          <li className="nav-item pt-2 pr-2">
            <span className="changeColor">
              <MuteButton
                isMuted={this.state.isMuted}
                _toggleMuteButton={this._toggleMuteButton.bind(this)}
              />
            </span>
          </li>
        </div>

        {currentUser ? (
          <div className="navbar-nav">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={this.logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Log In
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
    );
  }
}
