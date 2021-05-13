import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const Header = () => {
    return (
        <Container>
            <SearchBar placeholder="어종을 검색하세요." />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90px;
    background-color: skyblue;
    align-content: center;
    display: flex;
    justify-content: center;
    position: relative;
    
    ::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 10px;
        border-bottom: 5px solid white;
        background-size: 20px 40px;
        background-image:
            radial-gradient(circle at 10px -15px, transparent 20px, white 21px);
    }

    ::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 15px;
        border-bottom: 5px solid white;
        background-size: 40px 40px;
        background-image:
            radial-gradient(circle at 10px 26px, white 20px, transparent 21px);
    }
`

const SearchBar = styled(Input)`
    width: 50vw;
    height: 40px;
    border-radius: 5px;
    border-style: solid;
    font-size: 20px;
    padding: 0px 10px 0px 10px;
    margin-top: 17px;

    :focus {
        outline: none;
    }
`

export default Header;