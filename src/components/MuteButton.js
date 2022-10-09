import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MusicUpIcon, MusicOffIcon } from "../icons";

class MuteButton extends Component {
  render() {
    if (this.props.isMuted === true) {
      return (
        <div onClick={this.props._toggleMuteButton}>
          <MusicOffIcon icon="volume-mute" size="30" />
        </div>
      );
    }
    return (
      <div onClick={this.props._toggleMuteButton}>
        <MusicUpIcon icon="volume-up" size="30" />
      </div>
    );
  }
}

export default MuteButton;
