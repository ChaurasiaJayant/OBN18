import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  // const startListening = async () => {
  //   await SpeechRecognition.startListening({
  //     continuous: true,
  //     language: "en-IN",
  //   });
  // };
  const startListening = async () => {
    console.log("Started Listening");

    await SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  };

  // const { transcript, browserSupportsSpeechRecognition } =
  //   useSpeechRecognition();
  const { transcript, browserSupportsSpeechRecognition, listening } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <p>Write anything which you like ....</p>

        <div className="main-content">{transcript}</div>

        <div className="btn-style">
          <button>Copy</button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
