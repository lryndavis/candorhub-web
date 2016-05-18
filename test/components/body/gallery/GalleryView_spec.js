import React from 'react';
import ReactDOM from 'react-dom';
import GalleryView from '../../../../src/components/body/gallery/GalleryView';
import {expect} from 'chai';
import sd from 'skin-deep';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ImageModal from '../../../../src/components/body/dashboard/ImageModal';
import GalleryQuestionList from '../../../../src/components/body/gallery/GalleryQuestionList';
import Sidebar from '../../../../src/components/body/sidebar/Sidebar';

//dummy version of the class without componentDidMount
const GalleryViewTest = React.createClass({
  render() {
    return (
      <div className="container">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Sidebar />
        </MuiThemeProvider>
        <div className="dashboard">
          <div className="dashboard__image-container col-md-8">
            <ImageModal image={this.props.imageById} />
          </div>
          <div className="dashboard__comment-form-container col-md-4">
            <GalleryQuestionList imageById={this.props.imageById} />
          </div>
        </div>
      </div>
    );
  }
});

const testImage = {
  imageById: {
    id: 0,
    image: "www.google.com",
    title: "test image",
    questions: [
      {
        id: 0,
        body: "Who's on first?",
        comments: [
          {
            id: 0,
            body: "I don't know."
          },
          {
            id: 1,
            body: "Third base."
          }
        ]
      },
      {
        id: 1,
        body: "What is your quest?",
        comments: [
          {
            id: 0,
            body: "To seek the Holy Grail!"
          },
        ]
      }
    ]
  }
};


describe("GalleryView", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<GalleryViewTest imageById={testImage.imageById} />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders a ImageModal", () => {
    expect(tree.subTree("ImageModal")).to.be.ok;
    expect(tree.subTree("ImageModal").props.image).to.deep.equal(testImage.imageById);
  })

  it("renders a GalleryQuestionList", () => {
    expect(tree.subTree("GalleryQuestionList")).to.be.ok;
    expect(tree.subTree("GalleryQuestionList").props.imageById).to.deep.equal(testImage.imageById);
  });
});
