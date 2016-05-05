import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import Critique from '../../../src/components/body/Critique';
import {expect} from 'chai';

describe('Critique', () => {

  it('is a React component that has content', () => {
    const component = renderIntoDocument(
      <Critique />
    );
    const critique = scryRenderedDOMComponentsWithTag(component, 'img');
    expect(critique.length).to.equal(1);
  });
});
