import {
  Center,
  Container,
  Heading,
  Stack,
  Box,
  Button,
  Spinner,
  Text,
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
    <Box>
      <Center h="100vh">
        <Box maxW="32rem" textAlign="center">
          <Heading mb={8}>Avvento dell'Elis 🎄</Heading>
          <Container>
            Benvenuti, ragazze e ragazzi all'interno del calendario dell'avvento
            dell'Elis.
          </Container>
          <Button
            leftIcon={<Spinner hidden={spinner} color="white.500" />}
            size="lg"
            colorScheme="green"
            mt="24px"
            onClick={close}
          >
            Entra
          </Button>
        </Box>
      </Center>
    </Box>
  );
}
