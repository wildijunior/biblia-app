import React from "react";
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title>App | Home</title>
      </Head>
        <div style={{ textAlign: "center" }}>
          <img src="https://img.icons8.com/bubbles/200/000000/bible-app.png" />
          <p>A cada 3h uma benção em sua vida!</p>
        </div>
    </div>
  );
}
