" use client ";

import React from "react";
import Navbar from "@/components/Navbar";
import Book from "@/components/Book";

export default function CSPage() {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <h1 style={styles.centeredTitle}>i love to read!</h1>
        <div style={styles.cardsContainer}>
          <Book
            imgSrc="/images/reading/endersgame.png"
            title="Book Title"
            author="Author Name"
            yearLastRead="2022"
            rating="5/5"
            review="This book was fantastic!"
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
