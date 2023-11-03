"use client";

import React from "react";

const Book = ({ imgSrc, title, author, yearLastRead, rating, review }) => {
  const handleMouseEnter = (event) => {
    const modal = event.target.nextSibling;
    modal.style.display = "block";
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
          left: "220px",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3>{title}</h3>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Year Last Read:</strong> {yearLastRead}
        </p>
        <p>
          <strong>Rating:</strong> {rating}
        </p>
        <p>
          <strong>Review:</strong> {review}
        </p>
      </div>
    </div>
  );
};

export default Book;
