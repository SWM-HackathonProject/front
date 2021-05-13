import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "antd";

const Header = () => {
    return (
        <Container>
            <LogoArea>
                <Logo src="https://swmaestro.org/static/sw/images/logo_w.png" />
            </LogoArea>
            <SearchBar placeholder="어종을 검색하세요." />
            <LinkArea>
                <LinkText to='/'>홈</LinkText>
            </LinkArea>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90px;
    background-color: skyblue;
    align-content: space-around;
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

const LogoArea = styled.div`
    padding: 18px 50px 0px 18px;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`

const Logo = styled.img`
`

const SearchBar = styled(Input)`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border-style: solid;
    font-size: 20px;
    padding: 0px 10px 0px 10px;
    margin-top: 17px;

    :focus {
        outline: none;
    }

    @media only screen and (max-width: 1000px) {
        width: 80%;
    }
`

const LinkArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 25px;
    margin: 25px 100px 0px 100px;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`

const LinkText = styled(Link)`
    color: white;
    font-weight: bold;
`

export default Header;