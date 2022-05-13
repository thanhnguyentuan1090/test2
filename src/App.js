import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";

//bai 1:Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia. Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].

let A1 = [1, 2, "a"];
let A2 = [1, 3, "b"];

const input = (A1, A2) => {
  const B = [...A1, ...A2];
  console.log(B);

  var counts = {};
  for (var i = 0, l = B.length; i < l; i++) {
    counts[B[i]] = (counts[B[i]] || 0) + 1;
  }

  const output = B.filter((item) => counts[item] <= 1);
  console.log(output);
};
console.log(input(A1, A2));

//bai 2:Viết chương trình xếp hạng rank theo số điểm các đội bóng đạt được trong giải đấu. Biết rằng tên của các đội bóng không thể trùng nhau, nếu số điểm trùng nhau thì xếp đội xếp trên có hiệu số bàn thắng bại (GD: Goal Difference) ít hơn, rồi mới xét đến Alphabet nếu 2 đội trùng cả điểm số lẫn hiệu số bàn thắng.

function GoalList() {
  const input2 = [
    { name: "Arsenal", points: 99, GD: 45 },
    { name: "Chelsea", points: 75, GD: 39 },
    { name: "Manchester United", points: 60, GD: 29 },
    { name: "Liverpool", points: 88, GD: 39 },
  ];
  var output2 = input2.sort((a, b) => {
    return b.points - a.points;
  });
  var output3 = output2.map(function (point, index) {
    point.position = index + 1;
    return point;
  });
  console.log(output3);
}

//bai3:
function Quiz() {
  const [getQuiz, setGetQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const Quiz = [
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "In golf, what name is given to a hole score of two under par?",
      correct_answer: "Eagle",
      incorrect_answers: ["Birdie", "Bogey", "Albatross"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Which team won the 2015-16 English Premier League?",
      correct_answer: "Leicester City",
      incorrect_answers: ["Liverpool", "Cheslea", "Manchester United"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question:
        "This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
      correct_answer: "Don Cherry",
      incorrect_answers: ["Don McKellar", "Don Taylor ", "Donald Sutherland"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Which team has won the most Stanley Cups in the NHL?",
      correct_answer: "Montreal Canadians",
      incorrect_answers: [
        "Chicago Blackhawks",
        "Toronto Maple Leafs",
        "Detroit Red Wings",
      ],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question:
        "In bowling, what is the term used for getting three consecutive strikes?",
      correct_answer: "Turkey",
      incorrect_answers: ["Flamingo", "Birdie", "Eagle"],
    },
  ];
  const handleAnswerOptionClick = (correct_answer) => {
    if (correct_answer) {
      setScore(score + 10);
    }
  };

  const nextQuestion = getQuiz + 1;
  if (nextQuestion < getQuiz.question.length) {
    setGetQuiz(nextQuestion);
  } else {
    setShowScore(true);
  }
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">You scored {score}</div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {getQuiz + 1}</span>/{Quiz.length}
            </div>
            <div className="question-text">{Quiz[getQuiz].question}</div>
          </div>
          <div className="answer-section">
            {Quiz[getQuiz].map((Quiz) => (
              <button
                onClick={() => handleAnswerOptionClick(Quiz.correct_answer)}
              >
                {Quiz.incorrect_answers}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default Quiz;
