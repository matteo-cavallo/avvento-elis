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
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";

export default function Pic(props) {
  const { title, img, src, idle, url, day } = props;
  const router = useRouter();

  // Rotazione della fotografia in gradi
  const rotation = Math.floor(Math.random() * 6);
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    console.log(img);
    if (!idle && img) router.push(`/video/${src}`);
  };

  console.log(day, url);

  return (
    <Box>
      <Box
        onClick={handleClick}
        transform={`rotate(${rotation}deg)`}
        boxShadow="lg"
        rounded="md"
        pt={2}
        px={2}
        m={2}
        border="1px"
        borderColor="gray.200"
        maxW="300px"
      >
        <Skeleton isLoaded={loaded}>
          <AspectRatio ratio={1}>
            {url ? (
              <Box
                w="100%"
                border="2px"
                borderColor="gray.100"
                boxShadow="inner"
              >
                <Flex flexDirection="column" w="100%" h="100%">
                  <Box>
                    <Flex p={1}>
                      <Spacer></Spacer>
                      <Icon as={BsFillPlayFill} w={8} h={8} />
                    </Flex>
                  </Box>

                  <Center flex="1">
                    <Heading bgColor="red.300">🎄{day} dic</Heading>
                  </Center>
                </Flex>
              </Box>
            ) : (
              <Image
                src={img}
                bgPos="center"
                bgSize="cover"
                onLoad={() => setLoaded(true)}
              ></Image>
            )}
          </AspectRatio>
        </Skeleton>
        <Heading textAlign="center" pt={2} pb={2} size="s">
          {title}
        </Heading>
      </Box>
    </Box>
  );
}
