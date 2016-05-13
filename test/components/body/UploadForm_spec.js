import React from 'react';
import ReactDOM from 'react-dom';
import {UploadForm} from '../../../src/components/body/UploadForm';
import {expect} from 'chai';
import sd from 'skin-deep';

describe("UploadForm", () => {
  let tree, instance, vdom;

  beforeEach(() => {
    tree = sd.shallowRender(<UploadForm />);
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it("renders an upload form with a dropzone", () => {
    expect(tree.type).to.equal("form");
    expect(tree.props.className).to.equal("uploadForm");
    expect(tree.subTree("Dropzone")).to.be.ok;
  });

  it("renders two TextFields for title and description", () => {
    expect(tree.everySubTree("TextField").length).to.equal(2);
  });

  it("renders a submit button", () => {
    const input = tree.subTree("input", (node) => node.props.type === "submit");
    expect(input).to.be.ok;
  });

  it("does not render a preview when no file has been selected", () => {
    expect(tree.subTree("img")).to.not.be.ok;
  });

  it("updates state on title change", () => {
    const textField = tree.subTree("TextField",
      (node) => node.props.className === "imageTitleTextField");
    textField.props.onChange({
      target: {
        value: "My Image"
      }
    });
    expect(instance.state.title).to.equal("My Image");
  });

  it("updates state on description change", () => {
    const textField = tree.subTree("TextField",
      (node) => node.props.className === "imageDescriptionTextField");
    textField.props.onChange({
      target: {
        value: "My Description"
      }
    });
    expect(instance.state.description).to.equal("My Description");
  });

  it("updates state and renders preview on file drop", () => {
    const dropzone = tree.subTree("Dropzone");
    const imagePreview = "https://upload.wikimedia.org/wikipedia/commons/3/37/Wikipedia-lolcat.jpg";
    dropzone.props.onDrop([{
      content: "Test Content",
      preview: imagePreview
    }]);
    expect(instance.state.files[0].content).to.equal("Test Content");
    expect(tree.subTree("img").props.src).to.equal(imagePreview);
  })
});
