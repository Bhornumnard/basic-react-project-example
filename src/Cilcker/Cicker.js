import React, { Component } from 'react'

export default class Cicker extends Component {
    render() {

        return (
            <div className="container">
                <div className="number">{this.props.value}</div>
                <div className="buttonContainer">
                    <button onClick={ this.props.plus}> + </button>
                    <button onClick={ this.props.refresh}> refresh </button>
                    <button onClick={ this.props.minus}> - </button>
                </div>
            </div>
        )
    }
}
