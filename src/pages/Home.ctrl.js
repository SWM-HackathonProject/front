/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";

// 임시
const GetRankings = () => {
  var rankings = [
    {
      fishCode: 0,
      fishName: "참돔",
      imageURL: DefaultImage,
      description: "랭킹 1등",
      price: 100,
    },
    {
      fishCode: 1,
      fishName: "숭어",
      imageURL: DefaultImage,
      description: "랭킹 2등",
      price: 200,
    },
    {
      fishCode: 2,
      fishName: "볼락",
      imageURL: DefaultImage,
      description: "랭킹 3등",
      price: 300,
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
      fishCode: 0,
      fishName: "참돔",
      imageURL: DefaultImage,
      description: "추천 1",
    },
    {
      fishCode: 1,
      fishName: "숭어",
      imageURL: DefaultImage,
      description: "추천 2",
    },
    {
      fishCode: 2,
      fishName: "볼락",
      imageURL: DefaultImage,
      description: "추천 3",
    },
  ];

  return recommendations;
};

// const GetRankings = async () => {
//   const response = await axios.get(`${apiURL}/recommendations`);
//   return response.data;
// };

// 임시
const GetMaps = () => {
  var maps = [
    {
      title: "노량진 수산시장",
      id: 1,
      x: 37.515374770078076,
      y: 126.94091604229841,
    },
    {
      title: "가락시장",
      id: 2,
      x: 37.493553892431166,
      y: 127.10977834044834,
    },
  ];

  return maps;
};

// const GetMaps = async () => {
//   const response = await axios.get(`${apiURL}/maps`);
//   return response.data;
// };

export { GetRankings, GetRecommendations, GetMaps };
