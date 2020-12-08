import {
  Box,
  Divider,
  Heading,
  Stack,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Pic from "../pic/pic.component";

import { firestore, storage } from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import Pellicola from "../pellicola/pellicola.component";
import { MdCheckCircle } from "react-icons/md";

function Pics(props) {
  const { title } = props;

  const { docs } = useFirestore("video");

  return (
    <Stack p={4} spacing={6}>
      <Box>
        <Heading size="lg">🤩 Ultime Novità</Heading>
        <Box bgColor="whitesmoke" rounded="lg" my={2} p={4}>
          <List>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Aggiunta la possibilità di mettere mi piace!
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Alcuni piccoli miglioramenti della grafica.
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box>
        <Heading size="lg">📆 Calendario</Heading>
        <SimpleGrid columns={2} pt={4} spacing="20px" minChildWidth="120px">
          {docs &&
            docs.map((pic) => (
              <Pellicola
                key={pic.id}
                img={pic.thumbnail}
                title={pic.title}
                src={pic.id}
                day={pic.giorno}
                url={pic.src}
                idle={false}
              />
            ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading mb={4} size="lg">
          🤷🏼‍♂️ Da un'idea di...
        </Heading>
        <Pic
          idle
          img="https://firebasestorage.googleapis.com/v0/b/avvento-elis.appspot.com/o/thumbnails%2FWhatsApp%20Image%202020-12-05%20at%2020.31.10.jpeg?alt=media&token=1b704ecb-93c3-4906-a182-f9a0799d43ed"
          numero={1}
          title="Lorenzo Manoni (BigHands)"
        />
      </Box>
      <Box>
        <Heading mb={4} size="lg">
          👨🏻‍💻 Sviluppato da
        </Heading>
        <Pic
          idle
          img="https://firebasestorage.googleapis.com/v0/b/avvento-elis.appspot.com/o/thumbnails%2FDAD899C3-AEFE-487E-984D-EC0087F3CB86_1_105_c.jpeg?alt=media&token=61bd0174-7449-408b-8218-be41ff0b90f0"
          numero={1}
          title="Matteo Cavallo (matteomad)"
        />
      </Box>
    </Stack>
  );
}

export default Pics;
