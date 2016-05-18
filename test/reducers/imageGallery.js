import {expect} from 'chai';

import reducer from '../../src/reducers/index';

const testImageById = {
  title: '',
  description: '',
  image: '',
  questions: [{
    id: '',
    body: '',
    comments: [{
      id: '',
      body: ''
    }],
  }]
}

const testImagesForGallery = [
  {
    id: 0,
    title: ""
  }
]

describe("imageGallery reducer", () => {
  it('handles SET_IMAGE_BY_ID', () => {
    const action = {
      type: 'SET_IMAGE_BY_ID',
      state: undefined,
      responseJSON: testImageById
    }
    const nextState = reducer(undefined, action);
    expect(nextState.imageGallery.imageById).to.deep.equal(testImageById);
  });

  it('handles SET_IMAGE_GALLERY', () => {
    const action = {
      type: 'SET_IMAGE_GALLERY',
      state: undefined,
      responseJSON: testImagesForGallery
    }
    const nextState = reducer(undefined, action);
    expect(nextState.imageGallery.imagesForGallery).to.deep.equal(testImagesForGallery);
  });
});
