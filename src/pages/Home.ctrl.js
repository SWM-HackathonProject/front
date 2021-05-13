/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";

// 임시
const GetRankings = () => {
  var rankings = [
    {
      src: DefaultImage,
      name: "참돔",
      text: "랭킹 1등",
      price: 100,
    },
    {
      src: DefaultImage,
      name: "숭어",
      text: "랭킹 2등",
      price: 200,
    },
    {
      src: DefaultImage,
      name: "볼락",
      text: "랭킹 3등",
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
      src: DefaultImage,
      name: "참돔",
      text: "추천 1",
    },
    {
      src: DefaultImage,
      name: "숭어",
      text: "추천 2",
    },
    {
      src: DefaultImage,
      name: "볼락",
      text: "추천 3",
    },
  ];

  return recommendations;
};

// const GetRankings = async () => {
//   const response = await axios.get(`${apiURL}/recommendations`);
//   return response.data;
// };

export { GetRankings, GetRecommendations };
