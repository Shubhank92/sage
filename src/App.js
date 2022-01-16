import React, {Component} from 'react';
import tachyons from 'tachyons'
import './App.css';
import Nav from './components/nav.js';
import Intro from './components/intro.js';
import TopInfo from './components/topinfo.js';
import Service from './components/service.js';
import Solutions from './components/solutions.js';
import Partners from './components/partners.js';
import Popular from './components/popular.js';
import Footer from './components/footer.js';


class App extends Component{
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Nav />
        <Intro />
        <TopInfo />
        <Service />
        <Solutions />
        <Partners />
        <Popular />
        <Footer />
      </div>
    )
  }
}

export default App;
