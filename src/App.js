import React, { Component } from 'react';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Body from './components/bodyComponent/body';


import './style.css';
import './bootstrap-social.css';
import './assets/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Body />
        <Footer />

      </div>
    );
  }
}

export default App;
