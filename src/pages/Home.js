import React, { useEffect, useState } from "react";
import { Link, Route, Router, useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { variants } from "../assets/Animations";

import UserService from "../services/user.service";
import { displayContent } from "../assets/LandingPageDisplayContent";
import { PrevIcon } from "../icons";

import authService from "../services/auth.service";

export default function Home() {
  const [content, setContent] = useState("");

  const [activeTab, setActiveTab] = useState("first");

  const [currentUser, setCurrentUser] = useState(undefined);

  const { t } = useTranslation();

  let navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }

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

  // const tabValues = ["first", "second", "third", "forth"];
  const tabValues = ["first", "third", "forth"];

  function handleNextClick() {
    let oldIndex = tabValues.indexOf(activeTab);
    setActiveTab(tabValues[++oldIndex]);
  }
  function handlePrvClick() {
    let oldIndex = tabValues.indexOf(activeTab);
    setActiveTab(tabValues[--oldIndex]);
  }

  function makeid(length) {
    var result = "";
    var characters = "0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async function signUpAsGuest() {
    var username = "Guest" + makeid(5);
    var email = username + "@thegreeninvestor.com";
    var password = "123456";
    authService.register(username, email, password, "GUEST").then();
    await new Promise((r) => setTimeout(r, 1000));
    authService.login(username, password).then(() => {
      navigate("/game");
      window.location.reload();
    });
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      style={{ marginTop: 30, height: "170px" }}
    >
      {/* <img className="pb-3" src={thegreeninvestor} alt="thegreeninvestorlogo" /> */}
      <Box className="bg-gray-50 bg-opacity-70 h-[75vh] rounded-xl align-middle w-full pt-2 pr-20 pl-20 pb-4">
        <h1 className="text-center text-darkGreen-50">
        {t('welcome')}
        </h1>

        <Stack className="h-full" justify="space-between">
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
                {t('home-tab1')}
              </Tabs.Tab>
              {/* <Tabs.Tab className="lg:text-md xl:text-xl" value="second">
                What is Sustainability?
              </Tabs.Tab> */}
              <Tabs.Tab className="lg:text-md xl:text-xl" value="third">
              {t('home-tab2')}
              </Tabs.Tab>
              <Tabs.Tab className="lg:text-md xl:text-xl" value="forth">
              {t('home-tab3')}
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel className="h-[36vh] overflow-auto" value="first">
              {t('home-tab1-body')}
            </Tabs.Panel>
            {/* <Tabs.Panel className="h-[36vh] overflow-auto" value="second">
              {displayContent[1].src}
            </Tabs.Panel> */}
            <Tabs.Panel className="h-[36vh] overflow-auto" value="third">
              {t('home-tab2-body')}
            </Tabs.Panel>
            <Tabs.Panel className="h-[36vh] overflow-auto" value="forth">
              {t('home-tab3-body')}
            </Tabs.Panel>
          </Tabs>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" w-full h-full flex flex-grow items-center mt-auto align-baseline justify-center "
          >
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
                {t('home-button-next')}
              </Button>
            ) : currentUser ? (
              <Link to="/game" className="">
                <Button size="lg" className="bg-darkGreen-50 mt-auto ">
                {t('home-button-playgame')}
                </Button>
              </Link>
            ) : (
              <Button
                size="lg"
                className="bg-darkGreen-50"
                onClick={signUpAsGuest}
              >
                {t('home-button-playguest')}
              </Button>
            )}
            {activeTab !== "first" && <div class="flex-1"></div>}
          </motion.div>
        </Stack>
      </Box>
    </motion.div>
  );
}
