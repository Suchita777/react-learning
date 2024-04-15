import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Converted to Uppercase!");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Converted to Lowercase!");
  };

  const handleCopy = () => {
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("success", "Copied to clipboard!");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            rows="10"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#302E41" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          disabled={text.length === 0}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          disabled={text.length === 0}
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.{" "}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
