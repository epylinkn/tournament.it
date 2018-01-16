import React from 'react'
import Link from 'gatsby-link'
import { Bracket } from 'react-tournament-bracket'
import JSOG from 'jsog'
import UserBracketSummary from '../components/UserBracketSummary'
import PLAYERS from '../data/players.js'

var NFL_PLAYOFFS = {
  "@id": "1",
  "name": "SuperBowl LII",
  "scheduled": 1517787000000,
  "court": {
    "@id": "2",
    "name": "some court for id 1",
    "venue": {
      "@id": "3",
      "name": "some venue for id 1"
    },
  },
  "sides": {
    // AFC
    "visitor": {
      "team": null,
      "score": null,
      "seed": {
        "sourceGame": {
          "@id": "4",
          "id": "b6e869cc-e6ad-4151-9186-5df828b45802",
          "scheduled": 1516565100000,
          "name": "AFC Conference Championship",
          "court": { "@ref": "2" },
          "sides": {
            "visitor": {
              "team": {
                "@id": "5",
                "location": "Jacksonville",
                "name": "Jaguars"
              },
              "score": null,
              "seed": {
                "sourceGame": {
                  "@id": "10",
                  "id": "asdfawe2-e6ad-4151-9186-5df828b45802",
                  "scheduled": 1515888000000,
                  "name": "Divisional Round",
                  "court": { "@ref": "2" },
                  "sides": {
                    "visitor": {
                      "team": { "@ref": "5" },
                      "score": { "score": 45 },
                      "seed": null
                    },
                    "home": {
                      "team": {
                        "@id": "11",
                        "location": "Pittsburgh",
                        "name": "Steelers"
                      },
                      "score": { "score": 42 },
                      "seed": null
                    }
                  }
                },
                "sourcePool": null,
                "rank": 1,
                "displayName": ""
              }
            },
            "home": {
              "team": {
                "@id": "6",
                "location": "New England",
                "name": "Patriots"
              },
              "score": null,
              "seed": {
                "sourceGame": {
                  "@id": "12",
                  "id": "akj32333-e6ad-4151-9186-5df828b45802",
                  "scheduled": 1515888000000,
                  "name": "Divisional Round",
                  "court": { "@ref": "2" },
                  "sides": {
                    "visitor": {
                      "team": {
                        "@id": "13",
                        "location": "Tennessee",
                        "name": "Titans"
                      },
                      "score": { "score": 14 },
                      "seed": null
                    },
                    "home": {
                      "team": { "@ref": "6" },
                      "score": { "score": 35 },
                      "seed": null
                    },
                  }
                },
                "sourcePool": null,
                "rank": 1,
                "displayName": ""
              }
            }
          },
        },
        "sourcePool": null,
        "rank": 1,
        "displayName": ""
      }
    },
    "home": {
      "team": null,
      "score": null,
      "seed": {
        "sourceGame": {
          "@id": "7",
          "scheduled": 1516578000000,
          "name": "NFC Conference Championship",
          "court": { "@ref": "2" },
          "sides": {
            "visitor": {
              "team": {
                "@id": "8",
                "location": "Minnesota",
                "name": "Vikings"
              },
              "score": null,
              "seed": {
                "sourceGame": {
                  "@id": "20",
                  "id": "a32kjh33-e6ad-4151-9186-5df828b45802",
                  "scheduled": 1515888000000,
                  "name": "Divisional Round",
                  "court": { "@ref": "2" },
                  "sides": {
                    "visitor": {
                      "team": {
                        "@id": "21",
                        "location": "New Orleans",
                        "name": "Saints"
                      },
                      "score": { "score": 24 },
                      "seed": null
                    },
                    "home": {
                      "team": { "@ref": "8" },
                      "score": { "score": 29 },
                      "seed": null
                    },
                  }
                },
                "sourcePool": null,
                "rank": 1,
                "displayName": ""
              }
            },
            "home": {
              "team": {
                "@id": "9",
                "location": "Philadelphia",
                "name": "Eagles"
              },
              "score": null,
              "seed": {
                "sourceGame": {
                  "@id": "30",
                  "id": "1498183k-e6ad-4151-9186-5df828b45802",
                  "scheduled": 1515888000000,
                  "name": "Divisional Round",
                  "court": { "@ref": "2" },
                  "sides": {
                    "visitor": {
                      "team": {
                        "@id": "31",
                        "location": "Atlanta",
                        "name": "Falcons"
                      },
                      "score": { "score": 10 },
                      "seed": null
                    },
                    "home": {
                      "team": { "@ref": "9" },
                      "score": { "score": 15 },
                      "seed": null
                    },
                  }
                },
                "sourcePool": null,
                "rank": 1,
                "displayName": ""
              }
            }
          },
        },
        "sourcePool": null,
        "rank": 1,
        "displayName": ""
      }
    },
  },
}

const BRACKET = JSOG.decode(NFL_PLAYOFFS)

const IndexPage = () => (
  <div>
    <h1>SuperBowl 2018</h1>
    <Bracket game={BRACKET} homeOnTop={false} />

    <h2>Leaderboard</h2>
    {
      PLAYERS.map((player) =>
        <UserBracketSummary player={player} key={player.name} />
      )
    }
  </div>
)

export default IndexPage
