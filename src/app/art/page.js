import React from "react";
import Navbar from "@/components/Navbar";
import OutlineCard from "@/components/OutlineCard";
import Image from "next/image";
import OutlineButton from "@/components/OutlineButton";

export default function ArtPage() {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <div style={styles.cardsContainer}>
          <div
            style={{
              ...styles.infoSection,

              backgroundImage: " url('/images/art/selfPortraitBackground.png')",
              width: 1300,
              height: 400,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <strong>my art journey</strong>

            <p style={{ width: "40%", marginLeft: "auto" }}>
              i started drawing in high school, with graphite then charcoal.
              then acrylics and figure drawing in later high school. oils and
              figure painting in college. interested in beauty. concerned with
              good.
            </p>
          </div>
        </div>
        <h1 style={styles.centeredTitle}>
          here are some galleries i've created.
        </h1>
        <div style={styles.cardsContainer}>
          <OutlineCard
            title="University Scholars Capstone"
            description="a creative interrogation of justice, peace, and reconciliation"
            imagePath="/images/art/fatherSonAndHolySpirit.jpeg" // Path to your image
            alt="image of the project" // Alt text for the image
            link="/art/university-scholars"
            imageWidth="400px"
            imageHeight="500px"
            buttonTitle="view work"
          />
          <OutlineCard
            title="figurative work"
            description="figures! some nudity ahead. proceed with caution"
            imagePath="/images/art/wilcox.jpeg" // Path to your image
            alt="image of the website" // Alt text for the image
            link="/art/figures"
            imageWidth="400px"
            imageHeight="500px"
            buttonTitle="view work"
          />
          <OutlineCard
            title="2020 pandemic show"
            description="a body of work i developed for a solo show in 2020"
            imagePath="/images/art/youSawThatItWasGood.jpeg" // Path to your image
            alt="image of the website" // Alt text for the image
            link="/art/2020-show"
            imageWidth="500px"
            imageHeight="500px"
            buttonTitle="view work"
          />
          <OutlineCard
            title="sketches and studies"
            description="other work from over the years"
            imagePath="/images/art/Limelight.jpeg" // Path to your image
            alt="image of the website" // Alt text for the image
            link="/art/sketches-and-studies"
            imageWidth="500px"
            imageHeight="500px"
            buttonTitle="view work"
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  imageContainer: {
    position: "relative",
    marginBottom: "8px",
  },
  intro: {
    border: "1px solid black",
    borderRadius: "8px",
    padding: "15px 15px",
    backgroundColor: "transparent",
    color: "black",
    outline: "none",
    transition: "0.3s",
    width: "400px",
    display: "flex",
    flexDirection: "column",
  },
  pageContainer: {
    padding: "20px", // Adds some padding to the overall page
  },
  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
    marginTop: "40px",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next row
    gap: "20px", // Adds space between each card
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
  },

  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
    marginTop: "20px",
  },

  infoSection: {
    borderRadius: "8px",
    padding: "15px 15px",
    backgroundColor: "transparent",
    color: "white", // Sets text color to white
    outline: "none",
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end", // Aligns children to the right side of the container
    textAlign: "right", // Aligns text to the right within the children elements
    width: "80%",
    marginTop: "100px",
  },
};
