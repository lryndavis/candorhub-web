import React from 'react';
import ReactDOM from 'react-dom';
import {
  createRenderer,
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {Critique} from '../../../src/components/body/Critique';
import CritiqueImage from '../../../src/components/body/CritiqueImage'
import CritiqueNotSignedIn from '../../../src/components/body/CritiqueNotSignedIn';
import CommentFormContainer from '../../../src/components/body/CommentForm';
import {expect} from 'chai';
import sd from 'skin-deep';

//a dummy version of the class without componentDidMount, so as to test rendering behavior seperately from the API call action
class CritiqueTest extends Critique {
  componentDidMount() {
    return true;
  }
};

const testImage = {
  url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
  title: 'Airplane Lolcat',
  description: 'This kitty thinks it is an airplane!'
};

//use skin-deep to shallow render components to avoid problems with trying to render CommentFormContainer without action creators
describe("Critique", () => {
  it("renders correct component for signed-out state", () => {
    let signedIn = false;
    let tree = sd.shallowRender(<CritiqueTest
      signedIn={signedIn}
      imageForCritique={testImage} />);
    expect(tree.subTree("CritiqueNotSignedIn")).to.be.ok;
    expect(tree.dive(['CritiqueNotSignedIn'])
      .text()).to.contain("need to sign in");
  });

  it("renders correct components for signed-in state", () => {
    let signedIn = true;
    let tree = sd.shallowRender(<CritiqueTest
      signedIn={signedIn}
      imageForCritique={testImage} />);
    expect(tree.subTree("CritiqueImage")).to.be.ok;
    expect(tree.subTree("CritiqueImage").props.image).to.equal(testImage);
    expect(tree.subTree("Connect(CommentForm)")).to.be.ok;
  });
});
