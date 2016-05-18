import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import sd from 'skin-deep';

import {Dashboard} from '../../../../src/components/body/dashboard/Dashboard';
import ImageModal from '../../../../src/components/body/dashboard/ImageModal'
import DashboardNotSignedIn from '../../../../src/components/body/dashboard/DashboardNotSignedIn';
import CommentFormContainer from '../../../../src/components/body/dashboard/CommentForm';

//a dummy version of the class without componentDidMount, so as to test rendering behavior seperately from the API call action
class DashboardTest extends Dashboard {
  componentDidMount() {
    return true;
  }
};

const testImage = {
  url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
  title: 'Airplane Lolcat',
  description: 'This kitty thinks it is an airplane!'
};

const testQuestion = {
  id: 0,
  body: "What?"
};

//use skin-deep to shallow render components to avoid problems with trying to render CommentFormContainer without action creators
describe("Dashboard", () => {
  it("renders correct components when in signed-out state", () => {
    let signedIn = false;
    let tree = sd.shallowRender(<DashboardTest
      signedIn={signedIn}
      imageForCritique={testImage}
      questionsForComment={testQuestion} />);
    expect(tree.subTree("DashboardNotSignedIn")).to.be.ok;
    expect(tree.dive(['DashboardNotSignedIn']).text())
      .to.contain("need to sign in");
  });

  it("renders a CritiqueImage when in signed-in state", () => {
    let signedIn = true;
    let tree = sd.shallowRender(<DashboardTest
      signedIn={signedIn}
      imageForCritique={testImage} />);
    expect(tree.subTree("ImageModal")).to.be.ok;
    expect(tree.subTree("ImageModal").props.image).to.equal(testImage);
  });

  it("renders a CommentFormContainer when in signed-in state", () => {
    let signedIn = true;
    let tree = sd.shallowRender(<DashboardTest
      signedIn={signedIn}
      imageForCritique={testImage} />);
    expect(tree.subTree("Connect(CommentForm)")).to.be.ok;
  });
});
