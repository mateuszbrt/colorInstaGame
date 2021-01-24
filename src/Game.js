import React, { Component } from 'react'
import './Game.css'
import Box from './Box'
import {randomNr, log} from './helper'

export default class Game extends Component {
  static defaultProps = {
    boxesCount: 9
  }
  constructor(props){
    super(props)
    this.state= {
      round: 1,
      boxes: Array(this.props.boxesCount).fill(0),
      isWon: undefined
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
      this.setState({
        round: 0
      })
    }
  }

  componentDidMount(){
    this.generateBoxes()
  } 

  generateBoxes(){
    let randomIDX = randomNr(this.props.boxesCount);

    let update = this.state.boxes.map((curr,index) =>{
      if (index === randomIDX)return 1 
      else return 0 
    })
    this.setState({
      boxes: update
    })

  }

  render() {
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
      <div className="App">
        <p>Round: {this.state.round}</p>
        {/* All 9 divs */}
        <div className="boxes-wrapper">
          {boxes}
        </div>
        <button onClick={this.generateBoxes}>regenerate</button>
      </div>
    )
  }
}
