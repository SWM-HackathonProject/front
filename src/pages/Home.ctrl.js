/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";
import axios from "axios";

// 임시
const GetRankings = () => {
  var rankings = [
    {
      fishCode: 611501,
      fishName: "광어",
      imageURL: "/fishImg/611501.jpeg",
      description: "추천 1",
      price: 29900,
    },
    {
      fishCode: 815601,
      fishName: "연어",
      imageURL: "/fishImg/815601.jpeg",
      description: "추천 2",
      price: 34790,
    },
    {
      fishCode: 712201,
      fishName: "참치",
      imageURL: "/fishImg/712201.jpeg",
      description: "추천 3",
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
      fishName: "광어",
      imageURL: "/fishImg/611501.jpeg",
      description: "추천 1",
    },
    {
      fishCode: 815601,
      fishName: "연어",
      imageURL: "/fishImg/815601.jpeg",
      description: "추천 2",
    },
    {
      fishCode: 712201,
      fishName: "참치",
      imageURL: "/fishImg/712201.jpeg",
      description: "추천 3",
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
