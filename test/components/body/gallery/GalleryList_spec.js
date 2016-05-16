import React from 'react';
import ReactDOM from 'react-dom';
import GalleryList from '../../../../src/components/body/gallery/GalleryList';
import {expect} from 'chai';
import sd from 'skin-deep';

const testImagesForGallery = [
  {
    id: 0,
    title: "title_one"
  },
  {
    id: 1,
    title: "title_two"
  }
]

describe("GalleryList", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<GalleryList imagesForGallery={testImagesForGallery} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders an image gallery", () => {
    expect(tree.props.className).to.equal("image-gallery");
  });

  it("renders a Link for each image", () => {
    expect(tree.everySubTree("Link").length).to.equal(2);
  });

  it("renders a GalleryThumbnail for each image", () => {
    expect(tree.everySubTree("GalleryThumbnail").length).to.equal(2);
  });
})
