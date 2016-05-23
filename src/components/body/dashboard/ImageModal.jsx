import Dialog from 'material-ui/Dialog';
import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ContentClear from 'material-ui/svg-icons/content/clear';
import injectTapEventPlugin from 'react-tap-event-plugin';


 const customContentStyle = {
   width: '80%',
   maxWidth: 'none'
 };

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
        <span className="form__image-title">{this.props.image.title} /</span>
        <span className="form__user-name">{this.props.username}</span>
        <img className="critique-image__image" src={this.props.image.image} alt={this.props.image.title} onClick={this.handleOpen} />
        <p className="form__artist-notes">Artist's Notes: </p>
        <p className="form__image-description">{this.props.image.description}</p>
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
          open={this.state.open}
        >
          <img className="modal-image" src={this.props.image.image} />
        </Dialog>
      </div>
    );
  }
}
