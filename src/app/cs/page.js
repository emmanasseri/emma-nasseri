import React from "react";
import Navbar from "@/components/Navbar";
import OutlineCard from "@/components/OutlineCard";

export default function CSPage() {
  return (
    <>
      <Navbar />
      <div>
        <h1>CS Page</h1>
        <OutlineCard
          title="Spencer Collaboration"
          description="an art project involving blockchain"
          imagePath="/images/spencerImage.png" // Path to your image
          alt="Description for Accessibility" // Alt text for the image
        />
        <OutlineCard
          title="Blockchain Attendance Tracker"
          description="a student focused attendance tool"
          imagePath="/images/spencerImage.png" // Path to your image
          alt="Description for Accessibility" // Alt text for the image
          link="https://attendthis.on.fleek.co/"
        />
        <OutlineCard
          title="Philosophical Chatbot"
          description="talk with philosophers"
          imagePath="/images/spencerImage.png" // Path to your image
          alt="Description for Accessibility" // Alt text for the image
        />
        <OutlineCard
          title="Interdisciplinary collaborations"
          description="a choose your own adventure game"
          imagePath="/images/spencerImage.png" // Path to your image
          alt="Description for Accessibility" // Alt text for the image
        />
      </div>
    </>
  );
}
