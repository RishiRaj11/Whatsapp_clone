import React from "react";
import styled from "styled-components";
import selfimg from "../Profile/selfimg.jpg";
import Contacts from "./Contacts";
import {contactList} from "./MockData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1.6;
  width:100%;
`;

const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const SearchBox = styled.div`
  background: #f6f6f6;
  padding: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;


 


const Contactlist = (props) => {
  return (
    <Container>
      <ProfileInfoDiv src="">
        <ProfileImage src={selfimg}></ProfileImage>
      </ProfileInfoDiv>
      <SearchBox>
        <SearchContainer>
          <i class="fa fa-search"></i>
          <SearchInput></SearchInput>
        </SearchContainer>
      </SearchBox>
      {contactList.map((userData)=>(<Contacts userData={userData} setChat={props.setChat} />))}
      
     
    </Container>
  );
};

export default Contactlist;
