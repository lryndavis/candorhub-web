import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {Map} from 'immutable';
import CritiqueNotSignedIn from '../../../src/components/body/CritiqueNotSignedIn';
import {expect} from 'chai';

describe('CritiqueNotSignedIn', () => {
  it('renders a paragraph saying the user is not signed in', () => {
    const component = renderIntoDocument(
      <CritiqueNotSignedIn />
    );
    const paragraph = scryRenderedDOMComponentsWithTag(component, "p");
    expect(paragraph[0].textContent).to.contain('need to sign in');
  });
});
