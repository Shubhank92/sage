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
    this.state = {
      selectedService : '',
      solution: ''
    }
  }

  selcName = (e) => {
    this.setState( { selectedService: e } );
  }

  onSolSelection = (e) => {
    this.setState( { solution: e } );
  }

  render() {
    return (
      <div>
        <Nav />
        <Intro />
        <TopInfo />
        <Service selcName={this.selcName} selectedService={this.state.selectedService}/>
        <Solutions solution={this.state.solution} onSolSelection={this.onSolSelection}/>
        <Partners />
        <Popular />
        <Footer />
      </div>
    )
  }
}

export default App;
