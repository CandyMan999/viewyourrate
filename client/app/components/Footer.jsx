"use client";

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.brand}>View Your Rate</p>
        <p className={styles.copy}>Payment-first mortgage planning. All rates shown are samples.</p>
      </div>
      <div className={styles.links}>
        <a href="#rates">Rates</a>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
};

export default Footer;
