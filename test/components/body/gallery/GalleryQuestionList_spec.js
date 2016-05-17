import React from 'react';
import ReactDOM from 'react-dom';
import GalleryQuestionList from '../../../../src/components/body/gallery/GalleryQuestionList';
import {expect} from 'chai';
import sd from 'skin-deep';

const testImage = {
  imageById: {
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
  }
};

describe("GalleryQuestionList", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<GalleryQuestionList imageById={testImage.imageById} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders a header", () => {
    expect(tree.subTree(".comments__header")).to.be.ok;
  });

  it("renders a GalleryQuestionBox for each question", () => {
    expect(tree.everySubTree("GalleryQuestionBox").length).to.equal(2);
  });
});
