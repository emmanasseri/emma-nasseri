import React from "react";
import Image from "next/image";
import OutlineButton from "./OutlineButton";

const SimpleImageDisplay = ({
  title,
  description,
  imagePath,
  imageWidth = "100%", // default value if not provided
  imageHeight = "250px", // default value if not provided
  medium,
  dimensions,
  date,
  alt,
}) => {
  return (
    <div style={styles.card}>
      <div
        style={{
          ...styles.imageContainer,
          width: imageWidth,
          height: imageHeight,
        }}
      >
        <Image src={imagePath} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <span style={styles.title}>{title}</span>
      <span style={styles.body}>{description}</span>
      <span style={styles.info}>{medium}</span>
      <span style={styles.info}>{dimensions}</span>
      <span style={styles.info}>{date}</span>
    </div>
  );
};

export default SimpleImageDisplay;

const styles = {
  card: {
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
  info: {
    fontSize: "0.9em",
    marginBottom: "10px",
    color: "gray",
  },
  link: {
    textDecoration: "none",
  },
};
