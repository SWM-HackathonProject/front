/** @format */

import DefaultImage from "../images/fish.jpg";
import { apiURL } from "../settings";

// 임시
const GetAutocompleteList = (fishList, str) => {
  if (!fishList) return [];

  str = str.trim();

  return fishList.filter((fish) => fish.name.includes(str));
};

export { GetAutocompleteList };
