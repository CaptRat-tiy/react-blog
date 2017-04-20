import React, { Component } from 'react'

class Nav extends Component{

render(){
  return (
          <div className="app-nav">
            <div className={this.state.screenIndex === 1 ? "nav-item screen1 active-nav" : "nav-item screen1"} onClick={() => { this.updateScreen(1)}}>
              <p>Screen 1</p>
            </div>
            <div className={this.state.screenIndex === 2 ? "nav-item screen2 active-nav" : "nav-item screen2"} onClick={() => { this.updateScreen(2)}}>
              <p>Screen 2</p>
            </div>
            <div className={this.state.screenIndex === 3 ? "nav-item screen3 active-nav" : "nav-item screen 3"} onClick={() => { this.updateScreen(3)}}>
              <p>Screen 3</p>
            </div>
          </div>
        )
  }
}

module.exports = Nav
