import React from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';

function Chat() {
  const roomId = useParams();
  console.log(roomId);
  return <div className='chat'>Hey</div>;
}

export default Chat;
