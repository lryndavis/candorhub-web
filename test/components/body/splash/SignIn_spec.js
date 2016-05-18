import React from 'react';
import ReactDOM from 'react-dom';
import {SignIn} from '../../../../src/components/body/splash/SignIn';
import {expect} from 'chai';
import sd from 'skin-deep';

describe("SignIn", () => {

  it("renders a sign-in button", () => {
    let tree = sd.shallowRender(<SignIn />);
    expect(tree.subTree(".button__sign-in")).to.be.ok;
  });

  it("invokes a callback function when the button is clicked", () => {
    let signedIn = false;
    const signIn = () => signedIn = true;
    const tree = sd.shallowRender(<SignIn signIn={signIn}/>);
    const signInButton = tree.subTree("Link");
    signInButton.props.onClick();
    expect(signedIn).to.be.true;
  });
});
