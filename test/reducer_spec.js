import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        signedIn: true
      })
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      signedIn: true
    }));
  });

  it('handles SET_STATE with undefined initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: Map({
        signedIn: true
      })
    };
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      signedIn: true
    }));
  });
});
