import React from 'react';
import ReactDOM from 'react-dom';
import {UploadForm} from '../../../../src/components/body/sidebar/UploadForm';
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
    expect(tree.props.className).to.contain("upload-form");
    expect(tree.subTree("Dropzone")).to.be.ok;
  });

  it("renders a form to input title and description", () => {
    expect(tree.everySubTree("input").length).to.equal(3);
  });

  it("renders a submit button", () => {
    const input = tree.subTree("input", (node) => node.props.type === "submit");
    expect(input).to.be.ok;
  });

  it("does not render a preview when no file has been selected", () => {
    expect(tree.subTree("img")).to.not.be.ok;
  });

  it("updates state on title change", () => {
    const textField = tree.subTree("input",
      (node) => node.props.className === "form__title-upload");
    textField.props.onChange({
      target: {
        value: "My Image"
      }
    });
    expect(instance.state.title).to.equal("My Image");
  });

  it("updates state on description change", () => {
    const textField = tree.subTree("input",
      (node) => node.props.className === "form__description-upload");
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
  });

  it("renders a ReactTags component", () => {
    expect(tree.subTree('DragDropContext(ReactTags)')).to.be.ok;
  });

  it("modifies state on tag input", () => {
    const tagInput = tree.subTree('DragDropContext(ReactTags)');
    tagInput.props.handleAddition("artwork");
    expect(instance.state.tags.length).to.equal(1);
    expect(instance.state.tags[0].text).to.equal("artwork");
  });

  it("validates tag input", () => {
    instance.handleTagInputChange("scumbag");
    expect(tree.subTree(".feedback").text()).to.contain("offensive");
  });
});
