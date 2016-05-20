import React from 'react';
import ReactDOM from 'react-dom';
import DialogExampleModal from '../../../../src/components/body/sidebar/UploadFormModal';
import {expect} from 'chai';
import sd from 'skin-deep';
import MenuItem from 'material-ui/MenuItem';


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

  it("renders an UploadFormContainer", () => {
    expect(tree.subTree("Connect(UploadForm)")).to.be.ok;
  });

  it("changes open state when the upload button is pressed", () => {
    const menuItem = tree.subTree(".sidebar__menu-link");
    menuItem.props.onClick();
    expect(instance.state.open).to.be.true;
  });
});
