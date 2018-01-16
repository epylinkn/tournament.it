import React from 'react'
import Link from 'gatsby-link'
import { Bracket } from 'react-tournament-bracket'
import JSOG from 'jsog'
import UserBracketSummary from '../components/UserBracketSummary'
import PLAYERS from '../data/players.js'
import NFL_PLAYOFFS from '../data/nfl_playoffs.js'
import RESULTS from '../data/results.js'
import _ from 'lodash'

const BRACKET = JSOG.decode(NFL_PLAYOFFS)

class IndexPage extends React.Component {
  constructor() {
    super()

    let players_wscore = PLAYERS.map((player) => {
      player['score'] = player.predictions.reduce((sum, prediction) => {
        let key = prediction.join(">")
        let score = RESULTS[key] || 0
        return sum + score
      }, 0)

      return player
    })

    this.state = {
      players_wscore: _(players_wscore).sortBy('score').reverse().value()
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>SuperBowl 2018</h2>
        <div>
          <Bracket game={BRACKET} homeOnTop={false} />
        </div>

        <h2>Leaderboard</h2>
        <div className="leaderboard">
          {
            this.state.players_wscore.map((player) =>
              <UserBracketSummary player={player} key={player.name} />
            )
          }
        </div>
      </div>
    )
  }
}

export default IndexPage
