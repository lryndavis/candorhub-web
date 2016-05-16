import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {SignIn} from '../../../../src/components/body/splash/SignIn';
import {expect} from 'chai';

describe("SignIn", () => {
  it('renders a sign-in button', () => {
    const component = renderIntoDocument(
      <SignIn />
    );
    const link = scryRenderedDOMComponentsWithClass(component, 'signInLink');
    expect(link.length).to.equal(1);
    expect(link[0].textContent).to.equal("Sign In");
  });

  it('invokes a callback function when the link is clicked', () => {
    let signedIn = false;
    const signIn = () => signedIn = true;

    const component = renderIntoDocument(
      <SignIn signIn={signIn} />
    );
    const link = scryRenderedDOMComponentsWithClass(component, 'signInLink');
    Simulate.click(link[0]);
    expect(signedIn).to.be.true;
  });
});
