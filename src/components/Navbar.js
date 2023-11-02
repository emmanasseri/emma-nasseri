import React from "react";
import Link from "next/link";
import OutlineButton from "./OutlineButton";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link href="/" className={styles.navItem}>
        <OutlineButton title="home" />
      </Link>
      <div style={styles.rightMenu}>
        <Link href="/cs" style={styles.navItem}>
          <OutlineButton title="about me" />
        </Link>
        <Link href="/cs" style={styles.navItem}>
          <OutlineButton title="contact" />
        </Link>
        <Link href="/cs" style={styles.navItem}>
          <OutlineButton title="compsci" />
        </Link>
        <Link href="/writing" style={styles.navItem}>
          <OutlineButton title="writing" />
        </Link>
        <Link href="/art" style={styles.navItem}>
          <OutlineButton title="art" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Ensure the navbar takes up the full width

    padding: "10px 0",
    borderBottom: "1px solid black",
  },
  rightMenu: {
    display: "flex",
    alignItems: "center",
  },
  navItem: {
    color: "white",
    padding: "10px 15px",
    textDecoration: "none",
    margin: "0 10px",
  },
};
