import React from "react";
import Image from "next/image";

const GalleryImageDisplay = ({
  title,
  description,
  imagePath,
  imageWidth = "100%",
  imageHeight = "250px",
  medium,
  dimensions,
  date,
  alt,
}) => {
  return (
    <div style={styles.galleryItem}>
      <div style={styles.frame}>
        <div
          style={{
            ...styles.imageContainer,
            width: imageWidth,
            height: imageHeight,
          }}
        >
          <Image src={imagePath} alt={alt} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div style={styles.descriptionCard}>
        <span style={styles.title}>{title}</span>
        <span style={styles.body}>{description}</span>
        <span style={styles.info}>
          {medium} <br />
          {dimensions} <br />
          {date}
        </span>
      </div>
    </div>
  );
};

export default GalleryImageDisplay;

const styles = {
  galleryItem: {
    display: "flex",
    flexDirection: "row", // Use 'column' or 'row' depending on desired layout
    alignItems: "flex-start", // Align items to the start of the flex container
    margin: "20px",
    padding: "20px",
    borderRadius: "8px",
  },
  frame: {
    border: "4px solid #5a4b3c",
    padding: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
    marginRight: "20px", // Add some space between the frame and the description card
  },
  imageContainer: {
    position: "relative",
    width: "auto",
  },
  descriptionCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "200px",
    backgroundColor: "#ffffff",
    boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
    padding: "10px",
    borderRadius: "4px",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
  },
  body: {
    fontSize: "0.9em",
    marginBottom: "5px",
  },
  info: {
    fontSize: "0.8em",
    color: "gray",
    marginBottom: "5px",
  },
};
