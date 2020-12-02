import { Box, Button, Divider, Flex, Heading, Spacer } from "@chakra-ui/react";

export default function Header() {
  const handleClick = () => {
    alert("Coming Soon");
  };
  return (
    <Box>
      <Flex p={2}>
        <Box p="2">
          <Heading size="md">Avvento Elis 🎄</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button
            variant="outline"
            rightIcon={"🤔"}
            size="md"
            colorScheme="green"
            onClick={handleClick}
          >
            Info
          </Button>
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
}
