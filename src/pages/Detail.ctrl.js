/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";

const GetFishInfo = (idx) => {
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
  ][idx];

  return fish;
};

// const GetFishInfo = async (idx) => {
//   const response = await axios.get(`${apiURL}/musicList/${idx}`);
//   return response.data;
// };

export { GetFishInfo };
