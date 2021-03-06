import {expect} from 'chai';

import reducer from '../../src/reducers/index';

describe("imagesForCritique reducer", () => {
  it('handles SET_IMAGE_TO_CRITIQUE with an array of images', () => {
    const initialState = {}
    const action = {
      type: 'SET_IMAGE_TO_CRITIQUE',
      state: {
        signIn: {
          signedIn: true
        }
      },
      responseJSON: [
        {
          title: "",
          description: "an image",
          body: "",
          image: "",
          user: {
            id: "",
            username: "",
            email: ""
          },
          questions: []
        }
      ]
    };
    const nextState = reducer(initialState, action);
    expect(nextState.imageForCritique).to.deep.equal({
      title: "",
      description: "an image",
      body: "",
      image: "",
      user: {
        id: "",
        username: "",
        email: ""
      },
      questions: []
    });
  });

  it('handles SET_IMAGE_TO_CRITIQUE with an image object', () => {
    const initialState = {};
    const action = {
      type: 'SET_IMAGE_TO_CRITIQUE',
      state: {
        signIn: {
          signedIn: true
        }
      },
      responseJSON: {
        title: "",
        description: "an image",
        body: "",
        image: "",
        user: {
          id: "",
          username: "",
          email: ""
        },
        questions: []
      }
    };
    const nextState = reducer(initialState, action);
    expect(nextState.imageForCritique).to.deep.equal({
      title: "",
      description: "an image",
      body: "",
      image: "",
      user: {
        id: "",
        username: "",
        email: ""
      },
      questions: []
    });
  });
})
