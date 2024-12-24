// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading"> Calculate The Letters You Enter </h1>
            <div className="input-phrase-container">
              <label htmlFor="phraseText" className="label">
                Enter the Phrase
              </label>
              <input
                id="phraseText"
                className="letters-input"
                onChange={this.onChangeInputPhrase}
                type="text"
                value={inputPhrase}
              />
            </div>
            <p className="letters-count">No.of letters {inputPhrase.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
