import React from "react";
import "../styles/globals.scss";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
