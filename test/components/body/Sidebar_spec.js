import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../../../src/components/body/Sidebar';
import {expect} from 'chai';
import sd from 'skin-deep';

describe("Sidebar", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<Sidebar />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders a Drawer component", () => {
    expect(tree.subTree("Drawer")).to.be.ok;
  });

  it("is not open when initially rendered", () => {
    expect(tree.subTree("Drawer").props.open).to.be.false;
  })

  it("renders a ContentClear component", () => {
    expect(tree.subTree("ContentClear")).to.be.ok;
  });

  it("renders menu items", () => {
    expect(tree.subTree("MenuItem")).to.be.ok;
  });
});
