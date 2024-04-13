import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleOnChange = () => {};

  const handleOnClick = () => {};

  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}
