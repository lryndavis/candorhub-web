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
import sd from 'skin-deep';

//a dummy version of the class without componentDidMount, so as to test rendering behavior seperately from the API call action
class CommentFormTest extends CommentForm {
  componentDidMount() {
    return true;
  }
};

const testQuestion = {
  id: 0,
  body: ''
};

describe("Comment Form", () => {
  it('renders three comment input areas', () => {
    let showCommentForm = true;
    let tree = sd.shallowRender(<CommentFormTest
      showForm={showCommentForm}
      firstQuestion={testQuestion}
      secondQuestion={testQuestion}
      thirdQuestion={testQuestion}
      />);
    expect(tree.everySubTree("TextField").length).to.equal(3);
  });
});
