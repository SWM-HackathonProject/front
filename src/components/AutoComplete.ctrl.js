/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";

// 임시
const GetList = () => {
  var fishes = [
    {
      fishCode: 0,
      src: DefaultImage,
      name: "참돔",
      text: "제철시기: 3~5월",
    },
    {
      fishCode: 1,
      src: DefaultImage,
      name: "숭어",
      text: "제철시기: 3~5월",
    },
    {
      fishCode: 2,
      src: DefaultImage,
      name: "볼락",
      text: "제철시기: 3~5월",
    },
  ];

  return fishes.filter((fish) => fish.name.includes(str));
};

export { GetList };
