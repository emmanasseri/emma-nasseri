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
      </div>
    </>
  );
}
