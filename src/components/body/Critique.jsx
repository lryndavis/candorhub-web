import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';

import CritiqueNotSignedIn from './CritiqueNotSignedIn';
import CritiqueImage from './CritiqueImage';

import $ from 'jquery';

export const Critique = React.createClass({

  getRandomImageFromServer: function() {
    $.ajax({
      url: this.props.randomImageEndpoint,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data.images[0]);
        this.props.setState({imageForCritique: data.images[0]});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.randomImageEndpoint, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.getRandomImageFromServer();
  },

  render: function() {
    return <div>
        { this.props.signedIn ?
          <CritiqueImage image={this.props.imageForCritique} /> :
          <CritiqueNotSignedIn />
        }
      </div>;
    }
});

function mapStateToProps(state) {
  return {
    signedIn: state.get('signedIn'),
    imageForCritique: state.get('imageForCritique')
  };
}

export const CritiqueContainer = connect(
  mapStateToProps,
  actionCreators
)(Critique);
