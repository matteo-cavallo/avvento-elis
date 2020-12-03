import { Box, Button, Divider, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const handleClick = (href) => {
    //const router = useRouter();
    router.push(href);
  };
  return (
    <Box>
      <Flex p={2}>
        <Box p="2">
          <Heading onClick={() => handleClick("/home")} size="md">
            Avvento Elis 🎄
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Button
            variant="outline"
            rightIcon={"🤔"}
            size="md"
            colorScheme="green"
            onClick={() => handleClick("/info")}
          >
            Info
          </Button>
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
}
