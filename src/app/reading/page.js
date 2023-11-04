" use client ";

import React from "react";
import Navbar from "@/components/Navbar";
import Book from "@/app/reading/Book";
import Link from "next/link";
import { otherFiction, sciFiBooks, topFiveBooks } from "./bookData.js";
import OutlineButton from "@/components/OutlineButton";

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
        <div style={styles.cardsContainer}>
          <div style={styles.infoSection}>
            <p style={styles.centeredTitle}>
              <strong>my sci fi book club</strong>
            </p>
            <p>
              summer 2023, i started a sci fi book club with my friends. i think
              i'll write a blog on this sometime soon, because it was one of the
              best times of my life, but for now, view my personal sci fi
              library below. these are a combination of things i read in that
              book club, read on my own, or read in high school as part of a sci
              fi independent study i did with my friend.{" "}
            </p>
          </div>
        </div>

        <h1 style={styles.centeredTitle}>my sci fi library</h1>
        <div style={styles.cardsContainer}>
          {sciFiBooks.map((book, index) => (
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
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    padding: "20px", // Adds some padding to the overall page
    marginBottom: "100px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
  },
  cardsContainer: {
    marginBottom: "40px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next row
    gap: "30px", // Adds space between each card
    justifyContent: "center", // Center items horizontally
    alignItems: "flex-end", // Align items to the bottom of the container
  },
  infoSection: {
    border: "2px solid black",
    borderRadius: "8px",
    padding: "15px 15px",
    backgroundColor: "transparent",
    color: "black",
    outline: "none",
    transition: "0.3s",
    display: "flex",
    width: "60%",
    flexDirection: "column",
    marginTop: "100px",
  },
};
