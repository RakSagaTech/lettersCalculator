// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1> Calculate the Letters you enter </h1>
            <div>
              <label htmlFor="phraseText"> Enter the phrase </label>
              <input
                type="input"
                id="phraseText"
                placeholder="Enter the phrase"
              />
            </div>
            <p> No.of letters: 0</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
