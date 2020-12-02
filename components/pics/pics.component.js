import {
  Box,
  Divider,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Text,
  Center,
  TagLeftIcon,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Pic from "../pic/pic.component";

export default function Pics(props) {
  const { title } = props;

  const items = [1];

  return (
    <Box p={2}>
      <Heading color="gray.600" pb={3}>
        {title}
      </Heading>
      <Wrap justify="center">
        {items.map((item) => {
          return (
            <WrapItem>
              <Pic numero={item} />
            </WrapItem>
          );
        })}
      </Wrap>
      <Center>
        <Divider orientation="vertical" h="50px"></Divider>
      </Center>
      <Box textAlign="center">
        <Text size="lg" textAlign="center">
          Torna domani! 😜
        </Text>
        <a href="https://github.com/matteomad1011/avvento-elis">
          <Tag mt={2}>
            <TagLeftIcon as={CheckIcon} />
            <TagLabel>Contribuisci su GitHub!</TagLabel>
          </Tag>
        </a>
      </Box>
    </Box>
  );
}
