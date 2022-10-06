import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { motion } from "framer-motion";

import thegreeninvestor from "../assets/thegreeninvestor.png";

import UserService from "../services/user.service";
import { displayContent } from "../assets/LandingPageDisplayContent";
import { PrevIcon } from "../icons";

export default function Home() {
  const [content, setContent] = useState("");

  const [activeTab, setActiveTab] = useState("first");

  useEffect(() => {
    const getPublicContent = async () => {
      try {
        const res = await UserService.getPublicContent();
        setContent(res.data);
      } catch (error) {
        setContent(
          (error.response && error.response.data) ||
            error.message ||
            error.toString()
        );
      }
    };
    getPublicContent();
  }, []);

  const tabValues = ["first", "second", "third", "forth"];

  function handleNextClick() {
    let oldIndex = tabValues.indexOf(activeTab);
    setActiveTab(tabValues[++oldIndex]);
  }
  function handlePrvClick() {
    let oldIndex = tabValues.indexOf(activeTab);
    setActiveTab(tabValues[--oldIndex]);
  }

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{ marginTop: 30, height: "170px" }}
    >
      <img className="pb-3" src={thegreeninvestor} alt="thegreeninvestorlogo" />
      <Box className="bg-gray-50 bg-opacity-70 h-[70vh] rounded-xl align-middle w-full pt-2 pr-20 pl-20 pb-20">
        <h1 className="text-center text-darkGreen-50">
          Welcome to the Sustainability Game!
        </h1>

        <Stack className="h-[50vh]" justify="space-between">
          <Tabs
            value={activeTab}
            onTabChange={setActiveTab}
            color="teal"
            className="h-full"
            styles={(theme) => ({
              tab: {
                "&[data-active]": {
                  borderColor: theme.colors.teal[9],
                  color: theme.colors.teal[9],
                },
              },
            })}
          >
            <Tabs.List layout position="apart">
              <Tabs.Tab className="lg:text-md xl:text-xl" value="first">
                Introduction
              </Tabs.Tab>
              <Tabs.Tab className="lg:text-md xl:text-xl" value="second">
                What is Sustainability?
              </Tabs.Tab>
              <Tabs.Tab className="lg:text-md xl:text-xl" value="third">
                Importance of Sustainability
              </Tabs.Tab>
              <Tabs.Tab className="lg:text-md xl:text-xl" value="forth">
                How to Play?
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel className="h-[36vh] overflow-auto" value="first">
              {displayContent[0].src}
            </Tabs.Panel>
            <Tabs.Panel className="h-[36vh] overflow-auto" value="second">
              {displayContent[1].src}
            </Tabs.Panel>
            <Tabs.Panel className="h-[36vh] overflow-auto" value="third">
              {displayContent[2].src}
            </Tabs.Panel>
            <Tabs.Panel className="h-[36vh] overflow-auto" value="forth">
              {displayContent[3].src}
            </Tabs.Panel>
          </Tabs>

          <div className=" w-full flex items-center align-baseline justify-center ">
            {activeTab !== "first" && (
              <div className="flex-1">
                <PrevIcon
                  className="text-darkGreen-50 cursor-pointer text-center h-16 w-20"
                  onClick={handlePrvClick}
                />
              </div>
            )}
            {activeTab !== "forth" ? (
              <Button
                size="lg"
                className="bg-darkGreen-50 justify-center items-center  text-center items"
                onClick={handleNextClick}
              >
                Next
              </Button>
            ) : (
              <Link to="/game" className="">
                <Button size="lg" className="bg-darkGreen-50 ">
                  Play Game
                </Button>
              </Link>
            )}
            {activeTab !== "first" && <div class="flex-1"></div>}
          </div>
        </Stack>
      </Box>
    </motion.div>
  );
}
