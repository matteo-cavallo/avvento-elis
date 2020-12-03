import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Pic(props) {
  const { title, img, src, idle, day } = props;
  const router = useRouter();

  // Rotazione della fotografia in gradi
  const rotation = Math.floor(Math.random() * 6);
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    console.log(img);
    if (!idle && img) router.push(`/video/${src}`);
  };

  return (
    <Box>
      <Box
        onClick={handleClick}
        transform={`rotate(${rotation}deg)`}
        shadow="lg"
        pt={2}
        px={2}
        m={2}
        border="1px"
        borderColor="gray.200"
        maxW="300px"
      >
        <Skeleton isLoaded={loaded}>
          <AspectRatio ratio={1}>
            <Image
              src={img}
              bgPos="center"
              bgSize="cover"
              onLoad={() => setLoaded(true)}
            ></Image>
          </AspectRatio>
        </Skeleton>
        <Heading textAlign="center" pt={2} pb={2} size="s">
          {title}
        </Heading>
      </Box>
    </Box>
  );
}
