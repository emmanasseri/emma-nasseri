import React from "react";
import Navbar from "@/components/Navbar";
import SimpleImageDisplay from "@/components/SimpleImageDisplay";

export default function figuresPage() {
  return (
    <>
      <Navbar />
      <h1 style={styles.centeredTitle}>figures</h1>
      <div style={styles.artContainer}>
        <SimpleImageDisplay
          title="study of a statue at the wilcox museum"
          medium="charcoal and conté on toned paper"
          dimensions="18x24 inches"
          date="Fall 2023"
          description="no description yet"
          imagePath="/images/art/wilcox.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="500px"
        />
        <SimpleImageDisplay
          title="study of my sister"
          medium="charcoal on paper"
          dimensions="8x11 inches"
          date="Fall 2019"
          description="no description yet"
          imagePath="/images/art/Eden.jpg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="500px"
        />
      </div>
    </>
  );
}

const styles = {
  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
  },
  artContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next row
    gap: "20px", // Adds space between each card
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
  },
};
