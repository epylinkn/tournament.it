import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class UserBracketSummary extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="leaderboard-row">
        <Link to={`/${this.props.player.name}`} className="unstyled">
          <h1>
            {this.props.player.name}
            <div className="pull-right">
              {this.props.player.score}
            </div>
          </h1>
        </Link>
      </div>
    )
  }
}

UserBracketSummary.propTypes = {
  player: PropTypes.object,
}


export default UserBracketSummary
