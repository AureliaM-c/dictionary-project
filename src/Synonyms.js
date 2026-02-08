import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return <p className="synonyms">{props.synonyms.join(", ")}</p>;
  } else {
    return null;
  }
}
