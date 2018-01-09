
import React from 'react';
import PropTypes from 'prop-types';


import MessageList from '../../common/MessageList/MessageList.container';
import Conversation from '../../common/Conversation/Conversation';
import Modal from '../../layout/Modal/Modal';
import MissionEditor from '../../common/MissionEditor/MissionEditor.container';
import InboxViewer from '../../slices/InboxViewer/InboxViewer.container';

import {
  StyledInbox,
  StyledMessages,
  StyledConversation,
} from './Inbox.styles';



const App = () => (
  <div>
    <Inbox />
    <Modal show={isCreatingMission}>
      <MissionEditor
        onCancel={this.resetCreateMission}
        onSubmit={this.resetCreateMission}
      />
    </Modal>
    <Modal
      show={mediaViewerIsOpen}
      hasLeftClose
      hasCloseButton
      onHide={this.onPicturesHide}
    >
      <InboxViewer />
    </Modal>
  </div>
);

export default App;
