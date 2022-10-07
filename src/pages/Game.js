import React, { Component } from "react";
import { motion } from "framer-motion";

import GameService from "../services/GameService";
import thegreeninvestor from "../assets/thegreeninvestor.png";
import DataMetric from "../components/DataMetric/DataMetric";
import { CashIcon, MoraleIcon, SustainabilityIcon } from "../icons";
import { Box } from "@mantine/core";

const variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.5,
      type: "spring",
      duration: 1.5,
    },
  },
};

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
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
      >
        <img src={thegreeninvestor} alt="thegreeninvestorlogo" />
        <div className="RectangleQuestions center">
          <div className="q-container">
            <div className="quodrant1">
              <h1 className="text-center">Placeholder</h1>
              <p className="text-center">Placeholder</p>
            </div>
            <div className="quodrant2">
              <DataMetric
                hasChart={true}
                icon={<CashIcon color="grey" className="text-xl" />}
                increment={5}
                value={40}
                unit={"SGD"}
                label="Cash"
              />
              {/* <h2 className="text-center">Placeholder for more text here</h2> */}
            </div>
            <div className="quodrant3">
              <button className="block glow-button">btn1</button>
              <button className="block glow-button">btn2</button>
              <button className="block glow-button">btn3</button>
              <button className="block glow-button">btn4</button>
            </div>
            <div className="quodrant4">
              <Box className="h-[33vh] space-x-4 flex flex-row">
                <DataMetric
                  increment={-5}
                  icon={<MoraleIcon color="grey" className="text-xl" />}
                  value={40}
                  unit={"%"}
                  label="Morale"
                />
                <DataMetric
                  icon={<SustainabilityIcon color="grey" className="text-xl" />}
                  increment={7}
                  value={54}
                  unit={"%"}
                  label="Sustainability"
                />
              </Box>
              {/* <div className='barcontainer'>
                                <div className='bar' style={{ height: '75%', background: '#EA6042' }}>75%</div>
                                <div className='bar' style={{ height: '25%', background: '#86E577' }}>25%</div>
                                <div className='bar' style={{ height: '50%', background: '#ECF029' }}>50%</div>
                            </div> */}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
