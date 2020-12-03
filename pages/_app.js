import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/header/header.component";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header></Header>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
