import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {Map} from 'immutable';
import DashboardNotSignedIn from '../../../../src/components/body/dashboard/DashboardNotSignedIn';
import {expect} from 'chai';

describe('DashboardNotSignedIn', () => {
  it('renders a paragraph saying the user is not signed in', () => {
    const component = renderIntoDocument(
      <DashboardNotSignedIn />
    );
    const componentContent = scryRenderedDOMComponentsWithTag(component, "p");
    expect(componentContent[0].textContent).to.contain('need to sign in');
  });
});
