import React from 'react';
// import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

//Change class names to suit styling for this page....

export default React.createClass({
  getInitialState: function() {
    return {imageURL: '', title: '', desc: ''};
  },
  handleImageURLChange: function(e) {
    this.setState({image: e.target.value});
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleDescChange: function(e) {
    this.setState({desc: e.target.value});
  },
  render : function() {
    return (
      <form className='signUpForm'>
          <TextField
            hintText="Image URL dropzone zone"
            value={this.state.imageURL}
            onChange={this.handleImageURLChange}
            /><br />
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
      </form>
    )
  }
});
