import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';
import $ from 'jquery';

import CritiqueNotSignedIn from './CritiqueNotSignedIn';
import CritiqueImage from './CritiqueImage';
import { CommentFormContainer } from './CommentForm';

export const Critique = React.createClass({

  componentDidMount: function() {
    this.props.getRandomImageFromServer();
  },

  render: function() {
    return <div>
        { this.props.signedIn ?
          <div>
            <CommentFormContainer />
            <CritiqueImage image={this.props.imageForCritique} />
          </div> :
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
