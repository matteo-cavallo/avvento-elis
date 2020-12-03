import { useState } from "react";

import SplashScreen from "../components/splash-screen/splash-screen.component";
import Home from "../components/home/home.component";

import { firestore, storage } from "../firebase/firebase.config";

import { useRouter } from "next/router";

function HomePage() {
  const [splashScreen, setSplashScreen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    //setSplashScreen(false);
    router.push("/home");
  };

  return (
    <div>
      {splashScreen ? <SplashScreen handleClick={handleClose} /> : <Home />}
    </div>
  );
}

export default HomePage;
