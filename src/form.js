import React, { Component } from 'react'

export default class Form extends Component {

    handleChange(event) {
        if (event.target.name !== "outOfPlace" && event.target.name !== "wrong") {
            let correct = this.state.correct
            correct[event.target.name] = event.target.value
            this.setState({correct : correct}, () => {this.props.onChange({
                correct : this.state.correct,
                wrong : this.state.wrong,
                outOfPlace : this.state.outOfPlace.split('')
            })})

        } else {
            let name = event.target.name
            let value = event.target.value
            this.setState({[name] : value}, () => {this.props.onChange({
                correct : this.state.correct,
                wrong : this.state.wrong,
                outOfPlace : this.state.outOfPlace.split('')
            })})
        }
    }

    state = {
        'correct' : {
            0 : '',
            1 : '',
            2 : '',
            3 : '',
            4 : ''
        },
        'outOfPlace' : '',
        'wrong' : ''
    }

    render() {
        return (
            <form>
                <div className='correctClass'>
                    <p>Enter only correct letters in correct box</p>
                    <input type="text" name="0" maxLength="1" onChange={(e) => {this.handleChange(e)}} autoComplete="off"/>
                    <input type="text" name="1" maxLength="1" onChange={(e) => {this.handleChange(e)}} autoComplete="off"/>
                    <input type="text" name="2" maxLength="1" onChange={(e) => {this.handleChange(e)}} autoComplete="off"/>
                    <input type="text" name="3" maxLength="1" onChange={(e) => {this.handleChange(e)}} autoComplete="off"/>
                    <input type="text" name="4" maxLength="1" onChange={(e) => {this.handleChange(e)}} autoComplete="off"/>
                </div>
                <div className='outOfPlaceClass'>
                    <p>Enter misplaced letters</p>
                    <input type="text" name="outOfPlace" onChange={(e) => {this.handleChange(e)}} autoComplete="off"/>
                </div>
                <div className='wrongClass'>
                    <p>Enter wrong letters</p>
                    <input type="text" name="wrong" onChange={(e) => {this.handleChange(e)}} autoComplete="off"/>
                </div>
            </form>  )
    }
}

