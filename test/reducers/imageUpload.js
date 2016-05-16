import {expect} from 'chai';

import reducer from '../../src/reducers/index';

describe("imageUpload reducer", () => {
  it("handles IS_UPLOADING_IMAGE", () => {
    const action = {
      type: "IS_UPLOADING_IMAGE",
    }
    const nextState = reducer(undefined, action);
    expect(nextState.imageUpload.isUploadingImage).to.be.true;
  });

  it("handles DONE_UPLOADING_IMAGE", () => {
    const initialState = {
      imageUpload: {
        isUploadingImage: true
      }
    }
    const action = {
      type: "DONE_UPLOADING_IMAGE"
    }
    const nextState = reducer(initialState, action);
    expect(nextState.imageUpload.isUploadingImage).to.be.false;
  });

  it("handles ON_FINISHED_IMAGE_UPLOAD", () => {
    const action = {
      type: "ON_FINISHED_IMAGE_UPLOAD"
    }
    const nextState = reducer(undefined, action);
    expect(nextState.imageUpload.finishedImageUpload).to.be.true;
  })
});
