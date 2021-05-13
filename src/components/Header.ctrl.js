/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";

// 임시
const GetFishes = () => {
  var fishes = [
    {
      fishCode: 0,
      fishName: "참돔",
      description: "제철시기: 3~5월",
      imageURL: DefaultImage,
    },
    {
      fishCode: 1,
      fishName: "숭어",
      description: "제철시기: 3~5월",
      imageURL: DefaultImage,
    },
    {
      fishCode: 2,
      fishName: "볼락",
      description: "제철시기: 3~5월",
      imageURL: DefaultImage,
    },
  ];

  console.log("getfish");

  return fishes;
};

// const GetFishes = async () => {
//   const response = await axios.get(`${apiURL}/`);
//   return response.data;
// };

export { GetFishes };
