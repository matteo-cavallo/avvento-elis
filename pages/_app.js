import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/header/header.component";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Avvento ELIS 🎄</title>
        <meta name="description"> 2º Anno ELIS Digital University</meta>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
