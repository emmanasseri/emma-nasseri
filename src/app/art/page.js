import React from "react";
import Navbar from "@/components/Navbar";
import OutlineCard from "@/components/OutlineCard";

export default function ArtPage() {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <h1 style={styles.centeredTitle}>
          here are some other things i've created.
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
          />
          <OutlineCard
            title="figurative work"
            description="figures! some nudity ahead. proceed with caution"
            imagePath="/images/art/wilcox.jpeg" // Path to your image
            alt="image of the website" // Alt text for the image
            link="https://attendthis.on.fleek.co/"
            imageWidth="400px"
            imageHeight="500px"
          />
          <OutlineCard
            title="2020 pandemic show"
            description="a body of work i developed for a solo show in 2020"
            imagePath="/images/art/wilcox.jpeg" // Path to your image
            alt="image of the website" // Alt text for the image
            link="https://attendthis.on.fleek.co/"
            imageWidth="400px"
            imageHeight="500px"
          />
          <OutlineCard
            title="sketches and studies"
            description="other work from over the years"
            imagePath="/images/art/wilcox.jpeg" // Path to your image
            alt="image of the website" // Alt text for the image
            link="https://attendthis.on.fleek.co/"
            imageWidth="400px"
            imageHeight="500px"
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    padding: "20px", // Adds some padding to the overall page
  },
  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next row
    gap: "20px", // Adds space between each card
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
  },
};
