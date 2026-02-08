import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search() {
    let apiKey = "dd09ob23ada50e374e3e4a89b5c9fte0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    let apiKey = "dd09ob23ada50e374e3e4a89b5c9fte0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=sunset&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }, []);

  return (
    <div className="Dictionary">
      <section>
        <h3>What are you looking for?</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            defaultValue="sunset"
          ></input>
        </form>
        <div className="hint">
          Suggested words: Love, happy, yoga, dance, nature...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
