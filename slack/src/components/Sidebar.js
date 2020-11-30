import React, { useState, useEffect } from 'react';
import {
  InsertComment,
  FiberManualRecord,
  Create,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from '@material-ui/icons';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import db from '../firebase';

function Sidebar() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    console.log('here');
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Will's Channel</h2>
          <h3>
            <FiberManualRecord />
            Will Wang
          </h3>
        </div>
        <Create />
      </div>

      <SidebarOption Icon={InsertComment} title='Thread' />
      <SidebarOption Icon={Inbox} title='Mentions & reactions' />
      <SidebarOption Icon={Drafts} title='Saved items' />
      <SidebarOption Icon={BookmarkBorder} title='Channel browser' />
      <SidebarOption Icon={PeopleAlt} title='People & user groups' />
      <SidebarOption Icon={Apps} title='Apps' />
      <SidebarOption Icon={FileCopy} title='File browser' />
      <SidebarOption Icon={ExpandLess} title='Show less' />
      <hr />
      <SidebarOption Icon={ExpandMore} title='Channels' />
      <SidebarOption Icon={Add} title='Add Channel' addChannelOptions='' />
      {/* connect to database get all the channels */}
      <hr />
      {channels.map((channel) => (
        <SidebarOption Icon={Add} title={channel.name} />
      ))}
    </div>
  );
}

export default Sidebar;
