import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

import ContentClear from 'material-ui/svg-icons/content/clear';
import {UploadFormContainer} from './UploadForm';
import MenuItem from 'material-ui/MenuItem';


 const customContentStyle = {
   maxWidth: '350px',
   minWidth: '350px'
 };

export default class DialogExampleModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() { this.setState({open: !this.state.open}); }

  handleClose() { this.setState({open: false}); }

  render() {
    const actions = [
      <ContentClear
        className="upload__submit-button"
        label="CLOSE"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <p className="sidebar__menu-link" onClick={this.handleOpen}>Upload Artwork
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
          open={this.state.open}
        >
          <UploadFormContainer
            close={this.handleClose} />
        </Dialog>
      </p>
    );
  }
}
