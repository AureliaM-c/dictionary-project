import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        <p>{props.meaning.definition}</p>
      </div>
      <div className="example">
        {props.meaning.example && <p> {props.meaning.example}</p>}
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
