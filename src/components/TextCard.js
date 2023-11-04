import React from "react";
import Image from "next/image";
import OutlineButton from "./OutlineButton";

const TextCard = ({
  title,
  description,
  link,
  imageWidth = "100%", // default value if not provided
  imageHeight = "250px", // default value if not provided
}) => {
  return (
    <div style={styles.card}>
      <span style={styles.title}>{title}</span>
      <span style={styles.body}>{description}</span>
    </div>
  );
};

export default TextCard;

const styles = {
  card: {
    border: "2px solid black",
    borderRadius: "8px",
    padding: "15px 15px",
    backgroundColor: "transparent",
    color: "black",
    outline: "none",
    transition: "0.3s",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  imageContainer: {
    position: "relative",
    marginBottom: "8px",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  body: {
    fontSize: "0.9em",
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
  },
};