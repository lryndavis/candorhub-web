import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {CommentForm} from '../../../src/components/body/CommentForm';
import {expect} from 'chai';

describe("Comment Form", () => {
  it('renders three comment input areas and a submit button', () => {
    const component = renderIntoDocument(
      <CommentForm />
    );
    const inputFields = scryRenderedDOMComponentsWithTag(component, "input");
    expect(inputFields.length).to.equal(4);
  });
});
