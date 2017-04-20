import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Screen1 from './screens/screen1'
import Screen2 from './screens/screen2'
import Screen3 from './screens/screen3'
import './styles/app.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenIndex: 1,

    }
  }

  render(){
    var ActiveScreen

    if(this.state.screenIndex === 1) {
      ActiveScreen = <Screen1 />
    }

    if(this.state.screenIndex === 2) {
      ActiveScreen = <Screen2 />
    }

    if(this.state.screenIndex === 3) {
      ActiveScreen = <Screen3 />
    }


    return (
    <div className="app">
      <div className="app-header">
        <p>THIS IS THE HEADER</p>
      </div>

      <div className="app-wrapper">
        <div className="app-nav">
          <div className="nav-item screen1" onClick={() => { this.setState({screenIndex: 1})}}>
            <p>Screen 1</p>
          </div>
          <div className="nav-item screen2" onClick={() => { this.setState({screenIndex: 2})}}>
            <p>Screen 2</p>
          </div>
          <div className="nav-item screen3" onClick={() => { this.setState({screenIndex: 3})}}>
            <p>Screen 3</p>
          </div>
        </div>

        <div className="main-content">
          { ActiveScreen }
        </div>
      </div>
    </div>
    )
  }
}

ReactDOM.render(
  <App>
  </App>,
  document.getElementById('root')
);
