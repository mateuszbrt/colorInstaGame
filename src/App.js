import React, { Component } from 'react'
import Game from './Game'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      showGame:false,
      difficulty: 1
    }
    this.handleStartGame = this.handleStartGame.bind(this)
  }

  handleStartGame(){
    this.state.showGame ? this.setState({showGame:false}) : this.setState({showGame:true}); 
  }

  handleDifficulty(evt,diff){
      this.setState({
      difficulty: diff
    })
    // evt.target.style.color = "blue"
  }

  componentDidMount(){
    this.setState({
      highscore: localStorage.highscore
    })
  }
  render() {
    let boxCount;
      if (this.state.difficulty === 1 ) boxCount = 9
      else if (this.state.difficulty === 2 ) boxCount = 16
      else if (this.state.difficulty === 3 ) boxCount = 25
     

    const gameComponent= (
      <div>
        <Game boxCount={boxCount}/>
      </div>
    )
    const startElements = (
      <div>
         <h1>Welcome to the game you idiots</h1>
         <button onClick={this.handleStartGame}>Start the game u dumb fuck</button>
         <h4>Difficulty : </h4>
         <div className="btn-difficulty">
           <button className={this.state.difficulty === 1 ? "selectedDiff" : "" } onClick={ e => this.handleDifficulty(e, 1)}>Eazy</button>
           <button className={this.state.difficulty === 2 ? "selectedDiff" : "" } onClick={ e => this.handleDifficulty(e, 2)}>Medium</button>
           <button className={this.state.difficulty === 3 ? "selectedDiff" : "" } onClick={ e => this.handleDifficulty(e, 3)}>Hard</button>
         </div>
         <h2>Stats :</h2>
         <ul>
           <li>Your highest Streak (eazy Mode) is {localStorage.highscoreEZ} </li>
           <li>Your highest Streak (medium Mode) is {localStorage.highscoreMD} </li>
           <li>Your highest Streak (hard Mode) is {localStorage.highscoreHD} </li>
         </ul>
      </div>
     
    )


    return this.state.showGame ? gameComponent : startElements;
  }
}
