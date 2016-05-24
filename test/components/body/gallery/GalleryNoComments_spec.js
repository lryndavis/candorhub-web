import React from 'react';
import ReactDOM from 'react-dom';
import GalleryNoComments from '../../../../src/components/body/gallery/GalleryNoComments';
import {expect} from 'chai';
import sd from 'skin-deep';

describe("GalleryNoComments", () => {
  let tree, instance, vdom;
  
  beforeEach(() => {
    tree = sd.shallowRender(<GalleryNoComments />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders correctly", () => {
    expect(tree.props.className).to.contain("gallery__no-comments");
  });
})
