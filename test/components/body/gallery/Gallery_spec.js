import React from 'react';
import {Gallery} from '../../../../src/components/body/gallery/Gallery';
import {expect} from 'chai';
import sd from 'skin-deep';

class GalleryTest extends Gallery {
  componentDidMount() {
    return false;
  }

  componentWillUpdate() {
    return false;
  }
}

const testImages = [{
  url: 'http://obeythekitty.com/wp-content/uploads/2015/01/lolcat_airplane.jpg',
  title: 'Airplane Lolcat',
  description: 'This kitty thinks it is an airplane!'
}]


describe("Gallery", () => {

  it("renders correct components when in signed-out state", () => {
    let signedIn = false;
    let tree = sd.shallowRender(<GalleryTest
      signedIn={signedIn}
      username="testUser"
      imagesForGallery={testImages}
    />);
    expect(tree.subTree("DashboardNotSignedIn")).to.be.ok;
    expect(tree.dive(['DashboardNotSignedIn']).text())
      .to.contain("need to sign in");
  });

  it("renders a main container when signed in", () => {
    let signedIn = true;
    let tree = sd.shallowRender(<GalleryTest
      signedIn={signedIn}
      username="testUser"
      imagesForGallery={testImages}
    />);
    expect(tree.subTree(".gallery__main-container")).to.be.ok;
    expect(tree.subTree("DashboardNotSignedIn")).to.not.be.ok;
  });

  it("renders a Sidebar when signed in", () => {
    let signedIn = true;
    let tree = sd.shallowRender(<GalleryTest
      signedIn={signedIn}
      username="testUser"
      imagesForGallery={testImages}
    />);
    expect(tree.subTree("Sidebar")).to.be.ok;
    expect(tree.subTree("Sidebar").props.username)
      .to.equal("testUser")
  });

  it("renders a SearchBar with the correct props", () => {
    let signedIn = true;
    let tree = sd.shallowRender(<GalleryTest
      signedIn={signedIn}
      username="testUser"
      imagesForGallery={testImages}
    />);
    expect(tree.subTree("SearchBar")).to.be.ok;
    expect(tree.subTree("SearchBar").props.imagesForGallery)
      .to.deep.equal(testImages);
  });
});
