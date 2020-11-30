import React from 'react';
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
} from '@material-ui/icons';
import SidebarOption from './SidebarOption';
import './Sidebar.css';

function Sidebar() {
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
    </div>
  );
}

export default Sidebar;
