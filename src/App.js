import styled from "styled-components";
import Contactlist from "./components/Contactlist";
import Conversation from "./components/Conversation";
import welcome_placeholder from './Profile/welcome-placeholder.jpeg'
import { useState } from "react";
const Container = styled.div`
display:flex;
flex-direction:row;
height:100vh;
with:100%

`;

const Placeholder=styled.div`

flex:3;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
font-size:14px;
color:rgba(0,0,0,0.45);
gap:10px;
span{
font-size:32px;
color:#525252;
}
`;

const ChatPlaceholder=styled.img`
width:240px;
height:240px;
border-radius:50%;
object-fit:contain;
`;

const App = () => {


const [selectedChat,setChat]=useState();
    return (
        <Container>
        <Contactlist  setChat={setChat}/>
        {selectedChat ? (<Conversation selectedChat={selectedChat} />) : (<Placeholder >
        
        <ChatPlaceholder src={welcome_placeholder} />
        <span>Keep your phone connected</span>
        whatsapp connects to your to sync messages
        
        </Placeholder>)}
                  
        </Container>
    );
}

export default App;
