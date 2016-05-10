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
  },

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const image = this.state.files[0];
    this.props.startFileUpload(title, description, image);
    console.log(title, image, description);
  },

  render() {
    return (
      <form className='signUpForm' onSubmit={this.handleSubmit}>
          <Dropzone onDrop={this.onDrop}>
            <div>Select a file to upload</div>
          </Dropzone> 
          {this.state.files.length > 0 ? <div>
            {this.state.files.map((file) => <img src={file.preview} />)}</div>
          : null }
          <br />
          <br />
          <TextField
            hintText="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            /><br />
            <br />
          <TextField
            hintText="Description"
            value={this.state.desc}
            onChange={this.handleDescChange}
            /><br />
            <br />
          <input type="submit" class="submit-button" />
      </form>
    )
  }
});

function mapStateToProps(state) {
  return {
    uploadProgress: state.uploadProgress
  }
}

export const UploadFormContainer = connect(
  mapStateToProps,
  actions
)(UploadForm);
