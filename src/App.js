import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState } from 'react';

//bai 1:Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia. Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].

let A1 = [1, 2, "a"];
let A2 = [1, 3, "b"];

const input = (A1, A2) => {
  const B = [...A1, ...A2];

  const output = B.filter(
    (value, index, array) => array.indexOf(value) === index
  );
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
function quiz(){
  const [quiz, setQuiz] = useState("");
  const [answer, setAnswer] = useState([]);
  const [choice, setChoice] = useState("");
const getQuiz = async () => {
  try {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    );
  }
}}