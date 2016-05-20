import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../../../../src/components/body/sidebar/Sidebar';
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

  it("renders a hamburger menu", () => {
    expect(tree.subTree("ImageDehaze")).to.be.ok;
  });

  it("renders links", () => {
    expect(tree.subTree("Link")).to.be.ok;
  });

  it("opens the Drawer when the hamburger menu is clicked", () => {
    tree.subTree("ImageDehaze").props.onClick();
    let drawer = tree.subTree("Drawer");
    expect(drawer.props.open).to.be.true;
    expect(drawer.subTree("ContentClear")).to.be.ok;
    expect(drawer.everySubTree("Link").length).to.equal(2);
  });

  it("closes the Drawer when the ContentClear component is clicked", () => {
    tree.subTree("ImageDehaze").props.onClick();
    expect(tree.subTree("Drawer").props.open).to.be.true;
    tree.subTree("ContentClear").props.onClick();
    expect(tree.subTree("Drawer").props.open).to.be.false;
  });
});
