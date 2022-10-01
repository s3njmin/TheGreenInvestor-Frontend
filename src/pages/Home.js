import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <h1 className="text-center" style={{ color: "whitesmoke" }}>Welcome to The Green Investor</h1>

        <div className="text-center">
          <Link to="/game" className="">
            <button className="btn btn-primary btn-lg" style={{ width: "30vh" }}>Play Game</button>
          </Link>

        </div>
      </div>
    );
  }
}
