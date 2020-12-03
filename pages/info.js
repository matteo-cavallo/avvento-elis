import { Box, Divider, Heading, Text } from "@chakra-ui/react";

export default function InfoPage() {
  return (
    <Box p={4}>
      <Heading mb={4}>Info</Heading>
      <Heading fontSize="sm">PRIVACY POLICY</Heading>
      <Text fontSize="xl">
        Tutti i contenuti all'interno di questa applicazione non vogliono essere
        in alcun modo offensivi o altro. Tutti i video e le immagini non sono e
        non verrano condivise con nessuno che non sia presente all'interno della
        crew dell'Elis. Ogni persona che ottiene l'accesso a questa app tramite
        il link 'https://avvento-elis-cs87dbnn9.vercel.app/' si ritiene
        responsabile della condivisione inopportuna. I dati sono salvati
        interamente su database Firebase e verranno eliminati il 31 di Dicembre
        (a patto di eventuali richieste).
      </Text>
      <Divider mt={4}></Divider>
      <Text fontSize="md">
        Powered by <a></a>@matteocavallo
      </Text>
    </Box>
  );
}
