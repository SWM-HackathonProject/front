/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";
import axios from "axios";

const GetFishInfo = async ({ fishCode }) => {
  const response = await axios.get(`${apiURL}/fishes/${fishCode}`);
  return response.data;
};

export { GetFishInfo };
