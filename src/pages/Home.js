/** @format */

import React from "react";
import styled from "styled-components";

import Card from "../components/Card";
import MapCard from "../components/MapCard";
import ImageCard from "../components/ImageCard";

import { GetRankings, GetRecommendations, GetMaps } from "./Home.ctrl";

const Home = () => {
  let recommendDataList = GetRecommendations();
  let rankingDataList = GetRankings();
  let mapDataList = GetMaps();

  const recommendList = recommendDataList.map((data) => (
    <Container>
      <ImageCard src={data.imageURL} title={data.fishName}>
        {data.description}
      </ImageCard>
      <HeightSpace />
    </Container>
  ));

  const rankingList = rankingDataList.map((data) => (
    <Container>
      <Card title={data.fishName} children={data.price + "원/kg"} />
      <HeightSpace />
    </Container>
  ));

  const mapList = mapDataList.map((data) => (
    <Container>
      <MapCard title={data.title} id={data.id} x={data.x} y={data.y} />
      <HeightSpace />
    </Container>
  ));

  return (
    <Container>
      <ContentContainer>
        <ColumnContainer>
          <CategoryContainer title='이달의 생선!'>
            {recommendList}
          </CategoryContainer>
        </ColumnContainer>
        <WidthSpace />
        <ColumnContainer>
          <CategoryContainer title='수산시장 위치?'>
            {mapList}
          </CategoryContainer>
        </ColumnContainer>
        <WidthSpace />
        <ColumnContainer>
          <CategoryContainer title='인기 어종 시세'>
            {rankingList}
          </CategoryContainer>
        </ColumnContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div``;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ColumnContainer = styled.div`
  margin-top: 30px;
  width: 30vw;

  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;

const CategoryContainer = styled(Card)``;

const WidthSpace = styled.div`
  width: 2vw;
`;

const HeightSpace = styled.div`
  height: 1vw;
`;

export default Home;
