/** @format */

import React, { useState, Suspense, useMemo } from "react";
import { useAsync } from "react-async";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Input } from "antd";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";

import AutoComplete from "./AutoComplete";
import { GetAutocompleteList } from "./AutoComplete.ctrl";
import { GetFishes } from "./Header.ctrl";

const Header = () => {
  const [focusInput, setFocusInput] = useState(false);
  const [text, setText] = useState("");
  const history = useHistory();
  const {
    isLoading,
    data: fishList,
    error,
    reload,
  } = useAsync({
    promiseFn: GetFishes,
  });

  if (isLoading) return Loading();
  if (error) return Err();

  const onFocusInput = () => {
    setFocusInput(true);
  };

  const onBlurInput = () => {
    setFocusInput(false);
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onKeyPress = (event) => {
    if (text) {
      const autoCompleteList = GetAutocompleteList(fishList, text);
      if (event.key == "Enter" && autoCompleteList.length) {
        window.location.replace(`/detail/${autoCompleteList[0].fishCode}`);
      }
    }
  };

  return (
    <Container>
      <LogoArea>
        <Logo src='https://swmaestro.org/static/sw/images/logo_w.png' />
      </LogoArea>
      <SearchBarContainer>
        <SearchBar
          placeholder='어종을 검색하세요.'
          onChange={onTextChange}
          onKeyPress={onKeyPress}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
        />
        {focusInput ? (
          <AbsoluteContainer>
            <AutoComplete text={text} fishList={fishList} />
          </AbsoluteContainer>
        ) : null}
      </SearchBarContainer>
      <MDBDropdown>
        <LinkArea>
          <MDBDropdownToggle tag='a' className='nav-link'>
            <LinkText to='/'>홈</LinkText>
          </MDBDropdownToggle>
        </LinkArea>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            <MDBDropdownLink href='/about'>About</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href='https://github.com/SWM-HackathonProject'>
              Git hub
            </MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </Container>
  );
};

function Loading() {
  return <div>로딩중...</div>;
}

function Err() {
  return <div>에러가 발생했습니다.</div>;
}

const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: skyblue;
  align-content: space-around;
  display: flex;
  justify-content: center;
  position: relative;
  background-image: url("https://i.pinimg.com/736x/da/90/2d/da902defe491c20a8ebde6c7207276fd.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    border-bottom: 5px solid white;
    background-size: 20px 40px;
    background-image: radial-gradient(
      circle at 10px -15px,
      transparent 20px,
      white 21px
    );
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
    background-image: radial-gradient(
      circle at 10px 26px,
      white 20px,
      transparent 21px
    );
  }
`;

const LogoArea = styled.div`
  padding: 18px 50px 0px 18px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Logo = styled.img``;

const SearchBarContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  position: relative;
`;

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
`;

const LinkArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin: 25px 100px 0px 100px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const LinkText = styled(Link)`
  color: white;
  font-weight: bold;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  z-index: 2;
  background-color: cyan;
  top: 60px;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export default Header;
