import React from "react";
import Navbar from "@/components/Navbar";
import SimpleImageDisplay from "@/components/SimpleImageDisplay";

export default function UniScholarsPage() {
  return (
    <>
      <Navbar />
      <h1 style={styles.centeredTitle}>university scholars project</h1>
      <div style={styles.artContainer}>
        <SimpleImageDisplay
          title="In the Name of the Father, the Son, & the Holy Spirit"
          medium="acrylic on canvas"
          dimensions="20x20 inches"
          date="March 2022"
          description="a reflection on the role of religion in residential schools"
          imagePath="/images/art/fatherSonAndHolySpirit.jpeg" // Path to your image
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
