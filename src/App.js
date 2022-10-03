import axios from "axios";
import React, { Component, useState } from "react";
import "./App.css";


const Translator = () => {
  const [sourceText, setSourceText] = useState("你好！");
  const [targetText, setTargetText] = useState("hello!");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", sourceText);
    encodedParams.append("source", "zh");
    encodedParams.append("target", "en");
    
    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '02842eb1a6msh5ab52e77b1161d9p1d0c60jsnefebafd80afb',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: encodedParams
    };

    axios
      .request(options)
      .then(
        result => {
          setTargetText(result.data.data.translations[0].translatedText);
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
      {error && <p color="r">{error.message}</p>}
      <div>
        <label htmlFor="sourceText">Source Chinese: </label>
        <input id="sourceText" type="text" onChange={handleChange} value={sourceText} />
      </div>
      <div>
        <label htmlFor="targetText">Target English: </label>
        <input id="targetText" type="text" value={targetText} readOnly/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default class App extends Component {
  render() {
    return <Translator />;
  }
}
