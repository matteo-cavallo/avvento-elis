import { AspectRatio, Box, Heading, Image, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

export default function Pic(props) {
  const { numero } = props;
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1500);

  // Rotazione della fotografia in gradi
  const rotation = Math.floor(Math.random() * 6);

  const handleClick = () => {
    alert("Coming Soon");
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
        w={["150px", "200px", "300px", "350px"]}
      >
        <Skeleton isLoaded={loading}>
          <AspectRatio ratio={1}>
            <Image src={`/pics/${numero}.jpg`} />
          </AspectRatio>
        </Skeleton>
        <Heading textAlign="center" pt={2} pb={2} size="s">
          {numero} DICEMBRE
        </Heading>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  return {
    props: {
      rotation: rotation,
    }, // will be passed to the page component as props
  };
}
