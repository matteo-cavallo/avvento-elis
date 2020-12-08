import {
  AspectRatio,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "../components/header/header.component";

export default function InfoPage() {
  return (
    <Box>
      <Header></Header>
      <Box p={4}>
        <Heading mb={4}>Info</Heading>
        <Heading color="gray.600" mb={4} fontSize="sm">
          PRIVACY POLICY
        </Heading>
        <Container fontSize="xl">
          Tutti i contenuti all'interno di questa applicazione non vogliono
          essere in alcun modo offensivi o altro. Tutti i video e le immagini
          non sono e non verrano condivise con nessuno che non sia presente
          all'interno della crew dell'ELIS. Ogni persona che ottiene l'accesso a
          questa app tramite il link 'https://avvento-elis.vercel.app/' si
          ritiene responsabile della condivisione inopportuna. I dati sono
          salvati interamente su database Firebase e verranno eliminati il 31 di
          Dicembre (a patto di eventuali richieste).
        </Container>
        <Heading color="gray.600" mt={8} mb={4} fontSize="sm">
          OPEN SOURCE
        </Heading>
        <Container fontSize="xl">
          Il progetto non è in alcun modo finanziato o commissionato. E' inoltre
          ben accetto qualsiasi tipo di miglioramento o aggiornamento: grafico o
          funzionale
        </Container>
        <Heading color="gray.600" mt={8} mb={4} fontSize="sm">
          BRANCH
        </Heading>
        <Container>
          <Stack direction="row" align="center">
            <Image h="17px" src="/github.png" />
            <Link href="https://github.com/matteomad1011/avvento-elis">
              main
            </Link>
          </Stack>
        </Container>
        <Center>
          <Divider w="80%" mt={4}></Divider>
        </Center>
        <Text fontSize="md">
          v0.2 - Powered by <a></a>@matteocavallo
        </Text>
      </Box>
    </Box>
  );
}
