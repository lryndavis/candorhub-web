import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from '../../../../src/components/body/splash/SignUp';
import {expect} from 'chai';
import sd from 'skin-deep';

describe("SignUp", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<SignUp />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders a sign up form", () => {
    expect(tree.subTree("Connect(t)")).to.be.ok;
  });
});
