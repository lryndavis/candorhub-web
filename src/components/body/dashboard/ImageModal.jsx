import Dialog from 'material-ui/Dialog';
import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ContentClear from 'material-ui/svg-icons/content/clear';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router';

const customContentStyle = {
 width: '80%',
 maxWidth: 'none'
};

const getUsername = function(image) {
  return image.user.username || "unknown user";
}

export default class ImageModal extends React.Component {

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
      <ContentClear onClick={this.handleClose}/>
    ];

    return (
      <div>
        <span className="dashboard__image-header">
          <span className="dashboard__image-title">{this.props.image.title} /</span>
          <Link to={`/profilegallery/${this.props.image.user.id}`} params={{id: this.props.image.user.id}}>
            <span className="dashboard__user-name">By {this.props.image.user.username}</span>
          </Link>
        </span>
        <div className="image-container">
          <img className="dashboard__image-main" src={this.props.image.image} alt={this.props.image.title} onClick={this.handleOpen} />
          <div className="dashboard__image-info">
            <p className="dashboard__artist-notes">Artist's Notes: </p>
            <p className="dashboard__image-description">{this.props.image.description}</p>
          </div>
        </div>
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
          open={this.state.open}
        >
          <img className="dashboard__modal-image" src={this.props.image.image} />
        </Dialog>
      </div>
    );
  }
}
