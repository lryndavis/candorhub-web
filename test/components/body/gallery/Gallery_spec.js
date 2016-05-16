import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../../../../src/components/body/gallery/Gallery';
import {expect} from 'chai';
import sd from 'skin-deep';

//a dummy version of the class without componentDidMount, so as to test rendering behavior seperately from the API call action

//TODO fix this failing to create the test class

// class GalleryTest extends Gallery {
//   componentDidMount() {
//     return true;
//   }
// };
//
// const testImages = [{
//   url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
//   title: 'Airplane Lolcat',
//   description: 'This kitty thinks it is an airplane!'
// }];
//
//
// describe("Gallery", () => {
//
//   it("renders correct components when in signed-out state", () => {
//     let signedIn = false;
//     let tree = sd.shallowRender(<GalleryTest
//       signedIn={signedIn}
//       imagesForGallery={testImage}
//       />);
//     expect(tree.subTree("DashboardNotSignedIn")).to.be.ok;
//     expect(tree.dive(['DashboardNotSignedIn']).text())
//       .to.contain("need to sign in");
//   });
// });
