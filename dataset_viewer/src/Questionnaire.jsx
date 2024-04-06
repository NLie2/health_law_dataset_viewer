import './App.css'
import Form from './Form'
import question_dataset from './assets/question_dataset.json';

import { useState } from 'react';

function Questionnaire() {
  const [questionIndex, setQuestionIndex] = useState(0);
  // const iframeRef = useRef(null);

  const nextQuestion = () => {
    if (questionIndex < question_dataset.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(0);
    }
  }
  console.log(question_dataset[questionIndex])
  const previousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else{
      setQuestionIndex(question_dataset.length - 1);
    }

  }
  const handleClick = (e) => {
    e.target.id === "previous" ? previousQuestion() : nextQuestion();
  }
  return (
    <>
      <main>
        <div className="button-div">
          <button className="control-button" id="previous" onClick={handleClick}>previous</button>
          <button className="control-button" id="next" onClick={handleClick}>Next</button>
        </div>
        <h1> QUESTIONNAIRE {questionIndex}</h1>
        <Form />
        <div className="source">
            <p>{question_dataset[questionIndex]["source_text"]}</p>
          </div>
        <div className="card">
          <div className="questionAnswer">
            <h2>Question</h2>
            <p>{question_dataset[questionIndex]["questions_gpt-4"]}</p>
            <h3>{question_dataset[questionIndex]["answer_options"].split('.')[0]}</h3>
            <h3>{question_dataset[questionIndex]["answer_options"].split('.')[1]}</h3>
          </div>
          <div className="questionAnswer">
            <h2>Answer: {question_dataset[questionIndex]["gold_answers_gpt-4"]}</h2>
            <p>{question_dataset[questionIndex]["gold_reasoning_gpt-4"]}</p>
          </div>
        </div>

      </main>
    </>
  )
}

export default Questionnaire
