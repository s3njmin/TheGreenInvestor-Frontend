import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import React from "react";
import {
  DollarIcon,
  MoraleIcon,
  SkullIcon,
  StarIcon,
  SustainabilityIcon,
} from "../../icons";
import GameEndAvatar from "./GameEndAvatar";
import StatsDisplay from "./StatsDisplay";

import { useNavigate } from "react-router-dom";

const GameEndPopup = ({
  failed,
  opened,
  handleClose,
  finalScore,
  userName,
}) => {
  let navigate = useNavigate();
  return (
    <>
      <Modal
        centered
        size="lg"
        opened={opened}
        onClose={handleClose}
        withCloseButton={false}
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
          <GameEndAvatar name={userName} />
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
            {`Final Score: ${finalScore} pts`}
          </Text>
          <Group className="pt-2">
            <StatsDisplay icon={<DollarIcon />} value={2000} />
            <StatsDisplay icon={<MoraleIcon />} value={3400} />
            <StatsDisplay icon={<SustainabilityIcon />} value={1000} />
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
