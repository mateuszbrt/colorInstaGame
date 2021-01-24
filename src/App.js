import React, { Component } from 'react'
import Game from './Game'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      showGame:false
    }
    this.handleStartGame = this.handleStartGame.bind(this)
  }

  handleStartGame(){
    this.state.showGame ? this.setState({showGame:false}) : this.setState({showGame:true}); 
  }


  render() {

    const gameComponent= (
      <div>
        <Game/>
      </div>
    )
    const startElements = (
      <div>
         <h1>Welcome to the game you idiots</h1>
         <button onClick={this.handleStartGame}>Start the game u dumb fuck</button>
      </div>
     
    )


    return this.state.showGame ? gameComponent : startElements;
  }
}
