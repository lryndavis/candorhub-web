import {expect} from 'chai';

import reducer from '../../src/reducers/index';

describe("imagesForCritique reducer", () => {
  it('handles SET_IMAGE_TO_CRITIQUE with an array of images', () => {
    const initialState = {
      signIn: {
        signedIn: true
      }
    };
    const action = {
      type: 'SET_IMAGE_TO_CRITIQUE',
      state: {
        signIn: {
          signedIn: true
        }
      },
      responseJSON: {
        images: [
          {
            title: "",
            description: "an image",
            body: "",
            url: ""
          }
        ]
      }
    };
    const nextState = reducer(initialState, action);
    expect(nextState.imageForCritique).to.deep.equal({
      imageForCritique: {
        title: "",
        description: "an image",
        body: "",
        url: ""
      }
    });
  });

  it('handles SET_IMAGE_TO_CRITIQUE with an image object', () => {
    const initialState = {
      signIn: {
        signedIn: true
      }
    };
    const action = {
      type: 'SET_IMAGE_TO_CRITIQUE',
      state: {
        signIn: {
          signedIn: true
        }
      },
      responseJSON: {
        image: {
            title: "",
            description: "an image",
            body: "",
            url: ""
        }
      }
    };
    const nextState = reducer(initialState, action);
    expect(nextState.imageForCritique).to.deep.equal({
      imageForCritique: {
        title: "",
        description: "an image",
        body: "",
        url: ""
      }
    });
  });
})
