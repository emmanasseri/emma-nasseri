import React from "react";
import Navbar from "@/components/Navbar";
import OutlineCard from "@/components/OutlineCard";

export default function CSPage() {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <h1 style={styles.centeredTitle}>here are a few of my projects.</h1>
        <div style={styles.cardsContainer}>
          <OutlineCard
            title="Spencer Collaboration"
            description="an art project involving blockchain"
            imagePath="/images/cs/spencerImage.png" // Path to your image
            alt="image of the website" // Alt text for the image
            link="https://github.com/KU-Blockchain/spencer-museum-collaboration"
          />
          <OutlineCard
            title="Blockchain Attendance Tracker"
            description="a student focused attendance tool"
            imagePath="/images/cs/attendThisImage.png" // Path to your image
            alt="image of the website" // Alt text for the image
            link="https://attendthis.on.fleek.co/"
          />
          <OutlineCard
            title="Philosophical Chatbot"
            description="this is totally a work in progress"
            imagePath="/images/cs/chatbot.png" // Path to your image
            alt="image of the website" // Alt text for the image
            link="https://simple-chat-bot-smoky.vercel.app/"
          />
          <OutlineCard
            title="Interdisciplinary collaborations"
            description="a choose your own adventure game"
            imagePath="/images/cs/spencerImage.png" // Path to your image
            alt="image of the website" // Alt text for the image
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
