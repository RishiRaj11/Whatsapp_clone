import React,{useState} from "react";
import styled from "styled-components";
import Picker from 'emoji-picker-react';
import { SearchContainer, SearchInput } from "./Contactlist";
import emoji from "../Profile/emoji.png";
import {messagesList}  from './MockData';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 3;
  background: #f0e3e7;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 4px 12px;
`;

const ContactName = styled.span`
  width: 100%;
  font-size: 20px;
  color: black;
`;

const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  alogn-items: center;
  bottom: 0px;
`;

const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  opacity: 0.6;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 15px;
`;

const Message = styled.div`
  background: ${(props) => ( props.isYours ? "#daf8cb" : "white")};
  max-width: 50%;
  
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
`;

const Conversation = (props) => {

const [text,setText] = useState('');
const [pickerVisible,togglePicker]=useState(false);
const [messageList,setMessageList]=useState(messagesList);

const onEmojiClick=(event,emojiObj)=>{
setText(text+emojiObj.emoji);
togglePicker(false);
};

const onEnterPress=(event)=>{

if(event.key==="Enter"){
const messages=[...messageList];
messages.push(
{
id:0,
messageType:"Text",
text,
senderID:0,
addedOn: "12:02 PM",
}
);
setMessageList(messages);
setText('');
};

}
  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src={props.selectedChat.profilePic}></ProfileImage>
        <ContactName>{props.selectedChat.name}</ContactName>
      </ProfileHeader>
      <MessageContainer>
      {messageList.map((messageData)=>(
      <MessageDiv isYours={messageData.senderID===0}>
          <Message isYours={messageData.senderID===0}>{messageData.text}</Message>
        </MessageDiv>
      ))}
      </MessageContainer>
      <ChatBox>
        <SearchContainer>
       {( pickerVisible && <Picker 
        pickerStyle={{position:"absolute",bottom:"60px"}}
        onEmojiClick={onEmojiClick} />)}
          <EmojiImage src={emoji}  onClick={()=>togglePicker(!pickerVisible)}></EmojiImage>
          <SearchInput placeholder="Type a message" 
          onKeyDown={onEnterPress}
          value={text} onChange={(e)=>setText(e.target.value)}></SearchInput>
        </SearchContainer>
      </ChatBox>
    </Container>
  );
};

export default Conversation;
