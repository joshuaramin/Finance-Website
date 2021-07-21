import React from "react";
import Link from "next/Link";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";

import { signIn, useSession } from "next-auth/client";
export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <Head>
        <title>Lorem Ipsum</title>
      </Head>
      <header className={styles.containerHead}>
        <nav className={styles.nav}>
          {router.pathname == "/signIn" ? (
            <ul style={{ display: "none" }}></ul>
          ) : (
            <ul className={styles.ul}>
              <li className={styles.li}>
                <button onClick={signIn}>Sign in</button>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
}
