import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {UploadFormContainer} from './UploadForm';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */

 const customContentStyle = {
   width: '100%',
   maxWidth: 'none',
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
        className="sign-up-button"
        label="CLOSE"
        primary={true}
        onClick={this.handleClose}>CLOSE
      </button>
    ];

    return (
      <div>
        <RaisedButton label="Upload" onClick={this.handleOpen} />
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
      </div>
    );
  }
}
