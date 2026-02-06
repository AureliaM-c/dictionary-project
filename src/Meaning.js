import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>

      {props.meaning.example && (
        <p>
          <strong>Example: </strong>
          <em>{props.meaning.example}</em>
        </p>
      )}
      {props.meaning.synonyms && (
        <p>
          <strong>Synonyms: </strong>
          <em>{props.meaning.synonyms}</em>
        </p>
      )}
    </div>
  );
}
