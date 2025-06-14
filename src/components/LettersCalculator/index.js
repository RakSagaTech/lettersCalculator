// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading"> Calculate the Letters you enter </h1>
            <div className="phrase-input-container">
              <label htmlFor="phraseText" className="label">
                {' '}
                Enter the phrase{' '}
              </label>
              <input
                type="input"
                id="phraseText"
                placeholder="Enter the phrase"
                className="phrase-input"
              />
            </div>
            <p className="letters-count"> No.of letters: 0</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letters-calculator-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
