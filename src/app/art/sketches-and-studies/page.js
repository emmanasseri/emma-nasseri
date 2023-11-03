import React from "react";
import Navbar from "@/components/Navbar";
import SimpleImageDisplay from "@/components/SimpleImageDisplay";

export default function sketchesAndStudiesPage() {
  return (
    <>
      <Navbar />
      <h1 style={styles.centeredTitle}>other work i've done</h1>
      <div style={styles.artContainer}>
        <SimpleImageDisplay
          title="Couch"
          medium="charcoal on paper"
          dimensions="8x10 inches"
          date="2019"
          description="no description yet"
          imagePath="/images/art/Couch.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="400px"
        />
        <SimpleImageDisplay
          title="Bedsheet"
          medium="graphite on paper"
          dimensions="8x10 inches"
          date="2019"
          description="no description yet"
          imagePath="/images/art/Bedsheet.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="300px"
        />
        <SimpleImageDisplay
          title="Limelight"
          medium="charcoal and conté on paper"
          dimensions="18x24 inches"
          date="2019"
          description="a drawing of my younger brother playing the piano"
          imagePath="/images/art/Limelight.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="700px"
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
