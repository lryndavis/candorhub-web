import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import ContentClear from 'material-ui/svg-icons/content/clear';
import {SignInContainer} from './SignIn';
import MenuItem from 'material-ui/MenuItem';

const customContentStyle = {
  maxWidth: '400px',
};

export default class SignInModal extends React.Component {

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
      <ContentClear onClick={this.handleClose} />
    ];

    return(
      <div className="form__sign-in-container">
        <button className="form__sign-in-button" onClick={this.handleOpen}>Sign In</button>
        <Dialog
            actions={actions}
            modal={true}
            contentStyle={customContentStyle}
            autoScrollBodyContent={true}
            open={this.state.open}
          >
            <SignInContainer />
        </Dialog>
      </div>
    );
  }
}
