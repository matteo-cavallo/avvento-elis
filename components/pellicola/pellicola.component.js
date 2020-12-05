import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Heading,
  VStack,
  Icon,
  Image,
  Skeleton,
  Spacer,
  Square,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsFillPlayFill, BsOctagon } from "react-icons/bs";

export default function Pellicola(props) {
  const { title, img, src, idle, url, day } = props;
  const router = useRouter();

  // Rotazione della fotografia in gradi
  const rotation = Math.floor(Math.random() * 6);
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    if (!idle) router.push(`/video/${src}`);
  };
  return (
    <Box>
      <Box
        onClick={handleClick}
        transform={`rotate(${rotation}deg)`}
        rounded="md"
        p={1}
        m={2}
        borderColor="gray.200"
        maxW="300px"
        bgColor="gray.800"
        boxShadow="lg"
      >
        <Box bgColor="gray.800" p={1}>
          <Flex justify="space-between">
            <Square size="15px" bgColor="white"></Square>
            <Square size="15px" bgColor="white"></Square>
            <Square size="15px" bgColor="white"></Square>
            <Square size="15px" bgColor="white"></Square>
            <Square size="15px" bgColor="white"></Square>
          </Flex>
        </Box>
        <AspectRatio ratio={1}>
          <Box
            bgColor="gray.100"
            h=""
            boxShadow="inner"
            bgImage="url('https://images.pexels.com/photos/3325717/pexels-photo-3325717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"
            bgPosition="center"
          >
            <Stack>
              <Heading
                bgColor="red.300"
                textAlign="center"
                size="s"
                p={1}
                color="white"
              >
                {title}
              </Heading>
              <Heading
                size="md"
                bgColor="red.300"
                color="white"
                textAlign="center"
              >
                🎄 {day} dic
              </Heading>
            </Stack>
          </Box>
        </AspectRatio>

        <Box bgColor="gray.00" p={1}>
          <Flex justify="space-between">
            <Square size="15px" bgColor="white"></Square>
            <Square size="15px" bgColor="white"></Square>
            <Square size="15px" bgColor="white"></Square>
            <Square size="15px" bgColor="white"></Square>
            <Square size="15px" bgColor="white"></Square>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
