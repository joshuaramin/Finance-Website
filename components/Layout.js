import React from "react";
import styles from "../styles/Home.module.scss";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <Footer />
    </div>
  );
}
