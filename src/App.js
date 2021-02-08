import React, { Component } from 'react'
import Game from './Game'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      showGame:false,
      difficulty: 1,
      form: 1
    }
    this.handleToggleGame = this.handleToggleGame.bind(this)
  }

  handleToggleGame(){
    this.state.showGame ? this.setState({showGame:false}) : this.setState({showGame:true}); 
  }

  handleDifficulty(evt,value){
    console.log(evt.target.name, value);
      this.setState({
      [evt.target.name]: value
    })
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
        <Game form={this.state.form} handleReturnHome={this.handleToggleGame} boxCount={boxCount}/>
      </div>
    )
    const startElements = (
      <div>
         <h1>Welcome to the random Insta-Game</h1>
         <button onClick={this.handleToggleGame}>Press to start the game</button>
         <h4>Difficulty : </h4>
         <div className="btn-difficulty-wrapper">
           <button name="difficulty" className={this.state.difficulty === 1 ? "selected" : "" } onClick={ e => this.handleDifficulty(e, 1)}>Eazy</button>
           <button name="difficulty" className={this.state.difficulty === 2 ? "selected" : "" } onClick={ e => this.handleDifficulty(e, 2)}>Medium</button>
           <button name="difficulty" className={this.state.difficulty === 3 ? "selected" : "" } onClick={ e => this.handleDifficulty(e, 3)}>Hard</button>
         </div>
         <h4>Form:</h4>
         <div className="btn-form-wrapper">
           <button name="form" className={this.state.form === 1 ? "selected" : "" } onClick={ e => this.handleDifficulty(e, 1)}>Rectangle</button>
           <button name="form"className={this.state.form === 2 ? "selected" : "" } onClick={ e => this.handleDifficulty(e, 2)}>Circle</button>
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
