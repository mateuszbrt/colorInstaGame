import React, { Component } from 'react'

export default class Box extends Component {
    static defaultProps = {     
        color: "rgba(255, 87, 51)",
      }
      constructor(props){
          super(props);
          this.handleClick= this.handleClick.bind(this)
      }
    handleClick(evt){
        this.props.checkIfCorrect(this.props)
    }
    render() {

        return (
            <div 
              onClick={this.handleClick} 
              style={{borderRadius: this.props.form === 1 ? "0px" : "200px",background: this.props.color}}>
            </div>
        )
    }
}
