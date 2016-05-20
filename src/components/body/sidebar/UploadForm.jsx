import {FlatButton, RaisedButton, TextField} from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
import React from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';

import * as actionCreators from '../../../action_creators';
import {doesNotUseOffensiveLanguage} from '../../../lib/CommentValidation';

const ReactTags = require('react-tag-input').WithContext;

const MAX_FILE_SIZE = 150000000000;
const ALLOWED_FILE_TYPES = [
  'image/png',
  'image/jpg',
  'image/gif',
  'image/jpeg'];

const customContentStyle = {
  maxWidth: '90%',
  maxHeight: '150px',
  display: 'block',
  margin: 'auto'
}

export const UploadForm = React.createClass({
  getInitialState() {
    return {
      imageURL: '',
      title: '',
      description: '',
      files: [],
      tags: []
    }
  },

  componentDidMount() {
    this.props.setState({uploadedImage: false});
  },

  componentWillUpdate(nextProps) {
    console.log(this.state.tags);
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
    const tags = this.state.tags;
    if (image.size > MAX_FILE_SIZE) {
      alert("This file is too big!");
    } else if (!ALLOWED_FILE_TYPES.includes(image.type)) {
      alert("This file type is not allowed!");
    } else {
      this.props.startImageUpload(this.state.image, title, description, tags);
      this.setState({imageURL: '', title: '', description: '', files: [], isUploadingImage: true, tags: []});
    }
  },

  handleTagDeletion: function(index) {
    var tags = this.state.tags;
    tags.splice(index, 1);
    this.setState({tags: tags});
    if (this.state.tags.length <= 5) {
      this.tagInput.disabled = false;
    }
  },


  handleTagAddition: function(tag) {
    if (doesNotUseOffensiveLanguage(tag)) {
      let tags = this.state.tags;
      let newTag = {
        id: tags.length + 1,
        text: tag.replace(/[^a-zA-Z0-9]+/g, ' ')
                  .trim()
        }
      if (newTag.text.length) {
        tags.push(newTag);
        this.setState({tags: tags});
        if (this.state.tags.length >= 5) {
          this.tagInput.disabled = true;
        }
      }
    }
  },

  handleTagInputChange: function(value) {
    if (!doesNotUseOffensiveLanguage(value)) {
      this.setState({feedback: "Tags must not use offensive language."});
    } else {
      this.setState({feedback: ""});
    }
  },

  render() {
    return (
      <form className='upload-form' onSubmit={this.handleSubmit}>
        <h3 className="upload-title">Upload Your Work</h3>
        <div className="col-md-6">
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
          </div>
          <div className="col-md-6 tags-container">
            <p className="tags-header">Add Tags</p>
            <ReactTags
              tags={this.state.tags}
              handleDelete={this.handleTagDeletion}
              handleAddition={this.handleTagAddition}
              handleInputChange={this.handleTagInputChange}
              allowDeleteFromEmptyInput={false}
              ref={(reactTagsNode) => reactTagsNode ?
                this.tagInput = reactTagsNode.refs.child.refs.input : null}
              />
              <span className="feedback">{this.state.feedback}</span>
            </div>
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
