/** @format */

import React, { useMemo } from "react";
import styled from "styled-components";

import { GetAutocompleteList } from "./AutoComplete.ctrl";
import { apiURL } from "../settings";

const AutoComplete = ({ text, fishList }) => {
  return GetAutocompleteList(fishList, text).map((fish) => (
    <Container>{fish.fishName}</Container>
  ));
};

const Container = styled.div`
  width: 100%;
  height: 100px;
`;

export default AutoComplete;
