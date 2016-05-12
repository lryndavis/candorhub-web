import React from 'react';
// import Dialog from 'material-ui/Dialog';
import {FlatButton, RaisedButton, TextField} from 'material-ui';
import Dropzone from 'react-dropzone';
import * as actions from '../../../src/action_creators'
import {connect} from 'react-redux';

//Change class names to suit styling for this page....
export const UploadForm = React.createClass({
  getInitialState() {
    return {imageURL: '', title: '', desc: '', files: []};
  },

  handleImageURLChange(e) {
    this.setState({image: e.target.value});
  },

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  },

  handleDescChange(e) {
    this.setState({desc: e.target.value});
  },

  onDrop(files) {
    this.setState({files: files})
    console.log(files[0])
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({image: reader.result});
    }
    reader.readAsDataURL(files[0]);
  },

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    const description = this.state.desc;
    this.props.startImageUpload(this.state.image, title, description);
  },

  render() {
    return (
      <form className='uploadForm' onSubmit={this.handleSubmit}>
          <Dropzone onDrop={this.onDrop}>
            <div>Select a file to upload</div>
          </Dropzone>
          {this.state.image ? <img src={this.state.image} /> : null}
          <br />
          <br />
          <TextField
            className="imageTitleTextField"
            hintText="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            /><br />
            <br />
          <TextField
            className="imageDescriptionTextField"
            hintText="Description"
            value={this.state.desc}
            onChange={this.handleDescChange}
            /><br />
            <br />
            <input type="submit" class="submit-button" disabled={this.state.isUploadingImage} />
      </form>
    )
  }
});

function mapStateToProps(state) {
  return {
    uploadProgress: state.uploadProgress,
    signedUrl: state.signedUrl
  }
}

export const UploadFormContainer = connect(
  mapStateToProps,
  actions
)(UploadForm);
