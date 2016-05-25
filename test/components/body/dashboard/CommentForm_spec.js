import React from 'react';
import ReactDOM from 'react-dom';

import {CommentForm} from '../../../../src/components/body/dashboard/CommentForm';
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

describe("CommentForm", () => {
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
