import React from "react";
import styles from "./Text.module.css";

export default function Text({
  text = "",
  children = "",
  style = {},
  secondary = false,
  align = "left",
}) {
  return (
    <div
      style={style}
      className={`${styles.text} ${!!secondary ? styles.secondary : ""} ${
        align === "center" ? styles.textCenter : ""
      } ${align === "right" ? styles.textRight : ""}`}
    >
      {!children ? text : children}
    </div>
  );
}
