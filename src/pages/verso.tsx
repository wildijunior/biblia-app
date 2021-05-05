import { Container } from "@material-ui/core";
import { GetStaticProps } from "next";
import Head from 'next/head';
import React from "react";
import Biblia from "../components/Biblia";
import api from "../services/api";

export default function verso({ data }) {
  return (
    <>
    <Head>
      <title>App | Verso</title>
    </Head>
        <h1 style={{ textAlign: "center" }}>Verso do Dia</h1>

        {/* <Biblia
          nome="Nome"
          grupo="Grupo"
          capitulo={5}
          numero={1}
          texto="Texto"
        /> */}

        <Biblia
          nome={data.book.name}
          grupo={data.book.group}
          capitulo={data.chapter}
          numero={data.number}
          texto={data.text}
        />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/");

  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 3,
  };
};
