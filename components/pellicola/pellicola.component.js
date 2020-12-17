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
  SlideFade,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsFillPlayFill, BsOctagon } from "react-icons/bs";

export default function Pellicola(props) {
  const { title, img, src, idle, url, day, loaded } = props;
  const router = useRouter();

  // Rotazione della fotografia in gradi
  const rotation = 2;

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
        <Skeleton isLoaded={loaded}>
          <AspectRatio ratio={1}>
            <Box
              bgColor="gray.100"
              h=""
              boxShadow="inner"
              bgImage="url('https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-winter-snowing-illustration-background-scenecool-forestsnowingwinter-background-image_65456.jpg')"
              bgPosition="center"
            >
              <Stack>
                <Heading
                  bgColor="red.400"
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
        </Skeleton>

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
