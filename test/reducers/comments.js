import {expect} from 'chai';

import reducer from '../../src/reducers/index';

describe('comments reducer', () => {
  it("handles COMMENT_SUBMITTED", () => {
    const action = {
      type: 'COMMENT_SUBMITTED',
      state: undefined
    };
    const nextState = reducer(undefined, action);
    expect(nextState.comments).to.deep.equal({
      commentSubmitted: true,
      displayComments: false,
      questionsForComment: [
        {
          body: "",
          id: 0
        },
        {
          body: "",
          id: 0
        },
        {
          body: "",
          id: 0
        }
      ],
      showCommentForm: true
    });
  });

  it('handles SET_QUESTIONS_FOR_COMMENT', () => {
    const action = {
      type: 'SET_QUESTIONS_FOR_COMMENT',
      state: undefined,
      responseJSON: {
        questions: [
          {text: "a question"},
          {text: "another question"}
        ]
      }
    };
    const nextState = reducer(undefined, action);
    expect(nextState.comments).to.deep.equal({
      displayComments: false,
      showCommentForm: true,
      questionsForComment: {
        questions: [
          {text: "a question"},
          {text: "another question"}
        ]
      }
    });
  });

  it("handles HIDE_FORM", () => {
    const initialState = {
      comments: {
        showCommentForm: true
      }
    };
    const action = {
      type: 'HIDE_FORM',
      state: {}
    };
    const nextState = reducer(initialState, action);
    expect(nextState.comments).to.deep.equal({
      showCommentForm: false
    });
  });

  it("handles DISPLAY_COMMENTS", () => {
    const initialState = {
      comments: {
        displayComments: false
      }
    };
    const action = {
      type: 'DISPLAY_COMMENTS',
      state: {}
    };
    const nextState = reducer(initialState, action);
    expect(nextState.comments).to.deep.equal({
      displayComments: true
    });
  });
});
