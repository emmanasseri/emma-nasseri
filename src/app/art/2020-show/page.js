import React from "react";
import Navbar from "@/components/Navbar";
import SimpleImageDisplay from "@/components/SimpleImageDisplay";
import GalleryImageDisplay from "@/components/galleryImageDisplay";

export default function pandemicShowPage() {
  return (
    <>
      <Navbar />
      <h1 style={styles.centeredTitle}>work i made for my senior show</h1>
      <div style={styles.artContainer}>
        <GalleryImageDisplay
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
        <GalleryImageDisplay
          title="You Saw that It was Good"
          medium="acrylic on canvas"
          dimensions="20x20 inches"
          date="Fall 2019"
          description="no description yet"
          imagePath="/images/art/youSawThatItWasGood.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="500px"
        />
        <GalleryImageDisplay
          title="You Bring Dry Bones to Life"
          medium="acrylic on canvas"
          dimensions="20x20 inches"
          date="Spring 2019"
          description="in the likeness of the creation of man"
          imagePath="/images/art/dryBones.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="500px"
        />
        <GalleryImageDisplay
          title="You Are Near the Broken-hearted"
          medium="acrylic on canvas"
          dimensions="16x24 inches"
          date="Spring 2019"
          description="self portrait"
          imagePath="/images/art/layingOnFloor.jpeg" // Path to your image
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
