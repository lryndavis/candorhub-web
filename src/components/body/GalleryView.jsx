import React from 'react';
import { Router, Route, Link } from 'react-router';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';
import $ from 'jquery';
import GalleryImage from './GalleryImage';

export const GalleryView = React.createClass({

componentDidMount: function() {
  var id = this.props.params.id;
  this.props.getImageFromServerById(id);
},

  render() {
    return (
      <div>
        <h1>Test</h1>
        <GalleryImage image={this.props.imageById} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    imageById: state.imageById
  };
}

export const GalleryViewContainer = connect(
  mapStateToProps,
  actionCreators
)(GalleryView);
