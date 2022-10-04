import React from "react";
import styles from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
}
