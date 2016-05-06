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

describe('Splash', () => {
  it('renders a sign up form', () => {
    const component = renderIntoDocument(
      <SignUp />
    );
    const paragraph = scryRenderedDOMComponentsWithTag(component, "p");
    expect(paragraph[0].textContent).to.contain('This may or may not be a form')
  });
});
