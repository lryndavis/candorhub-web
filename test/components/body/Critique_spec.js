import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import Critique from '../../../src/components/body/Critique';
import {expect} from 'chai';

describe('Critique', () => {

  it('is a React component that has props', () => {
    const component = renderIntoDocument(
      <Critique imageUrl="http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg"/>
    );
    const critique = scryRenderedDOMComponentsWithTag(component, "img");
    expect(critique[0].hasAttribute('src')).to.be.true;
  });

});
