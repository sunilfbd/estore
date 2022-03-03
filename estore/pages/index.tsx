import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import GlobalStyle from "../styles/global";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Practice Project" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Oswald|Noto+Sans"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>This is main content area</h1>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
