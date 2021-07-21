import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
export default function Footer() {
  const d = new Date();
  const x = d.getFullYear();
  const [year] = useState(x);
  return (
    <div className={styles.footer}>Copyright {year}. All Right Reserved.</div>
  );
}
