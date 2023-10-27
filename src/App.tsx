import React, { useState } from "react";
import logo from "./logo.svg";
import shapes from "./shapes.svg";
import LoginForm from "./login-form";
import "./App.css";

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating((value) => !value);
  };

  return (
    <>
      <div
        style={{
          width: 1212,
          height: 699,
          backgroundColor: "yellow",
          overflow: "hidden",
        }}
        data-bs-theme="dark"
      >
        <div
          className={`slide-left-div ${
            isAnimating ? "slide-left-animation" : ""
          }`}
          style={{
            backgroundColor: "#0D121E",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img
            src={require("./logo.png")}
            alt="logo"
            style={{
              width: "50%",
              paddingBottom: 100,
              alignSelf: "center",
              zIndex: 10,
            }}
          />
          <img
            src={shapes}
            alt="shapes"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "65%",
              height: "auto",
            }}
          />
        </div>
        <LoginForm hidden={isAnimating} />
      </div>
      <button onClick={startAnimation}>Start Left Animation</button>
    </>
  );
}

export default App;
