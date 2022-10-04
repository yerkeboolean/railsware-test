import React, { useState } from "react";
import styles from "./Input.module.css";
import UserIcon from "../../assets/images/user-icon.svg";
import LockIcon from "../../assets/images/lock-icon.svg";

import UserActiveIcon from "../../assets/images/user-active-icon.svg";
import LockActiveIcon from "../../assets/images/lock-active-icon.svg";

export default function Input({
  placeholder,
  onChange = () => {},
  style,
  password,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = (focus) => {
    setIsActive(focus);
  };

  return (
    <div
      style={style}
      className={`${styles.inputWrap} ${isActive ? styles.inputActive : ""}`}
    >
      {!!password ? (
        <i>
          <img src={isActive ? LockActiveIcon : LockIcon}></img>
        </i>
      ) : (
        <i>
          <img src={isActive ? UserActiveIcon : UserIcon}></img>
        </i>
      )}
      <input
        className={styles.input}
        type="text"
        onMouseEnter={() => handleFocus(true)}
        onMouseLeave={() => handleFocus(false)}
        onFocus={() => {
          handleFocus(true);
        }}
        onBlur={() => {
          handleFocus(false);
        }}
        onChange={() => onChange()}
        placeholder={placeholder}
      />
    </div>
  );
}
