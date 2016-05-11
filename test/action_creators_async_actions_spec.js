import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/action_creators';
import nock from 'nock';
import {expect} from 'chai';

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);

const apiRoot = "http://candorhub-api.herokuapp.com"
const randomImage = "/v1/images?count=1";
const submitComment = "/v1/comments";
const getQuestions = "/v1/questions?count=3";
const uploadImage = "";

describe('action_creators', () => {

  let store;

  beforeEach(() => {
    store = mockStore({
      signedIn: false,
      imageForCritique: {
        url: '',
        title: '',
        description: ''
      }
    });
  });

  afterEach(() => {
    nock.cleanAll()
  });

  it('creates setImageToCritique when getRandomImageFromServer is done', () => {
    nock(apiRoot).get(randomImage)
      .reply(200, { images: {
                      id: 1,
                      url: 'http://imgur.com/c4jt321.png',
                      title: 'this is fine',
                      description: 'a short description'
                    }
                  });

    const expectedActions = [
      { type: 'SET_IMAGE_TO_CRITIQUE',
        responseJSON: {
          images: {
            id: 1,
            url: 'http://imgur.com/c4jt321.png',
            title: 'this is fine',
            description: 'a short description'
          }
        },
        state: undefined
      }
    ]
    return store.dispatch(actions.getRandomImageFromServer())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
  });

  it("creates setQuestionsForComment when getQuestionsForComment is done", () => {
    nock(apiRoot).get(getQuestions)
      .reply(200, { questions: {
                    id: 1,
                    body: "What?"
                  }
                });

    const expectedActions = [
      { type: 'SET_QUESTIONS_FOR_COMMENT',
        responseJSON: {
          questions: {
                        id: 1,
                        body: "What?"
                      }
        },
        state: undefined
      }
    ]

    return store.dispatch(actions.getQuestionsForComment())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
  });

  it("creates commentSubmitted, hideForm, and displayComments when postSubmitComment is done", () => {
    nock(apiRoot).post(submitComment)
      .reply(200, { comment: {
                    id: 1,
                    body: "What!"
                  }
                });

    const expectedActions = [
      {
        type: 'COMMENT_SUBMITTED',
        state: undefined,
        responseJSON: {
          comment: {
                        id: 1,
                        body: "What!"
                      }
        },
      },
      {
        type: "HIDE_FORM",
        state: undefined
      },
      {
        type: "DISPLAY_COMMENTS",
        state: undefined
      }
    ]

    return store.dispatch(actions.postSubmitComment())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
  });
});
