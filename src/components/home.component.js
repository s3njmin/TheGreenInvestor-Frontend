import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  // render() {
  //   return (
  //     <div className="container">
  //       <header className="jumbotron">
  //         <h3>{this.state.content}</h3>
  //       </header>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div style={{ marginTop: 200, height: "170px" }}>
        <header
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            height: "170px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              verticalAlign: "bottom",
            }}
          >
            {"Start Game"}
          </h3>
        </header>
      </div>
    );
  }
}
