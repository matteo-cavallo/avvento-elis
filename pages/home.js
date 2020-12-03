import { useState } from "react";

import SplashScreen from "../components/splash-screen/splash-screen.component";
import Home from "../components/home/home.component";

import { firestore, storage } from "../firebase/firebase.config";
import { Box } from "@chakra-ui/react";
import Pics from "../components/pics/pics.component";
import Header from "../components/header/header.component";

function HomePage() {
  return (
    <Box>
      <Header></Header>

      <Pics></Pics>
    </Box>
  );
}

export default HomePage;
