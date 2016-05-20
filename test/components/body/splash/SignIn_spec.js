import React from 'react';
import ReactDOM from 'react-dom';
import {SignIn} from '../../../../src/components/body/splash/SignIn';
import {expect} from 'chai';
import sd from 'skin-deep';

describe("SignIn", () => {

  it("renders an EmailSignInForm", () => {
    let tree = sd.shallowRender(<SignIn />);
    expect(tree.subTree("Connect(t)")).to.be.ok;
  });
});
