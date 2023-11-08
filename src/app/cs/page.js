import React from "react";
import Navbar from "@/components/Navbar";
import OutlineCard from "@/components/OutlineCard";
import Image from "next/image";
import Link from "next/link";

export default function CSPage() {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <h2 style={styles.centeredTitle}>i like to code!</h2>
        <div style={styles.githubChart}>
          <div style={styles.githubLogo}>
            <Link href="https://github.com/emmanasseri">
              <Image
                src="/images/icons/githubLogo.png"
                width="70"
                height="70"
              />
            </Link>
          </div>
          <img
            src="http://ghchart.rshah.org/409ba5/emmanasseri"
            alt="emmanasseri's Github chart"
          />
        </div>

        <h2 style={styles.centeredTitle}>here are a few of my projects.</h2>
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
            title="This website"
            description="built from scratch with React and Next.js"
            imagePath="/images/cs/thissite.png" // Path to your image
            alt="image of the website" // Alt text for the image
            link="https://github.com/emmanasseri/portfolio-site"
          />
          <OutlineCard
            title="Blockchain Jeopardy site"
            description="a Jeopardy inspired trivia board for blockchain education"
            imagePath="/images/cs/blockchainJeopardy.png" // Path to your image
            alt="image of the website" // Alt text for the image
            link="https://blockchain-jeopardy.vercel.app/"
          />
          <OutlineCard
            title="Philosophical Chatbot"
            description="this is totally a work in progress"
            imagePath="/images/cs/chatbot.png" // Path to your image
            alt="image of the website" // Alt text for the image
            link="https://simple-chat-bot-smoky.vercel.app/"
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  githubLogo: {
    margin: "50px",
  },
  githubChart: {
    display: "flex",
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
    marginBottom: "70px",
  },
  pageContainer: {
    padding: "20px", // Adds some padding to the overall page
  },
  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
    marginTop: "20px",
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
