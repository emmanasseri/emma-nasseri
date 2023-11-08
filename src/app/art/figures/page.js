import React from "react";
import Navbar from "@/components/Navbar";
import SimpleImageDisplay from "@/components/SimpleImageDisplay";
import GalleryImageDisplay from "@/components/galleryImageDisplay";

export default function figuresPage() {
  return (
    <>
      <Navbar />
      <h1 style={styles.centeredTitle}>figures</h1>
      <div style={styles.artContainer}>
        <GalleryImageDisplay
          title="study of a statue at the wilcox museum"
          medium="charcoal and conté on toned paper"
          dimensions="18x24 inches"
          date="Fall 2023"
          description="no description yet"
          imagePath="/images/art/wilcox.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="700px"
        />
        <GalleryImageDisplay
          title="portrait of my sister"
          medium="charcoal on paper"
          dimensions="8x11 inches"
          date="Fall 2019"
          description="no description yet"
          imagePath="/images/art/Eden.jpg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="500px"
          imageHeight="600px"
        />
        <GalleryImageDisplay
          title="gesture"
          medium="charcoal on newsprint"
          dimensions="18x24 inches"
          date="Fall 2020"
          description="5 minutes"
          imagePath="/images/art/gesture1.png" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="300px"
          imageHeight="400px"
        />
        <GalleryImageDisplay
          title="gesture"
          medium="charcoal on newsprint"
          dimensions="18x24 inches"
          date="Fall 2020"
          description="5 minutes"
          imagePath="/images/art/gesture2.png" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="400px"
          imageHeight="300px"
        />
        <GalleryImageDisplay
          title="gestures in ink"
          medium="ink on paper"
          dimensions="8x10 inches"
          date="Summer 2019"
          description="from my summer at the School of the Art Institute of Chicago"
          imagePath="/images/art/SAICGestures.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="700px"
          imageHeight="300px"
        />
        <GalleryImageDisplay
          title="drawing of a reclining man"
          medium="charcoal and conté on toned paper"
          dimensions="18x24 inches"
          date="Summer 2019"
          description="from my summer at the School of the Art Institute of Chicago"
          imagePath="/images/art/recliningFigureSAIC.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="700px"
          imageHeight="500px"
        />{" "}
        <GalleryImageDisplay
          title="drawing of a seated man"
          medium="charcoal and conté on toned paper"
          dimensions="18x24 inches"
          date="Summer 2019"
          description="from my summer at the School of the Art Institute of Chicago"
          imagePath="/images/art/SAICEinsteinfigure.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="300px"
          imageHeight="400px"
        />{" "}
        <GalleryImageDisplay
          title="portrait of a woman"
          medium="charcoal and conté on toned paper"
          dimensions="18x24 inches"
          date="Summer 2019"
          description="from my summer at the School of the Art Institute of Chicago"
          imagePath="/images/art/SAICPortrait.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="450px"
          imageHeight="500px"
        />{" "}
        <GalleryImageDisplay
          title="gestures"
          medium="charcoal and conté on craft paper"
          dimensions="24x30 inches"
          date="Summer 2019"
          description="from my summer at the School of the Art Institute of Chicago"
          imagePath="/images/art/SAICGestures2.jpeg" // Path to your image
          alt="image of the project" // Alt text for the image
          imageWidth="700px"
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
