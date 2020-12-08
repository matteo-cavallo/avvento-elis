import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import { firestore } from "../../firebase/firebase.config";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import useLikes from "../../hooks/useLike";

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;

  const [video, setVideo] = useState(null);
  const [like, setLike] = useState(false);

  const likes = useLikes(id);

  useEffect(() => {
    fetchVideo();
  }, []);

  async function fetchVideo() {
    const doc = await firestore.collection("video").doc(id).get();
    setVideo(doc.data());
  }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("likes"))) {
      localStorage.setItem("likes", JSON.stringify({ ids: [] }));
    }
    let ids = JSON.parse(localStorage.getItem("likes")).ids;

    console.log("Id: ", id);
    console.log("Video liked: ", ids);

    if (ids.includes(id)) {
      setLike(true);
    } else {
      setLike(false);
    }
    console.log("Video is liked: ", like);
  });

  const handleLike = async () => {
    var ids = JSON.parse(localStorage.getItem("likes")).ids;

    console.log(ids);

    if (!ids.includes(id)) {
      console.log("Like");
      ids.push(id);
      localStorage.setItem(
        "likes",
        JSON.stringify({
          ids: ids,
        })
      );
      let doc = await firestore.collection("video").doc(id).get();
      if (doc.data().likes) {
        firestore
          .collection("video")
          .doc(id)
          .update({
            likes: doc.data().likes + 1,
          })
          .then(() => console.log("Aggiunto like"));
      } else {
        firestore
          .collection("video")
          .doc(id)
          .update({
            likes: 1,
          })
          .then(() => console.log("Aggiunto like"));
      }
    } else {
      console.log("Already liked");
      alert("Hai già messo mi piace!");
    }
  };

  return (
    <Flex h="100vh" flexDirection="column">
      <Box>
        <Header></Header>
      </Box>
      <Center flex={1} bgColor="wheat">
        <Box bgColor="white" p={2} h="90%" rounded="md" boxShadow="lg">
          <Flex flexDirection="column" h="100%">
            <Box p={2}>
              <Heading fontSize="md">
                {!video && <Skeleton>Titolo</Skeleton>}
                {video && video.title.toUpperCase()}
              </Heading>
              <Heading fontSize="sm" color="gray.600">
                {!video && <Skeleton>Titolo</Skeleton>}
                {video && video.giorno + " DICEMBRE"}
              </Heading>
            </Box>
            <Divider></Divider>
            <Center flex={1}>
              <iframe
                height="95%"
                src={video && video.src}
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </Center>
            <Divider></Divider>
            <Center>
              <Flex>
                <HStack onClick={handleLike}>
                  <Icon as={like ? AiFillLike : AiOutlineLike} />
                  <Text>{likes} Likes</Text>
                </HStack>
              </Flex>
            </Center>
          </Flex>
        </Box>
      </Center>
    </Flex>
  );
}
