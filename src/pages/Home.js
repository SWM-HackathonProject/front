import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

const Home = () => {
    return (
        <Container>
            <Header />
            <ContentContainer>
                <ColumnContainer>
                    test
                </ColumnContainer>
                <ColumnContainer>
                    test
                </ColumnContainer>
                <ColumnContainer>
                    test
                </ColumnContainer>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div``

const ContentContainer = styled.div`
    display: flex;
`

const ColumnContainer = styled.div`
    width: 30vw;
`

export default Home;
