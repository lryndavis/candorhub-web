import React from 'react';
import ReactDom from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {Splash} from '../../../src/components/splash/Splash';
import {SignIn} from '../../../src/components/splash/SignIn';
import SignUp from '../../../src/components/splash/SignUp';
import {expect} from 'chai';
import sd from 'skin-deep'

describe('Splash', () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<Splash />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it('renders a SignUp component', () => {
    expect(tree.subTree("SignUp")).to.be.ok;
  });

  it('renders a SignInContainer component', () => {
      expect(tree.subTree("SignInContainer")).to.be.ok;
  });

  // it('renders a SignIn component', () => {
  //   let tree = sd.shallowRender(<Splash />);
  //   expect(tree.subTree("SignInContainer")).to.be.ok;
  // });
  // it('renders a sign up form', () => {
  //   const component = renderIntoDocument(
  //     <SignUp />
  //   );
  //   const paragraph = scryRenderedDOMComponentsWithTag(component, "p");
  //   expect(paragraph[0].textContent).to.contain('Join Candorhub')
  // });
});
