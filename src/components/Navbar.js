"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import OutlineButton from "./OutlineButton";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <OutlineButton title="home" />
      </Link>

      <div className={isDrawerOpen ? styles.drawer : styles.rightMenu}>
        <Link href="/#about" className={styles.drawerItem}>
          <OutlineButton title="about me" />
        </Link>
        <Link href="/#contact" className={styles.drawerItem}>
          <OutlineButton title="contact" />
        </Link>
        <Link href="/cs" className={styles.drawerItem}>
          <OutlineButton title="compsci" />
        </Link>
        <Link href="/writing" className={styles.drawerItem}>
          <OutlineButton title="writing" />
        </Link>
        <Link href="/art" className={styles.drawerItem}>
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
