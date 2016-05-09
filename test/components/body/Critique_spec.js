import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {Map} from 'immutable';
import {Critique} from '../../../src/components/body/Critique';
import {expect} from 'chai';

//a dummy version of the class without componentDidMount, so as to test rendering behavior seperately from the API call action
const CritiqueTest = class extends Critique {
  componentDidMount() {
    return true;
  }
};

const testImage = {
  url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
  title: 'Airplane Lolcat',
  description: 'This kitty thinks it is an airplane!'
};

describe("Critique", () => {
  it("displays correct component for signed-out state", () => {
    const signedIn = false;
    const component = renderIntoDocument(
      <CritiqueTest signedIn={signedIn} imageForCritique={testImage} />
    );
    const renderedText = scryRenderedDOMComponentsWithClass(component, "critiqueNotSignedIn");
    expect(renderedText.length).to.equal(1);
  });

  it("displays correct component for signed-in state", () => {
    const signedIn = true;
    const component = renderIntoDocument(
      <CritiqueTest signedIn={signedIn} imageForCritique={testImage} />
    );
    const renderedImage = scryRenderedDOMComponentsWithClass(component, "critiqueImage");
    expect(renderedImage.length).to.equal(1);
  });
});
