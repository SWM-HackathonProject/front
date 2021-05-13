/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";
import axios from "axios";

const GetFishes = async () => {
  const response = await axios.get(`${apiURL}/fishes`);
  return response.data;
};

export { GetFishes };
