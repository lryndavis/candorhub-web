import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {Link, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Scroll from 'react-scroll';

import * as actionCreators from '../../../action_creators';
import {SignInContainer} from './SignIn';
import SignUp from './SignUp';

const critiqueCopy = "Share your insights and opinions about works of art, guided by thought-provoking questions. Good candorhub karma means sharing a critique before expecting others to critique your work.";

const critiqueImage = require("./gear.png")

const learnCopy = "Upload your own images and get meaningful, constructive feedback from fellow artists, who will always be able to see your work at full size and full resolution.";

const learnImage = require('./antikythera.png');

const growCopy = "Share works in progress, sketches, and drafts and get feedback that will enhance the finished project.";

const growImage = require('./astrolabe.png');

const arrowDown = require('./arrowDown.png');

const Element = Scroll.Element;

const Events  = Scroll.Events;

const scroll  = Scroll.animateScroll;


export const Splash = React.createClass({

//toggle log in form show
  getInitialState:function() {
    return { signUpShow: true };
    return { signInShow: false };
  },

  onHandleClick: function() {
    this.setState({ signUpShow: !this.state.signUpShow });
    this.setState({ signInShow: !this.state.signInShow });
  },

//toggle log in form show
  componentWillUpdate(nextProps) {
    //redirect to dashboard on successful sign-in
    if (nextProps.signedIn) {
      hashHistory.push("/dashboard");
    }
  },

//react scroll functions
  componentDidMount: function() {
    Events.scrollEvent.register('begin', function(to, element) {
    });

    Events.scrollEvent.register('end', function(to, element) {
    });
  },

  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },

  scrollToTop: function() {
    scroll.scrollToTop();
  },

  scrollToBottom: function() {
    scroll.scrollToBottom();
  },


  render: function() {
    return (
      <div className="splash">
        <div className="splash__header">
          <h1 className="splash__logo">candorhub</h1>
          { this.state.signUpShow ? <h3 className="splash__member-header" onClick={ this.onHandleClick }>LOG IN</h3> : null }
        </div>

        <div className="splash__login-container">
          <div className="splash__main-container">
            { this.state.signUpShow ? <SignUp /> : null }
            { this.state.signUpShow ? <a className="splash__tour-scroll" onClick={this.scrollToBottom}>Learn More</a> : null }
            { this.state.signUpShow ? <img className="splash__arrow-down" src={arrowDown} alt="arrow down" onClick={this.scrollToBottom} /> : null }
            <ReactCSSTransitionGroup
              transitionName="formTransition"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
              { this.state.signInShow ? <SignInContainer /> : null }
            </ReactCSSTransitionGroup>
          </div>
        </div>

        <div className="splash__tour-container">
          <h4 className="splash__tour-header">how candorhub works</h4>
          <div className="splash__column-container container">

            <div className="splash__tour-column col-md-4">
              <h5>critique</h5>
              <img className="splash__tour-image" src={growImage} alt="Astrolabe Diagram" />
              <div className="splash__column-content">
                <p className="splash__tour-copy">{critiqueCopy}</p>
              </div>
            </div>

            <div className="splash__tour-column col-md-4">
              <h5>learn</h5>
              <img className="splash__tour-image" src={growImage} alt="Astrolabe Diagram" />
              <div className="splash__column-content">
                <p className="splash__tour-copy">{learnCopy}</p>
              </div>
            </div>

            <div className="splash__tour-column col-md-4">
              <h5>grow</h5>
              <img className="splash__tour-image" src={growImage} alt="Astrolabe Diagram" />
              <div className="splash__column-content">
                <p className="splash__tour-copy">{growCopy}</p>
              </div>
            </div>
          </div>

          <a onClick={this.scrollToTop}>
            <div className="splash__faux-button">
              Join Now
            </div>
          </a>
          <h4 className="splash__about-header">about</h4>
          <div className="splash__about-us">
            <p>Candorhub is a creation of Lauryn Davis, Jeffrey Ruder, Riley Starnes, and Patrick Sullivan, interns at DevelopmentNow. </p>
            <p><a href="https://developmentnow.com/" target="_blank">DevelopmentNow</a> is an award-winning digital product solutions agency located in the Pacific Northwest.</p>
          </div>
        </div>
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
