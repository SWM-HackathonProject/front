/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";
import axios from "axios";

// 임시
const GetRankings = () => {
  var rankings = [
    {
      fishCode: 611501,
      fishName: "광어(넙치)",
      imageURL: "/fishImg/611501.jpeg",
      description: "넙치는 가자미목 넙치과에 속하는 바닷물고기이다. 몸이 넙적하고 눈이 왼쪽으로 몰려 있다. 《자산어보》에서는 접어라고 하고 있으며, 속명을 “넓적한 물고기”라는 뜻에서 광어라고 소개하고 있다.",
      price: 29900,
    },
    {
      fishCode: 815601,
      fishName: "연어",
      imageURL: "/fishImg/815601.jpeg",
      description: "연어는 연어목 연어과에 속하는 어류이다. 또한 어린 연어는 연어사리라 부른다.",
      price: 34790,
    },
    {
      fishCode: 712201,
      fishName: "참치(다랑어)",
      imageURL: "/fishImg/712201.jpeg",
      description: "다랑어는 고등어과 다랑어족에 속하는 물고기들을 일컫는 통상명으로 바다의 닭고기라는 별명을 갖고 있다. 통조림이나 회, 냉동식품으로서 사람들에게 인기있는 물고기이다",
      price: 82510,
    },
  ];

  return rankings;
};

// const GetRankings = async () => {
//   const response = await axios.get(`${apiURL}/rankings`);
//   return response.data;
// };

// 임시
const GetRecommendations = () => {
  var recommendations = [
    {
      fishCode: 611501,
      fishName: "광어(넙치)",
      imageURL: "/fishImg/611501.jpeg",
      description: "넙치는 가자미목 넙치과에 속하는 바닷물고기이다. 몸이 넙적하고 눈이 왼쪽으로 몰려 있다. 《자산어보》에서는 접어라고 하고 있으며, 속명을 “넓적한 물고기”라는 뜻에서 광어라고 소개하고 있다.",
    },
    {
      fishCode: 815601,
      fishName: "연어",
      imageURL: "/fishImg/815601.jpeg",
      description: "연어는 연어목 연어과에 속하는 어류이다. 또한 어린 연어는 연어사리라 부른다.",
    },
    {
      fishCode: 712201,
      fishName: "참치(다랑어)",
      imageURL: "/fishImg/712201.jpeg",
      description: "다랑어는 고등어과 다랑어족에 속하는 물고기들을 일컫는 통상명으로 바다의 닭고기라는 별명을 갖고 있다. 통조림이나 회, 냉동식품으로서 사람들에게 인기있는 물고기이다",
    },
  ];

  return recommendations;
};

// const GetRankings = async () => {
//   const response = await axios.get(`${apiURL}/recommendations`);
//   return response.data;
// };

const GetMaps = async () => {
  const response = await axios.get(`${apiURL}/maps`);
  return response.data;
};

export { GetRankings, GetRecommendations, GetMaps };
