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
      boxes: Array(this.props.boxCount).fill(0),
      isLost: false
    }
    this.generateBoxes = this.generateBoxes.bind(this)
    this.checkIfCorrect = this.checkIfCorrect.bind(this)
    this.incrementRoundCount = this.incrementRoundCount.bind(this)
    this.checkIfCorrect = this.checkIfCorrect.bind(this)
    this.returnHome = this.returnHome.bind(this)

  }

  incrementRoundCount(curState){
    return { round: curState.round + 1}
  }
  
  checkIfCorrect(childProps){
    if (childProps.isDifferent) {
      this.setState(this.incrementRoundCount)
      this.generateBoxes()
    } else {

      alert('Kurwa!')
      if (this.props.boxCount === 9  && this.state.round > localStorage.highscoreEZ) localStorage.setItem("highscoreEZ", this.state.round)
      if (this.props.boxCount === 16 && this.state.round > localStorage.highscoreMD) localStorage.setItem("highscoreMD", this.state.round)
      if (this.props.boxCount === 25 && this.state.round > localStorage.highscoreHD) localStorage.setItem("highscoreHD", this.state.round)

        this.setState({
          round: 0

        })
        this.returnHome();  

    }
  }
  

  returnHome(){
    console.log("returning Home");
    this.props.handleReturnHome()
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

    const r = randomNr(255);
    const g = randomNr(255);
    const b = randomNr(255);

    let boxes = this.state.boxes.map(curr => {
      
      if (curr === 1 ) {
        return <Box form={this.props.form} checkIfCorrect={this.checkIfCorrect} isDifferent={curr} color={`rgb(${r},${g},${b},${log(100,(this.state.round+15))})`} />
      } else {
        return <Box  form={this.props.form} checkIfCorrect={this.checkIfCorrect} isDifferent={curr} color={`rgb(${r},${g},${b})`} />
      }
    })
     return (
      <div className="Game">
        <button className="home-btn" onClick={this.returnHome}>Return to Home</button>
        <p>Round: {this.state.round}</p>
        {/* All 9 divs */}
        <div 
          style={{ borderRadius: this.props.form === 1 ? "0px" :"90px" , width: `${proportions}px`, height: `${proportions}px`,}} className={`boxes-wrapper ${this.props.form}`}>
          {boxes}
        </div>
        {/* <button onClick={this.generateBoxes}>regenerate</button> */}
      </div>
    )
  }
}
