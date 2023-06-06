"use client";

import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import logoSrc from "../../../public/assets/logo.svg";
import menuOpenSrc from "../../../public/assets/menu.svg";
import menuClosedSrc from "../../../public/assets/close.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={classNames(styles.container, {
        [styles.noBottomBorder]: menuOpen,
      })}
    >
      <div className={styles.main}>
        <Image src={logoSrc} alt={"Ratepunk logo"} />
        <ul className={styles.navLinks}>
          <li>Chrome Extension</li>
          <li>Price Comparison</li>
          <li>Blog</li>
        </ul>
        <Image
          src={!menuOpen ? menuOpenSrc : menuClosedSrc}
          alt="Open dropdown menu"
          className={styles.menuBtn}
          width={20}
          height={20}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <ul className={styles.dropdownContainer}>
            <li>Chrome Extension</li>
            <li>Price Comparison</li>
            <li>Blog</li>
          </ul>
        )}
      </div>
    </div>
  );
};
