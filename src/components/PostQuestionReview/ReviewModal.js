import { Modal, Button, Group, Text, Stack } from "@mantine/core";
import IncrementChip from "../DataMetric/IncrementChip";

export default function ReviewModal({
  cash,
  sustainability,
  morale,
  content,
  opened,
  handleClose,
}) {
  return (
    <>
      <Modal
        centered
        size="lg"
        className="font-bold text-xl"
        opened={opened}
        onClose={handleClose}
        title="Post Question Review"
      >
        <Stack>
          <Text className="text-base font-normal">{content}</Text>

          <Group spacing={6} className="text-base font-normal">
            {`Find out more in this`}
            <a
              key={1}
              className="text-base font-normal text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.newyorker.com/topics/gay-marriage-movement"}
            >
              <Text className="text-base font-normal text-blue-500">
                article
              </Text>
            </a>
          </Group>
          <Text>Update of your Statistics</Text>
          <Group position="apart" className="w-full h-full ">
            <Group spacing={6} className="text-base font-semi-bold ">
              <Text>Cash</Text>
              <div className="pt-1">
                <IncrementChip increment={cash} unit={"SGD"} />
              </div>
            </Group>
            <Group spacing={6} className="text-lg font-semi-bold ">
              <Text>Morale</Text>
              <div className="pt-1">
                <IncrementChip increment={morale} unit={"%"} />
              </div>
            </Group>
            <Group spacing={6} className="text-base font-semi-bold">
              <Text>Sustainability</Text>
              <div className="pt-1">
                <IncrementChip increment={sustainability} unit={"pts"} />
              </div>
            </Group>
          </Group>
          <div></div>
          <Button
            className="bg-darkGreen-50 text-white w-1/8 self-center "
            onClick={handleClose}
          >
            Continue
          </Button>
        </Stack>
      </Modal>
    </>
  );
}