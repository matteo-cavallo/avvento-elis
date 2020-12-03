import { Box, Heading, Image, Skeleton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase.config";

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;

  const [video, setVideo] = useState(null);

  useEffect(() => {
    console.log("Caricamento pagina video");
    fetchVideo();
  }, []);

  async function fetchVideo() {
    const doc = await firestore.collection("video").doc(id).get();
    setVideo(doc.data());
  }

  return (
    <Box>
      <Heading p={4}>
        {!video && <Skeleton>Titolo</Skeleton>}
        {video && video.title}
      </Heading>
      {video && (
        <video controls>
          <source src={video.src} type="video/mp4"></source>
        </video>
      )}
    </Box>
  );
}
