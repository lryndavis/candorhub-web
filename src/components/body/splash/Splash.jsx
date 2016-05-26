import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as actionCreators from '../../../action_creators';
import {SignInContainer} from './SignIn';
import SignUp from './SignUp';

const critiqueCopy = "Share your insights and opinions about works of art, guided by thought-provoking questions. Good candorhub karma means sharing a critique before expecting others to critique your work.";

const critiqueImage = require("./gear.png")

const learnCopy = "Upload your own images and get meaningful, constructive feedback from fellow artists, who will always be able to see your work at full size and full resolution.";

const learnImage = require('./antikythera.png');

const growCopy = "Share works in progress, sketches, and drafts and get feedback that will enhance the finished project.";

const growImage = require('./astrolabe.png');

export const Splash = React.createClass({

  getInitialState:function() {
    return { signUpShow: true };
    return { signInShow: false };
  },

  onHandleClick: function() {
    this.setState({ signUpShow: !this.state.signUpShow });
    this.setState({ signInShow: !this.state.signInShow });
  },

  componentWillUpdate(nextProps) {
    //redirect to dashboard on successful sign-in
    if (nextProps.signedIn) {
      browserHistory.push("/dashboard");
    }
  },

  render: function() {
    return (
      <div className="splash">
        <h1 className="splash__logo">candorhub</h1>
        <p className="splash__tagline">Thought Provoking Critique</p>
          { this.state.signUpShow ? <SignUp /> : null }
          { this.state.signUpShow ? <h3 className="form__member-header" onClick={ this.onHandleClick }>Already a member?</h3> : null }
        <ReactCSSTransitionGroup
          transitionName="formTransition"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          { this.state.signInShow ? <SignInContainer /> : null }
        </ReactCSSTransitionGroup>
        <h4>how candorhub works</h4>
        <h5>critique</h5>
        <img src={critiqueImage} alt="Gear Diagram" />
        <p>{critiqueCopy}</p>
        <h5>learn</h5>
        <p>{learnCopy}</p>
        <img src={learnImage} alt="Antikythera Mechanism Diagram"/>
        <h5>grow</h5>
        <img src={growImage} alt="Astrolabe Diagram" />
        <p>{growCopy}</p>
        <h5>about</h5>
        <p>Candorhub is a creation of Lauryn Davis, Jeffrey Ruder, Riley Starnes, and Patrick Sullivan, interns at DevelopmentNow. <a href="https://developmentnow.com/" target="_blank">DevelopmentNow</a> is an award-winning digital product solutions agency located in the Pacific Northwest.</p>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    signedIn: state.auth.getIn(["user", "isSignedIn"])
  };
}

export const SplashContainer = connect(
  mapStateToProps,
  actionCreators
)(Splash);
