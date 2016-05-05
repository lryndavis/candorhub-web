import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../action_creators';

import CritiqueNotSignedIn from './CritiqueNotSignedIn';
import CritiqueImage from './CritiqueImage';

export const Critique = React.createClass({

  render: function() {
    return <div>
        { this.props.signedIn ?
          <CritiqueImage image={this.props.image} /> :
          <CritiqueNotSignedIn />
        }
      </div>;
    }
});

function mapStateToProps(state) {
  return {
    signedIn: state.get('signedIn')
  };
}

export const CritiqueContainer = connect(
  mapStateToProps,
  actionCreators
)(Critique);
