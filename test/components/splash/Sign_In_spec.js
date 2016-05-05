import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import Sign_In from '../../../src/components/splash/Sign_In';
import {expect} from 'chai';

describe("Sign In", () => {
  it('renders a sign-in button', () => {
    const component = renderIntoDocument(
      <Sign_In />
    );
    const button = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(button.length).to.equal(1);
    expect(button[0].textContent).to.equal("Sign In");
  });
});
