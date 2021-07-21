import React from "react";
import styles from "../styles/signin.module.scss";
import Link from "next/Link";
import { getCsrfToken } from "next-auth/client";
import Head from "next/head";
export default function SignIn({ csrfToken }) {
  return (
    <div className={styles.signContainer}>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className={styles.signIncontainer}>
        <form method='post' action='/api/auth/callback/credentials'>
          <div className={styles.containersignin}>
            <h2 className={styles.signInTitle}>Sign In</h2>
          </div>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Login</button>
          <Link href='/'>Forget Password</Link>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
