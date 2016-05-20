import React from 'react';
import ReactDom from 'react-dom';

import {Splash} from '../../../../src/components/body/splash/Splash';

import {expect} from 'chai';
import sd from 'skin-deep'

describe('Splash', () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<Splash />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it('renders a SignUp component', () => {
    expect(tree.subTree("SignUp")).to.be.ok;
  });

});
