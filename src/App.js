import React, { Component } from 'react';
import logo from './assets/logo.png';
import title from './assets/tunnel-x.png';
import logoName from './assets/tunnelx.png';
import time from './assets/time.png';
import question from './assets/question.png';
import image from './assets/image.png';
import reserved from './assets/reserved.png';
import tool from './assets/tool.png';
import elearning from './assets/elearning.png';
import Button from './Button.js';
import Status from './Status.js';
import './App.css';

class App extends Component {
  state = {
    cover:false
  };

  changePage = () => {
    this.setState(prevState => ({ cover: !prevState.cover }));
    console.log(this.state.cover);
    //<div className={`body ${this.state.cover ? "" : "page-is-changing"}`}>
  }

  render() {
    const { cover } = this.state.cover;
    console.log( this.state.cover );
    return (
      
    <div className="App" id="background">
      
      <div className="Left-side">
        <div className="Menu Left">
          <img src={title} className="App-title" alt="logo" />
        </div>
        <div className="left-body">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <img src={logoName} className="App-name" alt="logo" />
          </div>
        </div>  
      </div>
      
      <header className="App-header">
          <div className="Menu">
            <button className="Menu-button"> Home </button>
            <button onClick={this.changePage} className="Menu-button"> About Us </button>
            <button className="Menu-button"> Contact </button>
          </div>

          <div className="Home">
            <div className="home-row-medium hover-left">
              <div className="home-colm medium">
                <Status message="THE SPACE IS" ></Status>
              </div>
              <div className="home-colm small">
                <Button onClick={this.changePage} name="SHIFT HOURS" image={time}></Button>
                <Button name="MAKE RESERVATION" image={reserved}> </Button>
              </div>              
            </div>

            <div className="home-row">
              <Button name="I TOOK SOMETHING" image={tool}></Button>
            </div>
            <div className="home-row">
              <Button name="I USED THE MAKERSPACE" image={elearning}></Button>
            </div>

            <div className="home-row-medium">
              <div className="home-colm">
                <Button name="PHOTO GALLERY" image={image}></Button>
              </div>
              <div className="home-colm">
                <Button name="SSS" image={question}></Button>
              </div>  
              
            </div>

          </div>
        </header>

        <div className="cd-cover-layer"></div>
      </div>
    );
  }
}

export default App;
