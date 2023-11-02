import React, { Button } from "react";

const OutlineButton = ({ title, onClick }) => {
  return (
    <button style={styles.button} onClick={onClick ? onClick : undefined}>
      {title}
    </button>
  );
};

export default OutlineButton;

const styles = {
  button: {
    border: "2px solid black",
    borderRadius: "8px", // This gives the rounded edges
    padding: "8px 16px", // Adjust as needed for button size
    backgroundColor: "transparent",
    color: "black",
    cursor: "pointer",
    outline: "none",
    transition: "0.3s", // Smoothens the hover effect
    "&:hover": {
      backgroundColor: "black", // Color when button is hovered
      color: "white",
    },
  },
  link: {
    textDecoration: "none",
  },
};
