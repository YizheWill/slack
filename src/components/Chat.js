import React, { useEffect, useState } from 'react';
import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import Message from './Message';
import db from '../firebase';
import './Chat.css';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          console.log('docs', snapshot.docs);
          setRoomMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);
  console.log('details', roomDetails);
  console.log('messages', roomMessages);
  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__headerLeft'>
          <h4 className='chat__channelName'>
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className='chat__headerRight'>
          <p>
            <InfoOutlined className='icon' />
            Details
          </p>
        </div>
      </div>
      <div className='chat__messages'>
        {roomMessages?.map(({ message, timestamp, user, userImage }) => {
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />;
        })}
      </div>
    </div>
  );
}

export default Chat;
