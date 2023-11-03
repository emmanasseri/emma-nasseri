"use client";

import React from "react";

const Book = ({ imgSrc, title, author, yearLastRead, rating, review }) => {
  const handleMouseEnter = (event) => {
    const modal = event.target.nextSibling;
    modal.style.display = "block";

    // Check if modal would be cut off on the right side
    if (event.clientX + modal.offsetWidth > window.innerWidth) {
      modal.style.left = "-310px"; // Shift to left of book
    } else {
      modal.style.left = "210px"; // Right side of book
    }
  };

  const handleMouseLeave = (event) => {
    const modal = event.target.nextSibling;
    modal.style.display = "none";
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={imgSrc}
        alt={title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: "200px" }}
      />
      <div
        style={{
          display: "none",
          position: "absolute",
          top: "0",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "300px",
          zIndex: 1000, // Ensures modal is above other elements
        }}
      >
        <h3>{title}</h3>
        <p>by {author}</p>
        <p>last read {yearLastRead}</p>
        <p>{rating}</p>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Book;
