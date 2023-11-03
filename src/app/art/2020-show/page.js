import React from "react";
import Navbar from "@/components/Navbar";
import SimpleImageDisplay from "@/components/SimpleImageDisplay";

export default function pandemicShowPage() {
  return (
    <>
      <Navbar />
      <h1 style={styles.centeredTitle}>work i made for my senior show</h1>
      <div style={styles.artContainer}>
        <SimpleImageDisplay
          title="You Pulled Me from Deep Darkness"
          medium="charcoal and ink on paper"
          dimensions="20x20 inches"
          date="Fall 2019"
          description="no description yet"
          imagePath="/images/art/deepDarkness.jpg" // Path to your image
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
