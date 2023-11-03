"use client";
import React, { useState } from "react";
import Link from "next/link";
import OutlineButton from "./OutlineButton";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <OutlineButton title="home" />
      </Link>

      <div className={isDrawerOpen ? styles.drawer : styles.rightMenu}>
        <Link href="/#about">
          <OutlineButton title="about me" />
        </Link>
        <Link href="/#contact">
          <OutlineButton title="contact" />
        </Link>
        <Link href="/cs">
          <OutlineButton title="compsci" />
        </Link>
        <Link href="/writing">
          <OutlineButton title="writing" />
        </Link>
        <Link href="/art">
          <OutlineButton title="art" />
        </Link>
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setDrawerOpen(!isDrawerOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
