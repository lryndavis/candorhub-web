import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageDehaze from 'material-ui/svg-icons/image/dehaze';
import UploadFormModal from './UploadFormModal';

const contentClearStyles = {
  marginLeft: 250,
  marginTop: 10,
};

const burgerStyles = {
  marginRight: 750,
};

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() { this.setState({open: !this.state.open}); }

  handleClose() { this.setState({open: false}); }

  render() {
    return (
      <div>
        <ImageDehaze style={burgerStyles} onClick={this.handleToggle} />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <ContentClear style={contentClearStyles} onClick={this.handleClose}/>
          <MenuItem a href="/">Home</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
          <MenuItem>
            <UploadFormModal />
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
