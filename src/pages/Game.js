import React, { useState, useEffect, Component } from "react";
import { motion } from "framer-motion";

import { variants } from "../assets/Animations";

import DataMetric from "../components/DataMetric/DataMetric";
import { CashIcon, MoraleIcon, SustainabilityIcon } from "../icons";
import { Box, Grid, Text, Button, Group } from "@mantine/core";

import authHeader from "../services/auth-header";

import axios from "axios";

export default function Game() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState();

  const [index, setIndex] = useState(1);

  async function onClickHandler() {
    setIndex(index + 1);
    setQuestion(data[index]);
  }
  console.log(index);

  useEffect(() => {
    setLoading(true);
    async function getAllData() {
      await axios
        .get("http://localhost:8080/api/questions", {
          headers: authHeader(),
          "Content-Type": "application/json",
        })
        .then(async (response) => {
          await setData(response.data);
          await setQuestion(response.data[0]);
          return axios.get(`http://localhost:8080/api/questions/1/options`, {
            headers: authHeader(),
            "Content-Type": "application/json",
          });
        })
        .then((response) => {
          setOptions(response.data);
        })
        .then(() => {
          setLoading(false);
        })
        .catch((error) => console.log(error.response));
    }
    getAllData();
  }, []);

  useEffect(() => {
    async function getOptions() {
      await axios
        .get(`http://localhost:8080/api/questions/${question.id}/options`, {
          headers: authHeader(),
          "Content-Type": "application/json",
        })
        .catch((error) => console.log(error.response));
    }
    getOptions();
  }, [question]);

  if (data === undefined || question === undefined || options === undefined) {
    return <>Still loading...</>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      <Box className="bg-gray-50 bg-opacity-70 h-[85vh] rounded-xl align-middle w-full pt-2 pr-2 pl-2 pb-2">
        <Grid className="h-full w-full">
          <Grid.Col span={7} className="h-full">
            <Box className="h-[55%] w-full flex flex-col items-center space-y-2">
              <Text className="text-center font-semibold text-xl">
                {question.question}
              </Text>
              <img
                className="h-[70%] w-[70%] text-center"
                src={require(`../assets/img1.jpg`)}
                alt="new"
              />
            </Box>
            <Box
              size="md"
              className="h-[45%] w-full flex flex-col items-center space-y-2"
            >
              <Button
                size="md"
                className="w-[80%] h-full opacity-80 bg-gray-50 text-black"
              >
                {options[0]}
              </Button>
              <Button
                size="md"
                className="w-[80%] h-full opacity-80 bg-gray-50 text-black"
              >
                {options[1]}
              </Button>
              <Button
                size="md"
                className="w-[80%] h-full opacity-80 bg-gray-50 text-black"
              >
                {options[2]}
              </Button>
              <Button
                size="md"
                className="w-[80%] h-full opacity-80 bg-gray-50 text-black"
              >
                {options[3]}
              </Button>

              <Button
                onClick={onClickHandler}
                size="md"
                className="h-[90%] bg-darkGreen-50 text-black"
              >
                Submit
              </Button>
            </Box>
          </Grid.Col>
          <Grid.Col span={5} className="h-full w-full space-y-2">
            <Box className="h-[53%] w-full space-y-2">
              <DataMetric
                hasChart={true}
                icon={<CashIcon color="grey" className="text-xl" />}
                increment={5}
                value={40}
                unit={"SGD"}
                label="Cash"
              />
            </Box>

            <Box className="h-[47%] w-full flex flex-row space-x-2">
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
          </Grid.Col>
        </Grid>
      </Box>
    </motion.div>
  );
}

// {/* <div className="RectangleQuestions center">
// <div className="q-container">
//   <div className="quodrant1">
//     <h1 className="text-center">Placeholder</h1>
//     <p className="text-center">Placeholder</p>
//   </div>
//   <div className="quodrant2">
//     <DataMetric
//       hasChart={true}
//       icon={<CashIcon color="grey" className="text-xl" />}
//       increment={5}
//       value={40}
//       unit={"SGD"}
//       label="Cash"
//     />
//     {/* <h2 className="text-center">Placeholder for more text here</h2> */}
//   </div>
//   <div className="quodrant3">
//     <button className="block glow-button">btn1</button>
//     <button className="block glow-button">btn2</button>
//     <button className="block glow-button">btn3</button>
//     <button className="block glow-button">btn4</button>
//   </div>
//   <div className="quodrant4">
//     <Box className="h-[33vh] space-x-4 flex flex-row">
//       <DataMetric
//         increment={-5}
//         icon={<MoraleIcon color="grey" className="text-xl" />}
//         value={40}
//         unit={"%"}
//         label="Morale"
//       />
//       <DataMetric
//         icon={<SustainabilityIcon color="grey" className="text-xl" />}
//         increment={7}
//         value={54}
//         unit={"%"}
//         label="Sustainability"
//       />
//     </Box>
//     {/* <div className='barcontainer'>
//                       <div className='bar' style={{ height: '75%', background: '#EA6042' }}>75%</div>
//                       <div className='bar' style={{ height: '25%', background: '#86E577' }}>25%</div>
//                       <div className='bar' style={{ height: '50%', background: '#ECF029' }}>50%</div>
//                   </div> */}
//   </div>
// </div>
// </div> */}
