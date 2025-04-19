import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Using state to manage toggle message visibility
  const [showMessage, setShowMessage] = useState(false);

  // Function to toggle the message
  const toggleMessage = () => setShowMessage(!showMessage);

  return (
    <div className="App">
      <h1>
        Welcome to React, <span style={{ color: "#61dafb" }}>Mwananyina</span>!
      </h1>{" "}
      {/* Display name */}
      {/* Button to toggle message */}
      <button
        onClick={toggleMessage}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Toggle Message
      </button>
      {/* Conditionally render the message based on showMessage */}
      {showMessage && <p>Here’s your special message! 🎉</p>}
    </div>
  );
}
