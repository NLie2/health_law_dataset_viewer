import './App.css'
import question_dataset from './assets/question_dataset.json';

import { useState } from 'react';

import Popup from './Popup';

function Questionnaire() {
  const [questionIndex, setQuestionIndex] = useState(1);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  // const iframeRef = useRef(null);
  const questionnaireIndex = {
    1: "1FAIpQLSd1NpgOlUT8xc1E74MQ1cjWOJ9FP9vFeIOjQiX2x6PoVD323A", 
    8: "1FAIpQLSfq7wyaok7sJJSCDpn-54xwtzIDjS2zXqKQq4CQ3HrwNccluQ", 
    16: "1FAIpQLSdShmMLaVOZFZw_O8RtN-4mCTg0ECokMMZtZOJ-vZ4N9NcYog",
    24: "1FAIpQLSdlKYU495ss13AqucRVObc8gT88zuKPN-wmGQL06Vx7L-L9Uw",
    32: "1FAIpQLSdmnpxI3YFEL5JUqtkXgcSMazWN4oSEzkYFPbyVSVWUtry4IQ",
    40: "1FAIpQLSeH0z3iRc5iR6uAHVT1qYRcoKSwrqDvZtgbF7sKQAnHHxGpPw",
    48: "1FAIpQLSezf3VrN3R4_9GYnevu-2TfWYvGBSCLuDMbR5kYscEesFeEQg",
    56: "1FAIpQLSdlncARTG_w_84O-Y-z_UXnFMhAP4mb9tB0azPDnGsXn0uu7A",
    64: "1FAIpQLSdu501koJUwXcCtAO_kAJEQE7FqjPrdWRMC-Ux596WKXmuxPw",
    72: "1FAIpQLScQKrAG6xKtYbVzB3lbJ_36qb6S31GZDAb4ls7d9zGBLbq9vw",
    80: "1FAIpQLSdSVnzaPKAu98zGyL545trHl2xMZJEavqzA_Hr3HCGRGnEgmA",
    88: "1FAIpQLScAqxu7RccWJPbcvv_AZxKjf1eokIRnVcbFf4xmrs-dc8CurQ",
    96: "1FAIpQLSdiYB5CiVx1RPw-8hr_3EPVOzDCrD55o1deX9c6s1_92b4RxA",
    104: "1FAIpQLSclzkDzcV0tCkFyLh2HDzqLwrwlyUAVLJPwlw6XBP_v_3z2eg",
    112: "1FAIpQLSdG55_EiyQneL0eqnZTmy50POoM1qhNjuRIdNCJbfySwWafCw",
    120: "1FAIpQLScSXd1Zrme5GSQed6zIB_zMCPCG1NnUEDLbjiLe_pF2y0oxRg",
    128: "1FAIpQLSf51dIiGEqwcdp8-XAs7r0daLcBNj-gneAUFNIjYMQChoOGGw",
    136: "1FAIpQLSdG86dzG0Gn_RCdGH3XLs0Cm8AjHSV6eRk2jFuQWlLS7ZOOlQ",
    144: "1FAIpQLSdTtfEKIie5JT6aJLmoNEAn0pIwjhbkRsoF3giTPo9Qg4I6Ow",
    152: "1FAIpQLSfzLJZwC8sYzoA8MxToid2mDYPN1LikpmSLYml6SuUyVrdznQ",
    160: "1FAIpQLSdRLtXxpBxYtUow3-vObnYn-w1e7G3C3g2WZVEH6dV2qlGJlw",
    168: "1FAIpQLSeSwe23iYYxec5SJ9PXGjlnmNDCdE0nslo6VmB1tNgi_JYpeg",
  }

  const nextQuestion = () => {
    //log keys of questionIndex
    if (questionIndex < question_dataset.length - 1) {
      // Set questionIndex to next item in Object.keys(questionnairIndex)
      let keys = Object.keys(questionnaireIndex);
      let nextKeyIndex = keys.indexOf(questionIndex.toString()) + 1;
      if (nextKeyIndex < keys.length) {
        setQuestionIndex(parseInt(keys[nextKeyIndex]));
      } else {
        setQuestionIndex(parseInt(keys[0]));
      }
    } else {
      setQuestionIndex(0);
    }
  }

  const previousQuestion = () => {
    if (questionIndex > 0) {
      // set questionIndex to previous questionkey
      let keys = Object.keys(questionnaireIndex);
      let prevKeyIndex = keys.indexOf(questionIndex.toString()) - 1;
      if (prevKeyIndex >= 0) {
        setQuestionIndex(parseInt(keys[prevKeyIndex]));
      } else {
        setQuestionIndex(parseInt(keys[keys.length - 1]));
      }
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
        <h1> QUESTION Alt {questionIndex}</h1>
        <>
          {/* Other content of your page */}
          <button onClick={togglePopup}>Rate this question</button>

          <Popup isOpen={isPopupOpen} closePopup={togglePopup} index={questionnaireIndex[questionIndex]} />
        </>
        {/* <Form /> */}
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
