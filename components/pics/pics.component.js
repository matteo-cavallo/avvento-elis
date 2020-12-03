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
  Flex,
  pseudoSelectors,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Pic from "../pic/pic.component";

import { firestore, storage } from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
import useFirestore from "../../hooks/useFirestore";

function Pics(props) {
  const { title } = props;

  const { docs } = useFirestore("video");
  console.log(docs);

  return (
    <Stack p={4} spacing={6}>
      <Box>
        <Heading mb={4} size="lg">
          🤷🏼‍♂️ Ecco il creatore...
        </Heading>
        <Pic
          idle
          img="https://firebasestorage.googleapis.com/v0/b/avvento-elis.appspot.com/o/thumbnails%2F1.JPG?alt=media&token=4407547b-ddcc-4f31-8c0c-c56d9e2091ed"
          numero={1}
          title="Lorenzo Manoni (BigHands)"
        />
      </Box>
      <Box>
        <Heading size="lg">📆 Calendario</Heading>
        <SimpleGrid columns={2} pt={4} spacing="20px" minChildWidth="120px">
          {docs &&
            docs.map((pic) => (
              <Pic
                key={pic.id}
                img={pic.thumbnail}
                title={`${pic.title}`}
                src={pic.id}
                day={pic.giorno}
              />
            ))}
        </SimpleGrid>
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
