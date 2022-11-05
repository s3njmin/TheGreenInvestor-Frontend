import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import {
  DollarIcon,
  MoraleIcon,
  SkullIcon,
  StarIcon,
  SustainabilityIcon,
} from "../../icons";
import GameEndAvatar from "./GenericAvatar";
import StatsDisplay from "./StatsDisplay";

import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import GameService from "../../services/GameService";

const GameEndPopup = ({
  failed,
  opened,
  handleClose,
  finalMorale,
  finalSustainability,
  finalCash,

  userName,
}) => {
  let navigate = useNavigate();

  const [user, setUser] = useState();
  const [cash, setCash] = useState();
  const [morale, setMorale] = useState();
  const [sustainability, setSustainability] = useState();
  const [totalScore, setTotalScore] = useState();

  useEffect(() => {
    async function getStateAndQuestionData() {
      await GameService.getGameState()
        .then(async (response) => {
          setTotalScore(response.data.totalScore);
          console.log(response);
        })
        .catch((error) => console.log(error));
      setUser(AuthService.getCurrentUser());
    }
    getStateAndQuestionData();
  }, [opened]);

  console.log(user);

  if (user === undefined) {
    <div> still loading </div>;
  }
  return (
    <>
      <Modal
        centered
        size="lg"
        opened={opened}
        onClose={handleClose}
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <Stack className="h-full w-full items-center">
          {!failed ? (
            <Group
              position="center"
              className="w full items-center align-center content-center"
            >
              <StarIcon className="text-2xl items-center align-center self-center text-gold-50" />
              <Text className=" text-center font-bold text-3xl text-darkGreen-50">
                Congratulations!
              </Text>
              <StarIcon className=" text-2xl items-center align-center self-center text-gold-50" />
            </Group>
          ) : (
            <>
              <Group
                position="center"
                className="w full items-center align-center content-center"
              >
                <SkullIcon className="text-2xl items-center align-center self-center text-red-600" />
                <Text className=" text-center font-bold text-3xl text-red-600">
                  You Lost!
                </Text>
                <SkullIcon className=" text-2xl items-center align-center self-center text-red-600" />
              </Group>
            </>
          )}
          <GameEndAvatar name={user && user.username} />
          {!failed ? (
            <Text className=" text-center font-bold text-lg text-darkGreen-50 ">
              YOU ARE A GREEN INVESTOR!
            </Text>
          ) : (
            <Text className=" text-center font-bold text-lg text-darkGreen-50 ">
              YOU ARE CLOSE! TRY AGAIN!
            </Text>
          )}
          <Text className=" text-center font-semibold text-lg text-darkGreen-50 ">
            {`Final Score: ${totalScore} pts`}
          </Text>
          <Group className="pt-2">
            <StatsDisplay icon={<DollarIcon />} value={finalCash} />
            <StatsDisplay icon={<MoraleIcon />} value={finalMorale} />
            <StatsDisplay
              icon={<SustainabilityIcon />}
              value={finalSustainability}
            />
          </Group>
          <Group className="pt-2">
            <Button
              className="w-32 bg-darkGreen-50 rounded-md"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </Button>
            <Button
              className="w-32 bg-darkGreen-50 rounded-md"
              onClick={() => {
                navigate("/leaderboard");
              }}
            >
              Leaderboard
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};

export default GameEndPopup;
