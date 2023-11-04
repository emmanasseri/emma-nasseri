" use client ";

import React from "react";
import Navbar from "@/components/Navbar";
import Book from "@/app/reading/Book";
import { otherFiction, thinkAboutBooks, topFiveBooks } from "./bookData.js";
import TextCard from "@/components/TextCard.js";

export default function readingPage() {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <h1 style={styles.centeredTitle}>
          my top 5 books ever (for right now)
        </h1>
        <div style={styles.cardsContainer}>
          {topFiveBooks.map((book, index) => (
            <Book
              key={index}
              imgSrc={book.imgSrc}
              title={book.title}
              author={book.author}
              yearLastRead={book.yearLastRead}
              rating={book.rating}
              review={book.review}
            />
          ))}
        </div>

        <h1 style={styles.centeredTitle}>fiction favs</h1>
        <div style={styles.cardsContainer}>
          {otherFiction.map((book, index) => (
            <Book
              key={index}
              imgSrc={book.imgSrc}
              title={book.title}
              author={book.author}
              yearLastRead={book.yearLastRead}
              rating={book.rating}
              review={book.review}
            />
          ))}
        </div>
        <TextCard />
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    padding: "20px", // Adds some padding to the overall page
    marginBottom: "100px",
  },
  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
    marginTop: "50px",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next row
    gap: "20px", // Adds space between each card
    justifyContent: "center", // Center items horizontally
    alignItems: "flex-end", // Align items to the bottom of the container
  },
};
