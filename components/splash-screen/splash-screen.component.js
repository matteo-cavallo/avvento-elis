import {
  Center,
  Container,
  Heading,
  Stack,
  Box,
  Button,
  Spinner,
  Text,
  Fade,
  Image,
} from "@chakra-ui/react";

import { useState } from "react";

export default function SplashScreen({ handleClick }) {
  const [spinner, setSpinner] = useState(true);

  const close = async () => {
    setSpinner(false);
    setTimeout(() => {
      setSpinner(true);
      handleClick();
    }, 2000);
  };

  return (
    <Center h="100vh">
      <Box maxW="32rem" textAlign="center">
        <Center mb={8}>
          <Image src="santa.svg" w="200px" align="center" />
        </Center>
        <Heading>Avvento 2020 🎄</Heading>
        <Heading mb={8} size="sm">
          2º Anno ELIS Digital University
        </Heading>
        <Container>
          Benvenuti, ragazze e ragazzi all'interno del calendario dell'avvento
          dell'ELIS.
        </Container>
        <Button
          size="lg"
          colorScheme="green"
          mt="24px"
          onClick={close}
          isLoading={!spinner}
        >
          Entra
        </Button>
      </Box>
    </Center>
  );
}
