import React from 'react';
import styled from 'styled-components';

const ContactItem=styled.div`
display:flex;
flex-diection:row;
width:100%;
border-bottom:1px solid #f2f2f2;
background:white;
cursor:pointer;
:hover{
background:#ebebeb;
}
`;

const ContactsImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin:4px 12px;
`;

const ContactInfo=styled.div`
display:flex;
flex-direction:column;
width:100%;
margin:8px 12px;
`;

const ContactName=styled.span`
width:100%;
font-size:20px;
color:black;
`;

const MessageText=styled.span`
width:100%;
font-size:14px;
color:rgba(0,0,0,0.8);
`;

const MessageTime=styled.span`
font-size:12px;
margin-right:10px;
color:rgba(0,0,0,0.45);
white-space:nowrap;
margin:8px 12px;
`;
const Contacts = (props) => {
    return (
        <ContactItem onClick={()=> props.setChat(props.userData)}>
        <ContactsImage src={props.userData.profilePic}></ContactsImage>
          <ContactInfo>
          <ContactName>{props.userData.name}</ContactName>
          <MessageText>{props.userData.lastText}</MessageText>
          </ContactInfo>  
          <MessageTime>{props.userData.lastTextTime}</MessageTime>
        </ContactItem>
    )
}

export default Contacts;
