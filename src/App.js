import React, {Component} from 'react';
import './App.css';
import Intro from './components/intro/Intro';
import Pro from './components/projects/projects';
import Contact from './components/contact-me/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Intro/>
          <Contact/>
          <Pro/>
          {/* <Skills/> */}
        </div>
      </div>
    );
  }
}

export default App;
