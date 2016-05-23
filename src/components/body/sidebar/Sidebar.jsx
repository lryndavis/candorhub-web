import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageDehaze from 'material-ui/svg-icons/image/dehaze';
import React from 'react';
import {SignOutButton} from 'redux-auth';
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
          <span className="dashboard-header__logo">candorhub</span>
          <SignOutButton icon={''}/>
        </div>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <ContentClear style={contentClearStyles} onClick={this.handleClose}/>
          <Link className="sidebar__menu-link" ref="home"
            className="sidebar__menu-link"
            to={'/dashboard'} >
            Home
          </Link>
          <Link ref="gallery"
            className="sidebar__menu-link"
            to={'/gallery'} >
            Gallery
          </Link>
          <UploadFormModal />
        </Drawer>
      </div>
    );
  }
}
