import React from 'react';
import { Router, Route, Link } from 'react-router';
import {connect} from 'react-redux';

export class GalleryView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

// componentDidMount() {
//   this.setState({
//     image: findImageById(this.props.params.id)
//   })
// },
