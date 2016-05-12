import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from '../../../src/components/splash/SignUp';
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
    expect(tree.type).to.equal("form");
    expect(tree.props.className).to.equal("sign-up-form");
  });

  it("renders four input fields", () => {
    expect(tree.everySubTree("TextField").length).to.equal(4);
  });

  it("renders a submit button", () => {
    expect(tree.subTree("input")).to.be.ok;
  });

  it("modifies state when username is changed", () => {
    const usernameTextField = tree.subTree("TextField", (node) => node.props.className === "usernameTextField");
    usernameTextField.props.onChange({
      target: {
        value: "MaxPowers11"
      }
    });
    expect(instance.state.username).to.equal("MaxPowers11");
  });

  it("modifies state when email is changed", () => {
    const emailTextField = tree.subTree("TextField", (node) => node.props.className === "emailTextField");
    emailTextField.props.onChange({
      target: {
        value: "maxpowers@gmail.com"
      }
    });
    expect(instance.state.email).to.equal("maxpowers@gmail.com");
  });

  it("modifies state when password is changed", () => {
    const passwordTextField = tree.subTree("TextField", (node) => node.props.className === "passwordTextField");
    passwordTextField.props.onChange({
      target: {
        value: "taco"
      }
    });
    expect(instance.state.password).to.equal("taco");
  });

  it("modifies state when password confirmation is changed", () => {
    const passwordConfirmTextField = tree.subTree("TextField", (node) => node.props.className === "passwordConfirmTextField");
    passwordConfirmTextField.props.onChange({
      target: {
        value: "taco"
      }
    });
    expect(instance.state.passwordConfirm).to.equal("taco");
  });
});
