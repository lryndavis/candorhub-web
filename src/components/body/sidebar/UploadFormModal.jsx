import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

import {UploadFormContainer} from './UploadForm';
import MenuItem from 'material-ui/MenuItem';


 const customContentStyle = {
   maxWidth: '900px',
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
      <button
        className="button"
        label="CLOSE"
        primary={true}
        onClick={this.handleClose}>CLOSE
      </button>
    ];

    return (
      <p className="sidebar__menu-link" onClick={this.handleOpen}>Upload
        <Dialog
          title="Upload Your Work!"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
          open={this.state.open}
        >
          <UploadFormContainer />
        </Dialog>
      </p>
    );
  }
}
