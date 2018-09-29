import React, {Component} from 'react';
import './App.css';
import Intro from './components/intro/Intro';
import Pro from './components/projects/projects';
import Contact from './components/contact-me/Contact';
import Skills from './components/Skills/Skills';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Intro/>
                    <Contact/>
                    <Pro/>
                    <Skills/>
                    <footer style={{marginTop: '10em',marginBottom: '7em',fontWeight: '550'}}>
                        <p> Made with love <i className="em em-black_heart"></i> </p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
