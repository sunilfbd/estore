import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/themeLight";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider store={store} theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
