import { Box, Text, Stack, Group, LoadingOverlay } from "@mantine/core";
import React, { useEffect, useState } from "react";
import RemainingAvatars from "../components/Leaderboard/RemainingAvatars";
import TopThreeAvatar from "../components/Leaderboard/TopThreeAvatar";

import { userStatsData } from "../components/Leaderboard/MockLeaderboardStats";
import LeaderboardService from "../services/LeaderboardService";
const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState();

  useEffect(() => {
    async function getLeaderboardData() {
      await LeaderboardService.getLeaderboardDetails().then((response) =>
        setLeaderboardData(response.data)
      );
    }
    getLeaderboardData();
  }, []);

  console.log(leaderboardData);

  let sources =
    leaderboardData &&
    leaderboardData.slice(3).map((userData) => console.log(userData));

  console.log(leaderboardData);

  if (leaderboardData === undefined) {
    return (
      <Box className="bg-gray-50 bg-opacity-70 h-[85vh] rounded-xl align-middle relative w-full pt-2 pr-2 pl-2 pb-2">
        <LoadingOverlay
          loaderProps={{ size: "xl", color: "black" }}
          overlayOpacity={0.0}
          overlayColor="#c5c5c5"
          visible
        />
      </Box>
    );
  }
  return (
    <Box className="bg-gray-50 bg-opacity-70 h-[85vh] space-y-4 rounded-xl align-middle w-[60%] pt-4 pr-22 pl-22 pb-12  items-center justify-center scrollbar-hide overflow-auto">
      <Text className="text-center font-bold text-4xl text-darkGreen-50">
        Leaderboard
      </Text>
      <Group position="apart" className="items-end pl-20 pr-20">
        <TopThreeAvatar
          first={false}
          position={"second"}
          image={
            leaderboardData[1] && leaderboardData[1].user.profileImageIndex
          }
          name={leaderboardData[1] && leaderboardData[1].user.username}
          points={leaderboardData[1] && leaderboardData[1].totalScore}
        />
        <TopThreeAvatar
          first={true}
          position={"first"}
          image={
            leaderboardData[0] && leaderboardData[0].user.profileImageIndex
          }
          name={leaderboardData[0] && leaderboardData[0].user.username}
          points={leaderboardData[0] && leaderboardData[0].totalScore}
        />
        <TopThreeAvatar
          first={false}
          position={"third"}
          image={
            leaderboardData[2] && leaderboardData[2].user.profileImageIndex
          }
          name={leaderboardData[2] && leaderboardData[2].user.username}
          points={leaderboardData[2] && leaderboardData[2].totalScore}
        />
      </Group>
      <Stack align="center" className="pl-32 pr-32">
        <>
          {leaderboardData.slice(3).map((userStats) => (
            <RemainingAvatars
              key={1}
              position={leaderboardData.indexOf(userStats) + 1}
              score={userStats.totalScore}
              name={userStats.user.username}
              image={userStats.user.profileImageIndex}
            />
          ))}
        </>
      </Stack>
    </Box>
  );
};

export default Leaderboard;
