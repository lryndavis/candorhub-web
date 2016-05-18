import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from '../../../../src/components/body/dashboard/QuestionList';
import {expect} from 'chai';
import sd from 'skin-deep';

const testImage = {
  id: 0,
  url: "www.google.com",
  title: "test image",
  questions: [
    {
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
    },
    {
      id: 1,
      body: "What is your quest?",
      comments: [
        {
          id: 0,
          body: "To seek the Holy Grail!"
        },
      ]
    }
  ]
};

describe("QuestionList", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<QuestionList imageForCritique={testImage} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders a header", () => {
    expect(tree.subTree(".comments__header")).to.be.ok;
  });

  it("renders a QuestionBox for each question", () => {
    expect(tree.everySubTree("QuestionBox").length).to.equal(2);
  });
});
