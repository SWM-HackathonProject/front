/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";

// 임시
const GetFishInfo = (fishCode) => {
  var fish = [
    {
      src: DefaultImage,
      name: "참돔",
      text: "제철시기: 3~5월",
    },
    {
      src: DefaultImage,
      name: "숭어",
      text: "제철시기: 3~5월",
    },
    {
      src: DefaultImage,
      name: "볼락",
      text: "제철시기: 3~5월",
    },
  ][fishCode];

  return fish;
};

// const GetFishInfo = async (fishCode) => {
//   const response = await axios.get(`${apiURL}/detail/${fishCode}`);
//   return response.data;
// };

export { GetFishInfo };
