import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = {
      hasCommented: true,
      signedIn: false
    };
    const action = {
      type: 'SET_STATE',
      state: {
        signedIn: true
      }
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      hasCommented: true,
      signedIn: true
    });
  });

  it('handles SET_STATE with undefined initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        signedIn: true
      }
    };
    const nextState = reducer(undefined, action);
    expect(nextState.signedIn).to.be.true;
  });

  it('handles SIGN_IN', () => {
    const initialState = {};
    const action = {
      type: 'SIGN_IN',
      state: {
        signedIn: false
      }
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      signedIn: true
    });
  });

  it('handles SET_IMAGE_TO_CRITIQUE', () => {
    const initialState = {
      signedIn: true
    };
    const action = {
      type: 'SET_IMAGE_TO_CRITIQUE',
      state: {
        signedIn: true,
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
    expect(nextState).to.deep.equal({
      signedIn: true,
      imageForCritique: {
        title: "",
        description: "an image",
        body: "",
        url: ""
      }
    });
  });

  it("handles COMMENT_SUBMITTED", () => {
    const initialState = {
      commentSubmitted: false
    };
    const action = {
      type: 'COMMENT_SUBMITTED',
      state: {}
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      commentSubmitted: true
    });
  });

  it('handles SET_QUESTIONS_FOR_COMMENT', () => {
    const initialState = {
      signedIn: true
    };
    const action = {
      type: 'SET_QUESTIONS_FOR_COMMENT',
      state: {
        signedIn: true,
      },
      responseJSON: {
        questions: [
          {text: "a question"},
          {text: "another question"}
        ]
      }
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      signedIn: true,
      questionsForComment: [
        {text: "a question"},
        {text: "another question"}]
    });
  });

  it("handles HIDE_FORM", () => {
    const initialState = {
      showCommentForm: true
    };
    const action = {
      type: 'HIDE_FORM',
      state: {}
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      showCommentForm: false
    });
  });

  it("handles DISPLAY_COMMENTS", () => {
    const initialState = {
      displayComments: false
    };
    const action = {
      type: 'DISPLAY_COMMENTS',
      state: {}
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      displayComments: true
    });
  });
});
