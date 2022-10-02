import axios from "axios";
import React, { Component, useState } from "react";
import "./App.css";

const URL_ENDPOINT = "https://google.demo";

const Translator = () => {
  const [sourceText, setSourceText] = useState("你好！");
  const [targetText, setTargetText] = useState("hello!");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const api = `${URL_ENDPOINT}?sourceText=${sourceText}`;
    axios
      .get(api)
      .then(
        result => {
          setTargetText(result.data.targetText);
          setError(null);
        }
      ).catch(
        error => {
          setError(error);
        }
      )
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setSourceText(value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {error && <p>error.message</p>}
      <div>
        <label htmlFor="sourceText">Source Chinese: </label>
        <input id="sourceText" type="text" onChange={handleChange} value={sourceText} />
      </div>
      <div>
        <label htmlFor="targetText">Target English: </label>
        <input id="targetText" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

const App = <Translator />;

export default App;
