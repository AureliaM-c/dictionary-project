import React from "react";

export default function Phonetic(props) {
  function playAudio() {
    console.log("Button clicked!");
    console.log("Word to speak:", props.word);

    let speech = new SpeechSynthesisUtterance(props.word);
    speech.lang = "en-GB";

    speech.onstart = function () {
      console.log("Speech started");
    };

    speech.onerror = function (event) {
      console.log("Speech error:", event);
    };

    window.speechSynthesis.speak(speech);
  }

  return (
    <div className="Phonetic">
      <button onClick={playAudio} className="audio-button">
        🔊
      </button>{" "}
      {props.phonetic}
    </div>
  );
}
