
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageDehaze from 'material-ui/svg-icons/image/dehaze';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Gallery from '../gallery/Gallery';
import GalleryView from '../gallery/GalleryView';
import UploadFormModal from './UploadFormModal';


const contentClearStyles = {
  marginLeft: 250,
  marginTop: 10,
};

injectTapEventPlugin();

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () =>  this.setState({open: false});

  render() {
    return (
      <div>
        <div className="dashboard-header">
          <ImageDehaze onClick={this.handleToggle} />
          <span className="main-logo-dashboard">candorhub</span>
          <span className="logout-button">Logout</span>
        </div>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <ContentClear style={contentClearStyles} onClick={this.handleClose}/>
          <MenuItem a href="/">Home</MenuItem>
          <MenuItem>
            <Link ref="gallery"
              className="gallery-link"
              to={'/gallery'}>
              Gallery
            </Link>
          </MenuItem>
          <MenuItem>
            <UploadFormModal />
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
