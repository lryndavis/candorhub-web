import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../../../../src/components/body/gallery/SearchBar';
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

describe("SearchBar", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<SearchBar imagesForGallery={testImagesForGallery} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders an image gallery", () => {
    expect(tree.props.className).to.contain("image-gallery");
  });

  it("renders images", () => {
    expect(tree.everySubTree("img").length).to.equal(2);
  })

  it("renders a Link for each image", () => {
    const links = tree.everySubTree("Link");
    expect(links.length).to.equal(2);
    expect(links[0].props.to).to.equal("/gallery/0");
    expect(links[1].props.to).to.equal("/gallery/1");
  });

  it("renders an Infinite scroll element", () => {
    expect(tree.subTree("Infinite")).to.be.ok;
  });
});
