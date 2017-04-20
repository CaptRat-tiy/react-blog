import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav'
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

  updateScreen(newScreenIndex) {
    this.setState({
      screenIndex: newScreenIndex})
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

      </div>



    )
  }
}

ReactDOM.render(
  <App>
  </App>,
  document.getElementById('root')
);
