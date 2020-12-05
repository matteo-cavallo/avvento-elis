import {
  AspectRatio,
  Box,
  Divider,
  Heading,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase.config";

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;

  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchVideo();
  }, []);

  async function fetchVideo() {
    const doc = await firestore.collection("video").doc(id).get();
    setVideo(doc.data());
  }

  return (
    <Box p={4}>
      <Heading fontSize="md">
        {!video && <Skeleton>Titolo</Skeleton>}
        {video && video.title.toUpperCase()}
      </Heading>
      <Heading fontSize="sm" mb={4} color="gray.600">
        {!video && <Skeleton>Titolo</Skeleton>}
        {video && video.giorno + " DICEMBRE"}
      </Heading>
      <Divider mb={2}></Divider>
      <AspectRatio ratio={9 / 16} maxW="sm">
        <iframe
          width="100%"
          src={video && video.src}
          allowFullScreen
          allow="autoplay"
        ></iframe>
      </AspectRatio>
    </Box>
  );
}
