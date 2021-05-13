import React from "react";
import styled from "styled-components";

import Card from "../components/Card";
import MapCard from "../components/MapCard";
import ImageCard from "../components/ImageCard";
import DefaultImage from "../images/fish.jpg";

const Home = () => {
    let recommendDataList = [
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
    ];

    let mapDataList = [
        {
            title : "노량진 수산시장",
            id : 1,
            x: 37.515374770078076,
            y: 126.94091604229841,
        },
        {
            title : "가락시장",
            id : 2,
            x: 37.493553892431166,
            y: 127.10977834044834,
        },
    ];

    let rankingDataList = [
        {
            name: "참돔",
            price: 40000,
        },
        {
            name: "넙치",
            price: 30000,
        },
        {
            name: "볼락",
            price: 20000,
        },
    ];

    const recommendList = recommendDataList.map((data) =>
        <Container>
            <ImageCard src={data.src} title={data.name}>
                {data.text}
            </ImageCard>
            <HeightSpace/>
        </Container>
    );

    const mapList = mapDataList.map((data) =>
        <Container>
            <MapCard title={data.title} id={data.id} x={data.x} y={data.y}/>
            <HeightSpace/>
        </Container>
    );

    const rankingList = rankingDataList.map((data) =>
        <Container>
            <Card title={data.name} children={data.price + '원/kg'}/>
            <HeightSpace/>
        </Container>
    );

    return (
        <Container>
            <ContentContainer>
                <ColumnContainer>
                    <CategoryContainer title="이달의 생선!">
                        {recommendList}
                    </CategoryContainer>
                </ColumnContainer>
                <WidthSpace/>
                <ColumnContainer >
                    <CategoryContainer title="수산시장">
                        {mapList}
                    </CategoryContainer>
                </ColumnContainer>
                <WidthSpace/>
                <ColumnContainer>
                    <CategoryContainer title="인기 어종 시세">
                        {rankingList}
                    </CategoryContainer>
                </ColumnContainer>
            </ContentContainer>
            <HeightSpace/>
        </Container>
    )
}

const Container = styled.div`
`

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

const ColumnContainer = styled.div`
    margin-top: 30px;
    width: 30vw;

    @media only screen and (max-width: 1000px) {
        width: 90%;
    }
`

const CategoryContainer = styled(Card)`
`

const WidthSpace = styled.div`
    width: 2vw;
`

const HeightSpace = styled.div`
    height: 1vw;
`

export default Home;