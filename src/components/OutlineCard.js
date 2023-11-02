import React from "react";
import Image from "next/image";

const OutlineCard = ({ title, bodyText, imagePath }) => {
  return (
    <div style={styles.button}>
      <Image
        src={imagePath}
        alt="Description for Accessibility"
        width={500}
        height={500}
      />
      <span style={styles.title}>{title}</span>
      <span style={styles.body}>{bodyText}</span>
    </div>
  );
};

export default OutlineCard;

const styles = {
  button: {
    border: "2px solid black",
    borderRadius: "8px",
    padding: "8px 16px",
    backgroundColor: "transparent",
    color: "black",
    cursor: "pointer",
    outline: "none",
    transition: "0.3s",
  },
  link: {
    textDecoration: "none",
  },
};
