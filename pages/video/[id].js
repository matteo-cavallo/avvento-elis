import { Box, Divider, Heading, Image, Skeleton, Text } from "@chakra-ui/react";
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
      {video && (
        <video controls>
          <source src={video.src} type="video/mp4"></source>
        </video>
      )}
    </Box>
  );
}
