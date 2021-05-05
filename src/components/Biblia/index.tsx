import { Card, CardContent } from "@material-ui/core";
import React from "react";

import styles from "./styles.module.scss";

type BibliaProps = {
  nome: string;
  grupo: string;
  capitulo: number;
  numero: number;
  texto: string;
};

export default function Biblia(biblia: BibliaProps) {
  return (
    <>
      <Card className={styles.cardRoot}>
        <CardContent>
          <h3 style={{ marginBottom: 10 }}>{biblia.nome}</h3>
          <hr />
          <p>Grupo: {biblia.grupo}</p>
          <p>Capítulo: {biblia.capitulo}</p>
          <p>Número: {biblia.numero}</p>
          <hr />
          <p style={{ textAlign: "center" }}>{biblia.texto}</p>
        </CardContent>
      </Card>
    </>
  );
}
