import React, { Component } from 'react'
import './App.css'
import Box from './Box'
import {randomNr} from './helper'

export default class App extends Component {
  static defaultProps = {
    boxesCount: 9
  }
  constructor(props){
    super(props)
    this.state= {
      round: 1,
      boxes: this.generateBoxes(),
      isWon: undefined
    }
    this.generateBoxes = this.generateBoxes.bind(this)
    this.checkIfCorrect = this.checkIfCorrect.bind(this)
    this.incrementRoundCount = this.incrementRoundCount.bind(this)
  }

  incrementRoundCount(curState){
    return { round: curState.round + 1}
  }
  

  checkIfCorrect = (isDifferent)=>{
    if (isDifferent === true) {
      console.log("You won !!!!");
      this.setState(this.incrementRoundCount)
      this.setState({
        isWon: true
      })
    }else if (isDifferent === false){
      console.log("you lost you bastard");
      this.setState({
      isWon: false
    })
    }
  }



  generateBoxes(){
    const randomIDX = randomNr(this.props.boxesCount);
    let boxArr = new Array(this.props.boxesCount).fill(0); 
    let updatedArr = boxArr.map((curr,index) => {
      if (index === randomIDX){
        return <Box checkIfCorrect={this.checkIfCorrect} isDifferent={true} color={`rgba(255,87,51,1)`}/>
      }
      else if(index !== randomIDX){
        return <Box checkIfCorrect={this.checkIfCorrect} isDifferent={false} color={`rgba(255,87,51,1)`}/>
      }
    })
    return updatedArr;
  }


  
  render() {
     return (
      <div className="App">
        <p>Round: {this.state.round}</p>
        {/* All 9 divs */}
        <div className="boxes-wrapper">
          {this.state.boxes}
        </div>
        
        
      </div>
    )
  }
}
