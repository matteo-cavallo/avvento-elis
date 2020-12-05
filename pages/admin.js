import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Spacer,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { firestore, storage } from "../firebase/firebase.config";

export default function AdminPage({ events }) {
  const [form, setForm] = useState({
    title: "",
    giorno: "",
    date: "2020-12-25",
    video: null,
    thumb: null,
  });
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  const Evento = ({ title, giorno }) => {
    return (
      <Box>
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm">{giorno} DICEMBRE</Text>
      </Box>
    );
  };

  const CardComponent = ({ title, children }) => {
    return (
      <Box
        py={6}
        px={4}
        border="1px"
        borderColor="gray.100"
        borderRadius="lg"
        shadow="md"
      >
        <Heading size="md">{title}</Heading>

        <Box pt={4}>{children}</Box>
      </Box>
    );
  };

  const handleSave = async (e) => {
    console.log("Saving event");
    setLoading(false);

    if (form.video && form.thumb) {
      /*
      //Save video
      const storageRefVideo = storage.ref("video/" + form.video.name);
      await storageRefVideo.put(form.video).catch((e) => {
        console.log("caricamento video", e);
      });
      const downloadUrlVideo = await storageRefVideo.getDownloadURL();

      console.log(downloadUrlVideo);

      */

      //Save image
      const storageRefImage = storage.ref("thumb/" + form.thumb.name);
      await storageRefImage.put(form.thumb).catch((e) => {
        console.log("caricamento immagine", e);
      });
      const downloadUrlImage = await storageRefImage.getDownloadURL();

      console.log(downloadUrlImage);

      //Write to DB

      firestore
        .collection("video")
        .add({
          title: form.title,
          giorno: form.giorno,
          src: form.video,
          thumbnail: downloadUrlImage,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          alert("Documento inserito con successo!");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
          alert("Errore inserimento");
        });
    }
    setLoading(true);
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const loadFile = (e) => {
    let file = e.target.files[0];
    setForm({ ...form, [e.target.name]: file });
    console.log(form);
  };

  const checkLogin = async () => {
    console.log("Check Login: ");

    //Check sul Firestore
    const doc = await firestore
      .collection("users")
      .where("token", "==", token)
      .get();

    doc.forEach((user) => {
      console.log(user);
      setUser(user.data().nome);
    });
    //Set logged
  };

  const changeToken = (e) => {
    setToken(e.target.value);
  };
  return (
    <Box>
      <Center p={4}>
        <Stack w="60%">
          <Box>{user && <Heading>Ciao {user}</Heading>}</Box>
          {!user && (
            <Box>
              <Text>Token</Text>
              <Input
                value={token}
                onChange={changeToken}
                placeholder="oiufbadoifb"
              ></Input>
              <Flex>
                <Spacer></Spacer>
                <Button colorScheme="green" onClick={checkLogin}>
                  Login
                </Button>
              </Flex>
            </Box>
          )}
          {user && (
            <Box>
              <CardComponent title={events.length + " eventi"}>
                <Divider mb={4}></Divider>
                <Stack divider={<Divider></Divider>}>
                  {events &&
                    events.map((evento) => {
                      return (
                        <Evento
                          key={evento.giorno}
                          title={evento.title}
                          giorno={evento.giorno}
                        ></Evento>
                      );
                    })}
                </Stack>
              </CardComponent>

              <Box>
                <Text>Titolo</Text>
                <Input
                  placeholder="Mario e giuseppe"
                  w="50%"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
                <Text>Giorno</Text>
                <Input
                  placeholder="4"
                  w="50%"
                  name="giorno"
                  value={form.giorno}
                  onChange={handleChange}
                />
                <Text>Data di pubblicazione</Text>
                <Input
                  name="date"
                  type="date"
                  w="50%"
                  onChange={handleChange}
                  value={form.date}
                />
                <Text>Video</Text>
                <Input name="video" w="50%" onChange={handleChange} />
                <Text>Miniatura</Text>
                <Input name="thumb" type="file" w="50%" onChange={loadFile} />

                <Flex>
                  <Spacer></Spacer>
                  <Spinner hidden={loading}></Spinner>
                  <Button onClick={handleSave} colorScheme="green">
                    Salva
                  </Button>
                </Flex>
              </Box>
            </Box>
          )}
        </Stack>
      </Center>
    </Box>
  );
}

export async function getStaticProps(context) {
  let events = [];

  //Fetch videos from Firestore
  const videos = await firestore
    .collection("video")
    .orderBy("giorno", "desc")
    .get();

  videos.forEach((video) => {
    let { title, giorno } = video.data();
    events.push({
      title: title,
      giorno: giorno,
    });
  });

  return {
    props: {
      events: events,
    },
  };
}
