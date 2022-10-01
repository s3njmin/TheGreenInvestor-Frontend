import React, { Component } from "react";

import GameService from "../services/GameService";
import thegreeninvestor from "../assets/thegreeninvestor.png";


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //   content: ""
            // data: []
        };
    }

    componentDidMount() {
        // GameService.getGameContent().then(
        //   response => {
        //     this.setState({
        //       data: response.data
        //     });
        //   },
        //   error => {
        //     this.setState({
        //       content:
        //         (error.response && error.response.data) ||
        //         error.message ||
        //         error.toString()
        //     });
        //   }
        // );
    }

    render() {
        return (
            <div>
                <img src={thegreeninvestor} alt="thegreeninvestorlogo" />
                <div className="RectangleQuestions center">

                    <div className='q-container'>
                        <div className='quodrant1'>
                            <h1 className="text-center">Placeholder</h1>
                            <p className="text-center">Placeholder</p>
                        </div>
                        <div className='quodrant2'>
                            <h2 className="text-center">Placeholder for more text here</h2>
                        </div>
                        <div className='quodrant3'>

                            <button className="block glow-button">btn1</button>
                            <button className="block glow-button">btn2</button>
                            <button className="block glow-button">btn3</button>
                            <button className="block glow-button">btn4</button>

                        </div>
                        <div className='quodrant4'>
                            <div className='barcontainer'>
                                <div className='bar' style={{ height: '75%', background: '#EA6042' }}>75%</div>
                                <div className='bar' style={{ height: '25%', background: '#86E577' }}>25%</div>
                                <div className='bar' style={{ height: '50%', background: '#ECF029' }}>50%</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        );
    }

}
