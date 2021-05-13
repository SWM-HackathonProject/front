/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";
import axios from "axios";

const GetFishInfo = async ({ fishCode }) => {
  const response = await axios.get(`${apiURL}/fishImg/${fishCode}.jpeg`);
  return response.data;
};

export { GetFishInfo };
