import React from 'react'
import PropTypes from 'prop-types'
import RESULTS from '../data/results.js'

class UserBracketSummary extends React.Component {
  constructor() {
    super()
  }

  getScore() {
    return this.props.player.predictions.reduce((sum, prediction) => {
      let key = prediction.join(">")
      let score = RESULTS[key] || 0
      return sum + score
    }, 0)
  }

  render() {
    return (
      <div>
        <h1>{this.props.player.name}</h1>
        <p>
          Score:
          {this.getScore()}
        </p>
      </div>
    )
  }
}

UserBracketSummary.propTypes = {
  player: PropTypes.object,
}



export default UserBracketSummary
