import { Box } from "@chakra-ui/react";
import Header from "../header/header.component";
import Pics from "../pics/pics.component";

export default function Home() {
  return (
    <Box>
      <Header></Header>
      <Pics title="Che bei ricordi..."></Pics>
    </Box>
  );
}
