import {FlatButton, RaisedButton, TextField} from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
import React from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';

import * as actionCreators from '../../../action_creators';


const MAX_FILE_SIZE = 150000000000;
const ALLOWED_FILE_TYPES = [
  'image/png',
  'image/jpg',
  'image/gif',
  'image/jpeg'];

const customContentStyle = {
  width: '150px',
  height: '150px',
  display: 'block',
  margin: 'auto'
}


export const UploadForm = React.createClass({
  getInitialState() {
    return {imageURL: '', title: '', description: '', files: []};
  },

  componentDidMount() {
    this.props.setState({uploadedImage: false});
  },

  handleImageURLChange(e) {
    this.setState({image: e.target.value});
  },

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  },

  handleDescChange(e) {
    this.setState({description: e.target.value});
  },

  onDrop(files) {
    this.setState({files: files})
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({image: reader.result});
    }
    reader.readAsDataURL(files[0]);
  },

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const image = this.state.files[0];
    if (this.state.files[0].size > MAX_FILE_SIZE) {
      alert("This file is too big!");
    } else if (!ALLOWED_FILE_TYPES.includes(this.state.files[0].type)) {
      alert("This file type is not allowed!");
    } else {
      this.props.startImageUpload(this.state.image, title, description);
      this.setState({imageURL: '', title: '', description: '', files: [], isUploadingImage: true});
    }
  },

  render() {
    return (
      <form className='upload-form' onSubmit={this.handleSubmit}>
        <h3 className="upload-title">Upload Your Work</h3>
        {this.state.isUploadingImage ? (!this.props.finishedImageUpload ?
          <div>
            <CircularProgress size={2} />
            <p>Uploading your masterpiece...</p>
          </div> :
          <p>All done with your upload!</p>) :
          <div className="drop-zone">
            <Dropzone
              onDrop={this.onDrop}
              accept="image/*">
              <div>Select a file to upload</div>
                {(this.state.files.length > 0 && !this.props.isUploadingImage) ? <div>
                  {this.state.files.map((file) => <img src={this.state.files[0].preview} key={file.name} style={customContentStyle}/>)}</div>
                : null }
            </Dropzone>
          </div>
          }

          <br />
          <br />
          <TextField
            className="upload-form__image-title"
            hintText="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            /><br />
            <br />
          <TextField
            className="upload-form__image-desc"
            hintText="Description"
            value={this.state.description}
            onChange={this.handleDescChange}
            /><br />
            <br />
            <input className="button button__submit" type="submit" class="submit-button" disabled={this.props.isUploadingImage} />
      </form>
    )
  }
});

function mapStateToProps(state) {
  return {
    isUploadingImage: state.imageUpload.isUploadingImage,
    finishedImageUpload: state.imageUpload.finishedImageUpload
  };
}

export const UploadFormContainer = connect(
  mapStateToProps,
  actionCreators
)(UploadForm);
