import {expect} from 'chai';

import reducer from '../../src/reducers/index';

describe("signIn reducer", () => {
  it("handles SET_STATE", () => {
    const initialState = {
      signIn: {
        signedIn: false
      }
    };
    const action = {
      type: "SET_STATE",
      state: {signedIn: true}
    };
    const nextState = reducer(initialState, action);
    expect(nextState.signIn.signedIn).to.be.true;
  });

  it("handles SIGN_IN", () => {
    const initialState = {
      signIn: {
        signedIn: false
      }
    };
    const action = {
      type: "SIGN_IN"
    };
    const nextState = reducer(initialState, action);
    expect(nextState.signIn.signedIn).to.be.true;
  })
});
