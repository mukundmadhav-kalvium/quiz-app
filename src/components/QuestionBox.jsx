import React, { useState, useContext } from "react";
import {AppContext} from "./Context";
import "./QuestionBox.css";
import questions from "../Question.js";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [highlightState, setHighlightState] = useState(false);
  const { text, options } = questions[currQuestion];
  const { theme,setShowResult, score, setScore } = useContext(AppContext);
  const nextQuestion = (choosenOption) => {
    if (currQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrQuestion(currQuestion + 1);
    }

    if (choosenOption.isCorrect) {
      setScore(score + 1);
    }
  };

  const highlight = () => setHighlightState(true);
  const removeHighlight = () => setHighlightState(false);

  return (
    <div className="quiz-question-container" style={{background:theme === "light" ? "#D9D9D9" : "#313131", color: theme === "light" ? "black" : "white" }}>
      <p id="question-number">{currQuestion + 1} of 5</p>
      <h1
        style={{
          color: highlightState ? "red" : "",
          fontSize: highlightState ? "3rem" : "",
        }}
        id="question"
      >
        {text}
      </h1>
      <div className="option-div">
        <button
          className= {theme === 'light' ? 'option light' : 'option dark'}
          id="option-1"
          onClick={() => nextQuestion(options[0])}
        >
          {options[0].text}
        </button>
        <button
          className={theme ===  'light' ? 'option light' : 'option dark'}
          id="option-2"
          onClick={() => nextQuestion(options[1])}
        >
          {options[1].text}
        </button>
        <button
          className={theme === 'light' ? 'option light' : 'option dark'}
          id="option-3"
          onClick={() => nextQuestion(options[2])}
        >
          {options[2].text}
        </button>
        <button
          className={theme === 'light' ? 'option light' : 'option dark'}
          id="option-4"
          onClick={() => nextQuestion(options[3])}
        >
          {options[3].text}
        </button>
      </div>
      <div className="button-div">
        <button onClick={highlight} id="highlight-button" style={{color: theme === "light" ? "black" : "white"}}>
          Highlight
        </button>
        <button onClick={removeHighlight} id="unhighlight-button" style={{color: theme === "light" ? "black" : "white"}}>
          Remove Highlight
        </button>
      </div>
    </div>
  );
};

export default Quiz;
