import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/action_creators';
import nock from 'nock';
import {expect} from 'chai';

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  });

  it('creates setImageToCritique when getRandomImageFromServer is done', () => {
    nock('http://candorhub-api.herokuapp.com/')
      .get('/v1/images?count=1')
      .reply(200, { images: { 
                      id: 1, 
                      url: 'http://imgur.com/c4jt321.png', 
                      title: 'this is fine',
                      description: 'a short description' 
                    } 
                  });
    const store = mockStore({
      signedIn: false,
      imageForCritique: {
        url: '',
        title: '',
        description: ''
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
        expect(store.getActions()).to.deep.eq(expectedActions)
      });
 });
});

