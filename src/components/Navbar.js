import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navItem}>
        Home
      </Link>
      <div className={styles.rightMenu}>
        <Link href="/cs" className={styles.navItem}>
          About Me
        </Link>
        <Link href="/cs" className={styles.navItem}>
          Contact
        </Link>
        <Link href="/cs" className={styles.navItem}>
          CS
        </Link>
        <Link href="/writing" className={styles.navItem}>
          Writing
        </Link>
        <Link href="/art" className={styles.navItem}>
          Art
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
    backgroundColor: "#333",
    padding: "10px 0",
    borderBottom: "1px solid black",
  },
  rightMenu: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  navItem: {
    color: "white",
    padding: "10px 15px",
    textDecoration: "none",
    margin: "0 10px",
  },
};
