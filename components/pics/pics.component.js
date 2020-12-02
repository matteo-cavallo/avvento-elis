import {
  Box,
  Divider,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Text,
  Center,
} from "@chakra-ui/react";
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
      <Stack>
        <Text size="lg" textAlign="center">
          Torna domani! 😜
        </Text>
      </Stack>
    </Box>
  );
}
