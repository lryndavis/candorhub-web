// import {expect} from 'chai';
//
// import reducer from '../src/reducer';
//
// describe('reducer', () => {
//
//   it('handles SET_STATE', () => {
//     const initialState = {
//       hasCommented: true,
//       signedIn: false
//     };
//     const action = {
//       type: 'SET_STATE',
//       state: {
//         signedIn: true
//       }
//     };
//     const nextState = reducer(initialState, action);
//     expect(nextState).to.deep.equal({
//       hasCommented: true,
//       signedIn: true
//     });
//   });
//
//   it('handles SET_STATE with undefined initial state', () => {
//     const action = {
//       type: 'SET_STATE',
//       state: {
//         signedIn: true
//       }
//     };
//     const nextState = reducer(undefined, action);
//     expect(nextState.signedIn).to.be.true;
//   });
//
//   it('handles SIGN_IN', () => {
//     const initialState = {};
//     const action = {
//       type: 'SIGN_IN',
//       state: {
//         signedIn: false
//       }
//     };
//     const nextState = reducer(initialState, action);
//     expect(nextState).to.deep.equal({
//       signedIn: true
//     });
//   });
//



// });
