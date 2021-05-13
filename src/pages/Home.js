import React from "react";
import styled from "styled-components";

import Card from "../components/Card";
import ImageCard from "../components/ImageCard";
import DefaultImage from "../images/fish.jpg";

const Home = () => {
    let dataList = [
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

    const imageCardList = dataList.map((data) =>
        <Container>
            <ImageCard src={data.src} title={data.name}>
                {data.text}
            </ImageCard>
            <HeightSpace/>
        </Container>
    );

    return (
        <Container>
            <ContentContainer>
                <ColumnContainer>
                    <CategoryContainer title="이달의 생선!">
                        {imageCardList}
                    </CategoryContainer>
                </ColumnContainer>
                <WidthSpace/>
                <ColumnContainer >
                    <CategoryContainer title="이달의 생선!">

                    </CategoryContainer>
                </ColumnContainer>
                <WidthSpace/>
                <ColumnContainer>
                    <CategoryContainer title="이달의 생선!">

                    </CategoryContainer>
                </ColumnContainer>
            </ContentContainer>
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