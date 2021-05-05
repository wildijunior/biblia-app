import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header>
      <AppBar position='fixed'>
        <Toolbar className={styles.barRoot}>
          <div className={styles.linkRoot}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/verso">
              <a>Verso</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
