import React from "react";
import Navbar from "@/components/Navbar";
import SimpleImageDisplay from "@/components/SimpleImageDisplay";
import GalleryImageDisplay from "@/components/galleryImageDisplay";

export default function sketchesAndStudiesPage() {
  return (
    <>
      <Navbar />
      <h1 style={styles.centeredTitle}>other work i've done</h1>
      <div style={styles.artContainer}>
        <GalleryImageDisplay
          title="Limelight"
          medium="charcoal and conté on paper"
          dimensions="18x24 inches"
          date="2019"
          description="a drawing of my younger brother playing the piano"
          imagePath="/images/art/Limelight.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="400px"
          imageHeight="600px"
        />
        <GalleryImageDisplay
          title="Bedsheet"
          medium="graphite on paper"
          dimensions="8x10 inches"
          date="2019"
          description=""
          imagePath="/images/art/Bedsheet.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="400px"
          imageHeight="300px"
        />{" "}
        <GalleryImageDisplay
          title="Campanile Watercolor Study"
          medium="watercolor on paper"
          dimensions="8x10 inches"
          date="2020"
          description=""
          imagePath="/images/art/campanileWatercolor.png" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="300px"
          imageHeight="200px"
        />
        <GalleryImageDisplay
          title="Marvin Grove in Yellow"
          medium="chalk pastel on newsprint"
          dimensions="18x24 inches"
          date="2020"
          description="marvin grove on campus in autumn"
          imagePath="/images/art/marvinGrove.png" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="700px"
          imageHeight="500px"
        />
        <GalleryImageDisplay
          title="Marvin Grove in Orange"
          medium="chalk pastel on newsprint"
          dimensions="18x24 inches"
          date="2020"
          description="marvin grove on campus in autumn"
          imagePath="/images/art/marvinGroveOrange.png" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="700px"
          imageHeight="500px"
        />
        <GalleryImageDisplay
          title="Sketch of the Dorms"
          medium="digital"
          dimensions=""
          date="2020"
          description=""
          imagePath="/images/art/dormSketch.png" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="300px"
          imageHeight="200px"
        />
        <GalleryImageDisplay
          title="Bridge by Potter Lake"
          medium="charcoal on paper"
          dimensions="18x24 inches"
          date="2020"
          description="a study of the bridge by the pond"
          imagePath="/images/art/bridgeByPotterLake.png" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="700px"
          imageHeight="500px"
        />
        <GalleryImageDisplay
          title="The View from Daisy Hill"
          medium="digital"
          dimensions=""
          date="2020"
          description=""
          imagePath="/images/art/campusSketch.png" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="200px"
          imageHeight="200px"
        />
        <GalleryImageDisplay
          title="Couch"
          medium="charcoal on paper"
          dimensions="8x10 inches"
          date="2019"
          description=""
          imagePath="/images/art/Couch.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="400px"
          imageHeight="300px"
        />
        <GalleryImageDisplay
          title="Campanile in Black and White"
          medium="charcoal on newsprint"
          dimensions="18x24 inches"
          date="2020"
          description="the campanile bell tower on campus"
          imagePath="/images/art/campanile.png" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="600px"
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
    //alignItems: "center", // Center items vertically
  },
};
