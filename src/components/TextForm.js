import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpperClick = (event) => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowerClick = (event) => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text is cleared", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>
          Convert Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Convert LowerCase
        </button>
      </div>
    </>
  );
}
