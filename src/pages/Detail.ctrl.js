/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";

// 임시
const GetFishInfo = (fishCode) => {
  var fish = [
    {
      fishCode: 0,
      fishName: "참돔",
      avgPrice: [
        {
          yearMonth: 202101,
          price: 10000,
        },
        {
          yearMonth: 202101,
          price: 10000,
        },
        ,
        {
          yearMonth: 202103,
          price: 10000,
        },
        ,
        {
          yearMonth: 202104,
          price: 10000,
        },
      ],
      imgURL: DefaultImage,
      description: "제철시기: 3~5월",
      tip: "고르는 팁",
    },
    {
      fishCode: 1,
      fishName: "숭어",
      avgPrice: [
        {
          yearMonth: 202101,
          price: 10000,
        },
        {
          yearMonth: 202101,
          price: 10000,
        },
        ,
        {
          yearMonth: 202103,
          price: 10000,
        },
        ,
        {
          yearMonth: 202104,
          price: 10000,
        },
      ],
      imgURL: DefaultImage,
      description: "제철시기: 3~5월",
      tip: "고르는 팁",
    },
    {
      fishCode: 2,
      fishName: "볼락",
      avgPrice: [
        {
          yearMonth: 202101,
          price: 10000,
        },
        {
          yearMonth: 202101,
          price: 10000,
        },
        ,
        {
          yearMonth: 202103,
          price: 10000,
        },
        ,
        {
          yearMonth: 202104,
          price: 10000,
        },
      ],
      imgURL: DefaultImage,
      description: "제철시기: 3~5월",
      tip: "고르는 팁",
    },
  ][fishCode];

  return fish;
};

// const GetFishInfo = async (fishCode) => {
//   const response = await axios.get(`${apiURL}/detail/${fishCode}`);
//   return response.data;
// };

export { GetFishInfo };
