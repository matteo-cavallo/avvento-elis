import {
  Box,
  Divider,
  Heading,
  Stack,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Text,
  Slide,
  SlideFade,
  Flex,
  Center,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon, LinkIcon } from "@chakra-ui/icons";
import Pic from "../pic/pic.component";

import { firestore, storage } from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import useClassifica from "../../hooks/useClassifica";
import Pellicola from "../pellicola/pellicola.component";
import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";

function Pics(props) {
  const { title } = props;

  const { docs } = useFirestore("video");
  const { classifica } = useClassifica();

  const pos = ["🥇", "🥈", "🥉"];

  return (
    <Stack p={4} spacing={6}>
      <Box>
        <Heading size="lg">🤩 News</Heading>
        <SlideFade in={true}>
          <Box bgColor="whitesmoke" rounded="lg" my={2} p={4} boxShadow="md">
            <List>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Sta per succedere qualcosa...
              </ListItem>
            </List>
          </Box>
        </SlideFade>
      </Box>
      <Box>
        <Heading size="lg">😍 Da non perdere!!!</Heading>
        {docs[0] && (
          <Pellicola
            key={docs[0].id}
            img={docs[0].thumbnail}
            title={docs[0].title}
            src={docs[0].id}
            day={docs[0].giorno}
            url={docs[0].src}
            idle={false}
            loaded
          />
        )}
      </Box>
      <Box>
        <Heading size="lg">📆 Calendario</Heading>
        <SimpleGrid columns={2} pt={4} spacing="20px" minChildWidth="120px">
          {docs &&
            docs.map((pic) => (
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -10,
                }}
                whileTap={{
                  scale: 0.8,
                }}
              >
                <Pellicola
                  key={pic.id}
                  img={pic.thumbnail}
                  title={pic.title}
                  src={pic.id}
                  day={pic.giorno}
                  url={pic.src}
                  idle={false}
                  loaded
                />
              </motion.div>
            ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading size="lg">🏁 Classifica</Heading>
        <Box my={2} p={4} bgColor="whitesmoke" rounded="lg" boxShadow="md">
          {classifica.map((doc, index) => {
            return (
              <Flex key={index}>
                <Center p={2}>
                  <Heading>{pos[index]}</Heading>
                </Center>
                <HStack flex={2} p={2}>
                  <Divider orientation="vertical"></Divider>
                  <Box w="100%">
                    <Heading size="lg">{doc.likes} 👍🏻</Heading>
                    <Text size="lg">{doc.title}</Text>
                  </Box>
                </HStack>
              </Flex>
            );
          })}
        </Box>
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
