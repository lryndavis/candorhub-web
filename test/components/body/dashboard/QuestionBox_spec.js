import React from 'react';
import ReactDOM from 'react-dom';
import QuestionBox from '../../../../src/components/body/dashboard/QuestionBox';
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

describe("QuestionBox", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<QuestionBox question={testQuestion} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders an individual question box", () => {
    expect(tree.props.className).to.equal("question__question-box");
  });

  it("renders a navigation arrow", () => {
    expect(tree.subTree("NavigationArrowDropDown")).to.be.ok;
  });

  it("hides comments when initially rendered", () => {
    expect(instance.state.commentShow).to.be.false;
    expect(tree.subTree("CommentBox")).to.not.be.ok;
  });

  it("updates state and shows comments on question body click", () => {
    const questionBody = tree.subTree(".question");
    questionBody.props.onClick();
    expect(instance.state.commentShow).to.be.true;
    expect(tree.subTree("CommentBox")).to.be.ok;
  });

  it("toggles the navigation arrow on question body click", () => {
    const questionBody = tree.subTree(".question");
    questionBody.props.onClick();
    expect(instance.state.navArrowChange).to.be.true;
    expect(tree.subTree("NavigationArrowDropUp")).to.be.ok;
    expect(tree.subTree("NavigationArrowDropDown")).to.not.be.ok;
  });
});
