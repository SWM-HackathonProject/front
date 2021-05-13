import React from "react";
import styled from "styled-components";

import Card from "../components/Card";

const Home = () => {
    return (
        <Container>
            <ContentContainer>
                <ColumnContainer>
                    <CategoryContainer title="이달의 생선!">
                        <CardContainer title="광어">
                            saddasdas
                        </CardContainer>
                    </CategoryContainer>
                </ColumnContainer>
                <Space/>
                <ColumnContainer >
                    <CategoryContainer title="이달의 생선!">

                    </CategoryContainer>
                </ColumnContainer>
                <Space />
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
`

const ColumnContainer = styled.div`
    margin-top: 30px;
    width: 30vw;
`

const CategoryContainer = styled(Card)``

const CardContainer = styled(Card)`
`

const Space = styled.div`
    width: 2vw;
`

export default Home;
