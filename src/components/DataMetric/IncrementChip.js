import { Box, Text } from "@mantine/core";
import React from "react";
import { DecreaseIcon, IncreaseIcon } from "../../icons";

const IncrementChip = ({ increment, unit }) => {
  const colorString =
    increment < 0 ? "red" : increment === 0 ? "yellow" : "green";
  return (
    <Box
      sx={(theme) => ({
        padding: "2px 12px",
        backgroundColor: theme.colors[colorString][4],
        borderColor: theme.colors[colorString][9],
        color: theme.colors[colorString][9],
      })}
      className={`inline-flex border border-solid text-xs mb-1 space-x-1 text-center rounded-full`}
    >
      {increment > 0 ? (
        <IncreaseIcon className="h-5" />
      ) : increment < 0 ? (
        <DecreaseIcon className="h-5" />
      ) : (
        <IncreaseIcon className="h-5" style={{ transform: "rotate(10deg)" }} />
      )}
      <Text className="notranslate">{`${increment} ${unit}`}</Text>
    </Box>
  );
};

export default IncrementChip;
