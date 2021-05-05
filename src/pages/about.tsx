import { Container } from "@material-ui/core";
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function about() {
  return (
    <div>
      <Head>
        <title>App | About</title>
      </Head>
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>Sobre</h1>
        <p>Aplicação feita em NextJS com data fetching usando SSG.</p>
        <p>
          Consumindo a
          <Link href="https://www.abibliadigital.com.br/api">
            <a> API.</a>
          </Link>
        </p>
        <h3 style={{marginTop: 30}}>Features Utilizadas</h3>
        <p>NextJS</p>
        <p>Material-ui</p>
        <p>Axios</p>
        <p>SASS</p>
        <p>Typescript</p>

        <h3 style={{marginTop: 30}}>Autor</h3>
        <p>Wildi Jr.</p>
      </Container>
    </div>
  );
}
