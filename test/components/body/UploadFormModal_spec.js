import React from 'react';
import ReactDOM from 'react-dom';
import DialogExampleModal from '../../../src/components/body/UploadFormModal';
import {expect} from 'chai';
import sd from 'skin-deep';

describe("UploadFormModal", () => {
  let tree, instance, vdom, dialog;

  beforeEach(() => {
    tree = sd.shallowRender(<DialogExampleModal />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
    dialog = tree.subTree("Dialog");
  });

  it("renders a dialog component", () => {
    expect(dialog).to.be.ok;
  });

  it("is not open when initially rendered", () => {
    expect(dialog.props.open).to.be.false;
    expect(instance.state.open).to.be.false;
  });

  it("renders a raised upload button", () => {
    const raisedButton = tree.subTree("RaisedButton",
      (node) => node.props.label === "Upload");
    expect(raisedButton).to.be.ok;
  });

  it("renders an UploadFormContainer", () => {
    expect(tree.subTree("Connect(UploadForm)")).to.be.ok;
  });

  it("changes open state when the upload button is pressed", () => {
    const raisedButton = tree.subTree("RaisedButton",
      (node) => node.props.label === "Upload");
    raisedButton.props.onClick();
    expect(instance.state.open).to.be.true;
  });
});
