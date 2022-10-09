import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import BarChart from "./BarChart";
import IncrementChip from "./IncrementChip";
import LineChart from "./LineChart";

const DataMetric = ({ label, icon, value, unit, hasChart, increment }) => {
  return (
    <Stack
      spacing={4}
      className={`border border-solid border-gray-800 rounded-sm p-4 bg-gray-50 bg-opacity-50 h-full w-full justify-between `}
    >
      <Group
        spacing="xs"
        className="inline-flex text-xs mb-1 space-x-0 text-center rounded-full"
      >
        {icon}
        <Text className="text-gray-500 text-base xl:text-md">{label}</Text>

        {/* <Tooltip label={toolTipBox} withArrow width={220}>
          <InformationIcon color="gray" />
        </Tooltip> */}
      </Group>

      <Group className="items-end" spacing={4}>
        <Text className="font-semibold text-xl xl:text-3xl">{value}</Text>
        <Text className="text-gray-500">{unit}</Text>
        <IncrementChip className="mb-1 ml-2" increment={increment} />
      </Group>
      <div className="h-full">{hasChart ? <LineChart /> : <BarChart />}</div>
    </Stack>
  );
};

export default DataMetric;
