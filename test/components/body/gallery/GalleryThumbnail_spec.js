import React from 'react';
import ReactDOM from 'react-dom';
import GalleryThumbnail from '../../../../src/components/body/gallery/GalleryThumbnail';
import {expect} from 'chai';
import sd from 'skin-deep';

const testImage = {
  image: {
    id: 0,
    image: "www.google.com",
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

describe("GalleryThumbnail", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<GalleryThumbnail image={testImage.image} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders a gallery thumbnail", () => {
    expect(tree.props.className).to.contain("gallery-thumbnail")
  })

  it("renders a header with the image title", () => {
    expect(tree.subTree(".gallery-thumbnail__title")).to.be.ok;
    expect(tree.subTree(".gallery-thumbnail__title").text()).to.equal("test image");
  });

  it("renders a image tag with the image", () => {
    expect(tree.subTree("img")).to.be.ok;
    expect(tree.subTree("img").props.src).to.equal("www.google.com");
  });
});
