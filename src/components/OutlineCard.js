import React from "react";
import Image from "next/image";
import OutlineButton from "./OutlineButton";

const OutlineCard = ({
  title,
  description,
  imagePath,
  link,
  imageWidth = "100%", // default value if not provided
  imageHeight = "250px", // default value if not provided
  buttonTitle = "view project",
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
        <Image
          src={imagePath}
          alt="Description for Accessibility"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <span style={styles.title}>{title}</span>
      <span style={styles.body}>{description}</span>
      <OutlineButton title={buttonTitle} link={link} textColor="#286269" />
    </div>
  );
};

export default OutlineCard;

const styles = {
  card: {
    borderRadius: "8px",
    padding: "15px 15px",
    backgroundColor: "#AEE1EB",
    color: "#286269",
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
