import React from 'react';
import ReactDOM from 'react-dom';
import GalleryCommentBox from '../../../../src/components/body/gallery/GalleryCommentBox';
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

describe("GalleryCommentBox", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<GalleryCommentBox question={testQuestion} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders a comment list", () => {
    expect(tree.props.className).to.equal("comment-list");
  });

  it("renders a comment box for each comment", () => {
    expect(tree.everySubTree(".individual-comment-box").length).to.equal(2);
  });

  it("passes content to the comment boxes", () => {
    expect(tree.dive(['.individual-comment-box', '.comment-body']).text()).to.equal("I don't know.");
  })
})
