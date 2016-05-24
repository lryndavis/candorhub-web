import React from 'react';
import ReactDOM from 'react-dom';
import {GalleryCommentForm} from '../../../../src/components/body/gallery/GalleryCommentForm';
import {expect} from 'chai';
import sd from 'skin-deep';

//a dummy version of the class without componentDidMount, so as to test rendering behavior seperately from the API call action
class GalleryCommentFormTest extends GalleryCommentForm {
  componentDidMount() {
    return true;
  }
};

const testQuestion = {
  id: 0,
  body: ''
};

describe("GalleryCommentForm", () => {

  it('renders three comment input areas', () => {
    let showCommentForm = true;
    let tree = sd.shallowRender(<GalleryCommentFormTest
      showForm={showCommentForm}
      firstQuestion={testQuestion}
      secondQuestion={testQuestion}
      thirdQuestion={testQuestion}
      />);
    expect(tree.everySubTree("TextField").length).to.equal(3);
  });

  it("updates state when the comment input areas are changed", () => {
    let showCommentForm = true;
    let tree = sd.shallowRender(<GalleryCommentFormTest
      showForm={showCommentForm}
      firstQuestion={testQuestion}
      secondQuestion={testQuestion}
      thirdQuestion={testQuestion}
      />);
    let firstTextField = tree.subTree("TextField");
    firstTextField.props.onChange({
      target: {
        value: "My Comment"
      }
    });
    expect(tree.getMountedInstance().state.firstResponse).to.equal("My Comment");
  });

  it("updates response status when offensive language is used", () => {
    let showCommentForm = true;
    let tree = sd.shallowRender(<GalleryCommentFormTest
      showForm={showCommentForm}
      firstQuestion={testQuestion}
      secondQuestion={testQuestion}
      thirdQuestion={testQuestion}
      />);
    let firstTextField = tree.subTree("TextField");
    firstTextField.props.onChange({
      target: {
        value: "scumbag"
      }
    });
    expect(tree.getMountedInstance().state.firstResponseStatus)
      .to.equal(22);
  });
});
