import { Box, Text, Stack, Group } from "@mantine/core";
import React from "react";
import RemainingAvatars from "../components/Leaderboard/RemainingAvatars";
import TopThreeAvatar from "../components/Leaderboard/TopThreeAvatar";

import { userStatsData } from "../components/Leaderboard/MockLeaderboardStats";
const Leaderboard = () => {
  return (
    <Box className="bg-gray-50 bg-opacity-70 h-[85vh] space-y-4 rounded-xl align-middle w-[60%] pt-4 pr-22 pl-22 pb-12  items-center justify-center scrollbar-hide overflow-auto">
      <Text className="text-center font-bold text-4xl text-darkGreen-50">
        Leaderboard
      </Text>
      <Group position="apart" className="items-end pl-20 pr-20">
        <TopThreeAvatar
          first={false}
          position={"second"}
          name={"Sarah"}
          points={990}
        />
        <TopThreeAvatar
          first={true}
          position={"first"}
          name={"Bobby"}
          points={1000}
        />
        <TopThreeAvatar
          first={false}
          position={"third"}
          name={"Tommy"}
          points={850}
        />
      </Group>
      <Stack align="center" className="pl-32 pr-32">
        <>
          {userStatsData.map((userStats) => (
            <RemainingAvatars
              key={userStats.positon}
              position={userStats.positon}
              score={userStats.score}
              name={userStats.name}
            />
          ))}
        </>
      </Stack>
    </Box>
  );
};

export default Leaderboard;
