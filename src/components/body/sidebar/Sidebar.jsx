import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageDehaze from 'material-ui/svg-icons/image/dehaze';
import React from 'react';
import {SignOutButton} from 'redux-auth-candorhub';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Gallery from '../gallery/Gallery';
import GalleryView from '../gallery/GalleryView';
import UploadFormModal from './UploadFormModal';


const contentClearStyles = {
  marginLeft: 250,
  marginTop: 10,
  fill: '#fff'
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
          <span className="dashboard__logo">candorhub</span>
          <a className="sidebar__link-signout" href="/">Sign Out</a>
          <span className="sidebar-user"> {this.props.username}</span>
        </div>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}>

          <div className="sidebar__main-container">
            <ContentClear style={contentClearStyles} onClick={this.handleClose}/>
            <h2 className="sidebar-welcome">Welcome, <span className="sidebar-username">{this.props.username}</span></h2>
            <Link className="sidebar__menu-link" ref="home"
              className="sidebar__menu-link"
              to={'/dashboard'} >
              Critique
            </Link>
            <Link ref="gallery"
              className="sidebar__menu-link"
              to={'/gallery'} >
              Browse Artwork
            </Link>
            <Link ref="usergallery"
              className="sidebar__menu-link"
              to={'/usergallery'}>
              Your Artwork
            </Link>
            <UploadFormModal />
          </div>

        </Drawer>
      </div>
    );
  }
}
