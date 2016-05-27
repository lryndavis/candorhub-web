import React from 'react';
import {UserGallery} from '../../../../src/components/body/usergallery/UserGallery';
import {expect} from 'chai';
import sd from 'skin-deep';

class UserGalleryTest extends UserGallery {
  componentDidMount() {
    return false;
  }

  componentWillUpdate() {
    return false;
  }
}

const testImages = [{
  title: '',
  image: '',
  description: '',
  user: {
    id: "",
    username: "",
    email: ""
  }
},

  {
    title: '',
    image: '',
    description: '',
    user: {
      id: "",
      username: "",
      email: ""
    }
  },
]

describe("UserGallery", () => {
  it("renders a main container when signed in", () => {
    let signedIn = true;
    let tree = sd.shallowRender(<UserGalleryTest
      signedIn={signedIn}
      username="testUser"
      imagesByUser={testImages}
    />);
    expect(tree.subTree(".gallery__main-container")).to.be.ok;
  });

  it("renders a Sidebar when signed in", () => {
    let signedIn = true;
    let tree = sd.shallowRender(<UserGalleryTest
      signedIn={signedIn}
      username="testUser"
      imagesByUser={testImages}
    />);
    expect(tree.subTree("Sidebar")).to.be.ok;
  });

  it("renders DashboardNotSignedIn when not signed in", () => {
    let signedIn = false;
    let tree = sd.shallowRender(<UserGalleryTest
      signedIn={signedIn}
      username="testUser"
      imagesByUser={testImages}
    />);
    expect(tree.subTree("DashboardNotSignedIn")).to.be.ok;
    expect(tree.subTree(".gallery__main-container")).to.not.be.ok;
  });

  it("renders a UserSearchBar with correct props", () => {
    let signedIn = true;
    let tree = sd.shallowRender(<UserGalleryTest
      signedIn={signedIn}
      username="testUser"
      imagesByUser={testImages}
    />);
    expect(tree.subTree("UserSearchBar")).to.be.ok;
    expect(tree.subTree("UserSearchBar").props.imagesByUser)
      .to.deep.equal(testImages);
  });
});
