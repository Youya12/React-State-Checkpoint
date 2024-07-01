import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "Hayao Miyazaki",
      bio: "Hayao Miyazaki, born on January 5, 1941, in Tokyo, Japan, is a legendary film director, animator, and manga artist. He co-founded Studio Ghibli, an acclaimed animation studio known for its enchanting films that resonate deeply with audiences worldwide. Miyazaki's creations, including beloved classics like 'My Neighbor Totoro', 'Spirited Away', and 'Princess Mononoke', are celebrated for their captivating stories, rich characters, and stunning animation. His unique ability to blend fantasy with profound themes has made him a beloved and influential figure in the world of animation and filmmaking.",
      imgSrc: "https://faroutmagazine.co.uk/static/uploads/1/2020/04/Watch-a-new-four-part-Hayao-Miyazaki-documentary-online-free.jpg",
      profession: "Film director, animator, and manga artist"
    },
    show: false,
    mountedTime: 0
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Class-based Component</h1>
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {show && (
          <div className="profile">
            <img src={imgSrc} alt="Profile" />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p><strong>Profession:</strong> {profession}</p>
          </div>
        )}
        <p className='myP'>Time since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
