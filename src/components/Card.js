import React from "react"
import styled from "styled-components"

const Card = ({ title, children }) => {
    return (
        <CardContainer>
            <CardHeader>
                <Title>
                    {title}
                </Title>
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    height: 100%;
    border-radius: 5px;
    border: 1px solid #f0f0f0;
    padding: 10px 5px 10px 5px;
`;

const CardHeader = styled.div`
    padding-bottom: 5px;
    border-bottom: 1px solid #f0f0f0;
    color: rgba(0,0,0,.85);
`;

const CardBody = styled.div`
    margin-top: 10px;
`;

const Title = styled.div`
    font-weight: bold;
`;


export default Card;