import React from 'react';
import UserGalleryList from '../../../../src/components/body/usergallery/UserGalleryList';
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

describe("UserGalleryList", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<UserGalleryList imagesByUser={testImagesForGallery} />);
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
    expect(links[0].props.to).to.equal("/usergallery/0");
    expect(links[1].props.to).to.equal("/usergallery/1");
  });
});
