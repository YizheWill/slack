import React from 'react';

function Message({ message, timestamp, user, userImage }) {
  console.log('message', message);
  console.log('user', user);
  console.log('timestamp', timestamp);
  console.log('userImage', userImage);
  return (
    <div className='message'>
      <img src={userImage} alt='user profile' />
      <div className='message__info'>
        <h4>
          {user} {timestamp}...
        </h4>
        <p className='message'>message</p>
      </div>
    </div>
  );
}

export default Message;
