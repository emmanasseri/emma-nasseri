import React from "react";
import Image from "next/image";
import OutlineButton from "./OutlineButton";

const OutlineCard = ({ title, description, imagePath, link }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <Image
          src={imagePath}
          alt="Description for Accessibility"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <span style={styles.title}>{title}</span>
      <span style={styles.body}>{description}</span>
      <OutlineButton title="view project" onClick={link} />
    </div>
  );
};

export default OutlineCard;

const styles = {
  card: {
    border: "2px solid black",
    borderRadius: "8px",
    padding: "8px 16px",
    backgroundColor: "transparent",
    color: "black",
    outline: "none",
    transition: "0.3s",
    width: "500px", // adjust as needed
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
    height: "250px", // adjust as needed
    position: "relative",
    marginBottom: "8px", // space between image and title
  },
  title: {
    fontWeight: "bold",
    marginBottom: "8px", // space between title and body
  },
  body: {
    fontSize: "0.9em",
  },
  link: {
    textDecoration: "none",
  },
};
