import React from "react";
import { Group, Stack, Text } from "@mantine/core";
import { LeafIcon, TrophyIcon } from "../../icons";
import Avatar, { genConfig } from "react-nice-avatar";

const GameEndAvatar = ({ name }) => {
  const config = genConfig({ bgColor: "#245A44" });
  return (
    <div className="h-full align-baseline items-baseline">
      <Stack className="-space-y-2 h-full items-baseline">
        <Group spacing={-2} className="self-center items-baseline -space-x-4">
          <LeafIcon
            style={{ transform: "scaleX(-1) rotate(-10deg)" }}
            className={` text-xl text-darkGreen-50`}
          />

          <Avatar style={{ width: "6rem", height: "6rem" }} {...config} />
          <LeafIcon
            className={`text-xl text-darkGreen-50`}
            style={{ transform: "rotate(-10deg)" }}
          />
        </Group>
      </Stack>

      <Text
        className={` h-full self-center text-center 
          text-2xl font-semibold
         text-darkGreen-50`}
      >
        {name}
      </Text>
    </div>
  );
};

export default GameEndAvatar;
