import React, { Component } from 'react'
import './Game.css'
import Box from './Box'
import {randomNr, log, getDiffProportions} from './helper'

export default class Game extends Component {
  static defaultProps = {
    boxCount: 9
  }
  constructor(props){
    super(props)
    this.state= {
      round: 1,
      boxes: Array(this.props.boxCount).fill(0)
    }
    this.generateBoxes = this.generateBoxes.bind(this)
    this.checkIfCorrect = this.checkIfCorrect.bind(this)
    this.incrementRoundCount = this.incrementRoundCount.bind(this)
    this.checkIfCorrect = this.checkIfCorrect.bind(this)
  }

  incrementRoundCount(curState){
    return { round: curState.round + 1}
  }
  

  checkIfCorrect (childProps){

    console.log(childProps.isDifferent);

    if (childProps.isDifferent) {
      console.log("you're answer is correct");
      this.setState(this.incrementRoundCount)
      this.generateBoxes()
    } else {
      alert("You're answer is uncorrect");
      if (this.props.boxCount === 9 && this.state.round > localStorage.highscoreEZ) localStorage.setItem("highscoreEZ", this.state.round)
      if (this.props.boxCount === 16 && this.state.round > localStorage.highscoreMD) localStorage.setItem("highscoreMD", this.state.round)
      if (this.props.boxCount === 25 && this.state.round > localStorage.highscoreHD) localStorage.setItem("highscoreHD", this.state.round)
      else alert("kurwa")
      
      this.setState({
        round: 0
      })
    }
  }

  componentDidMount(){
    this.generateBoxes()
  } 

  generateBoxes(){
    let randomIDX = randomNr(this.props.boxCount);

    let update = this.state.boxes.map((curr,index) =>{
      if (index === randomIDX)return 1 
      else return 0 
    })
    this.setState({
      boxes: update
    })

  }

  render() {

    let proportions = getDiffProportions(this.props.boxCount)

    console.log(this.props);
    const r = randomNr(255);
    const g = randomNr(255);
    const b = randomNr(255);
    let boxes = this.state.boxes.map((curr, index) => {
    
      if (curr === 1 ) {
        return <Box checkIfCorrect={this.checkIfCorrect} isDifferent={curr} color={`rgb(${r},${g},${b},${log(100,(this.state.round+15))})`} />
      } else {
        return <Box checkIfCorrect={this.checkIfCorrect} isDifferent={curr} color={`rgb(${r},${g},${b})`} />
      }
    })
     return (
      <div className="Game">
        <p>Round: {this.state.round}</p>
        {/* All 9 divs */}
        <div style={{ width: `${proportions}px`, height: `${proportions}px`,}} className="boxes-wrapper">
          {boxes}
        </div>
        <button onClick={this.generateBoxes}>regenerate</button>
      </div>
    )
  }
}
