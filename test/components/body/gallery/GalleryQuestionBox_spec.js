import React from 'react';
import ReactDOM from 'react-dom';
import GalleryQuestionBox from '../../../../src/components/body/gallery/GalleryQuestionBox';
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

describe("GalleryQuestionBox", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<GalleryQuestionBox question={testQuestion} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders an individual question box", () => {
    expect(tree.props.className).to.contain("individual-question-box");
  });

  it("renders a navigation arrow", () => {
    expect(tree.subTree("NavigationArrowDropDown")).to.be.ok;
  });

  it("hides comments when initially rendered", () => {
    expect(instance.state.commentShow).to.be.false;
    expect(tree.subTree("GalleryCommentBox")).to.not.be.ok;
  });

  it("updates state and shows comments on question body click", () => {
    const questionBody = tree.subTree(".question");
    questionBody.props.onClick();
    expect(instance.state.commentShow).to.be.true;
    expect(tree.subTree("GalleryCommentBox")).to.be.ok;
  });

  it("toggles the navigation arrow on question body click", () => {
    const questionBody = tree.subTree(".question");
    questionBody.props.onClick();
    expect(instance.state.navArrowChange).to.be.true;
    expect(tree.subTree("NavigationArrowDropUp")).to.be.ok;
    expect(tree.subTree("NavigationArrowDropDown")).to.not.be.ok;
  });
});
