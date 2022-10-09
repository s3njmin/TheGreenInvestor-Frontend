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

  

  const [selectedOption, setSelectedOption] = useState(null);

  const imageArray = [1, 2, 3];

  const [imageIndex, setImageIndex] = useState(0);

  const [index, setIndex] = useState(1);

  async function onClickHandler() {
    setIndex(index + 1);
    setQuestion(data[index]);
    setImageIndex(imageIndex + 1);
    setSelectedOption(null);
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
      if (question !== undefined) {
        const res = await axios
          .get(`http://localhost:8080/api/questions/${question.id}/options`, {
            headers: authHeader(),
            "Content-Type": "application/json",
          })
          .catch((error) => console.log(error.response));
        setOptions(res.data);
      }
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
            <Box className="h-[55%] w-full flex flex-col items-center space-y-4">
              <Text className="text-center font-semibold text-xl">
                {question.question}
              </Text>
              <img
                className="h-[70%] w-[50%] text-center rounded-2xl drop-shadow-xl"
                src={require(`../assets/img${imageArray[imageIndex]}.jpg`)}
                alt="new"
              />
            </Box>
            <Box
              size="md"
              className="h-[45%] w-full flex flex-col items-center space-y-2"
            >
              <Button
                onClick={() => setSelectedOption(0)}
                size="md"
                className={
                  selectedOption === 0
                    ? "w-[80%] h-full opacity-80 bg-darkGreen-50 text-white"
                    : " w-[80%] h-full opacity-80 bg-gray-50 text-black"
                }
                styles={(theme) => ({
                  root: {
                    "&:hover": {
                      backgroundColor: theme.fn.darken("#245A44", 0.05),
                    },
                  },
                })}
              >
                {options[0].option}
              </Button>
              <Button
                onClick={() => setSelectedOption(1)}
                size="md"
                className={
                  selectedOption === 1
                    ? "w-[80%] h-full opacity-80 bg-darkGreen-50 text-white"
                    : " w-[80%] h-full opacity-80 bg-gray-50 text-black"
                }
                styles={(theme) => ({
                  root: {
                    "&:hover": {
                      backgroundColor: theme.fn.darken("#245A44", 0.05),
                    },
                  },
                })}
              >
                {options[1].option}
              </Button>
              <Button
                onClick={() => setSelectedOption(2)}
                size="md"
                className={
                  selectedOption === 2
                    ? "w-[80%] h-full opacity-80 bg-darkGreen-50 text-white"
                    : " w-[80%] h-full opacity-80 bg-gray-50 text-black"
                }
                styles={(theme) => ({
                  root: {
                    "&:hover": {
                      backgroundColor: theme.fn.darken("#245A44", 0.05),
                    },
                  },
                })}
              >
                {options[2].option}
              </Button>
              <Button
                onClick={() => setSelectedOption(3)}
                size="md"
                className={
                  selectedOption === 3
                    ? "w-[80%] h-full opacity-80 bg-darkGreen-50 text-white"
                    : " w-[80%] h-full opacity-80 bg-gray-50 text-black"
                }
                styles={(theme) => ({
                  root: {
                    "&:hover": {
                      backgroundColor: theme.fn.darken("#245A44", 0.05),
                    },
                  },
                })}
              >
                {options[3].option}
              </Button>

              <Button
                onClick={onClickHandler}
                disabled={selectedOption === null ? true : false}
                size="md"
                className="h-[90%] w-[15%] bg-darkGreen-50 text-white"
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
