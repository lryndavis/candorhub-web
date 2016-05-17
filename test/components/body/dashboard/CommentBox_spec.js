import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from '../../../../src/components/body/dashboard/CommentBox';
import {expect} from 'chai';
import sd from 'skin-deep';

const testQuestion = {
  id: 0,
  body: "Who's on first?",
  comments: [
    {
      id: 0,
      body: "I don't know."
    },
    {
      id: 1,
      body: "Third base."
    }
  ]
};

describe("CommentBox", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<CommentBox question={testQuestion} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders a comment list", () => {
    expect(tree.props.className).to.equal("comments__comment-list");
  });

  it("renders a comment box for each comment", () => {
    expect(tree.everySubTree(".comments").length).to.equal(2);
  });

  it("passes comment data to the individual comment boxes", () => {
    expect(tree.subTree(".comments__body").text()).to.equal("I don't know.");
  });
});
