import './Home.css'
import axios from 'axios'
import { Field, ErrorMessage, Form, Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Home() {
  const [PlayerTables, setPlayerTables] = useState([]),
    [players, setPlayers] = useState([
      { name: 'Test', numbers: [100, 200, 300, 400, 0, 0, 0, 0, 0, 0], sum: 0 },
      { name: 'Testar', numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sum: 10 },
      { name: 'Testade', numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sum: 100 }
    ]),
    PlayerTable = (
      <div className="Home-player-container">
        {players.map((player, index) => (
          <table key={index}>
            <thead>
              <tr>
                <th></th>
                <th>{player.name}</th>
              </tr>
            </thead>
            <tbody>
              {player.numbers.map((value, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="row-container">
                    <input
                      className="row"
                      type="number"
                      onBlur={(event) => {
                        // console.log(player.numbers[index])
                        player.numbers[index] = event.target.value
                        setPlayers(players)
                        test(players)
                      }}
                    ></input>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Sum</td>
                <td>{player.sum}</td>
              </tr>
            </tfoot>
          </table>
        ))}
      </div>
    )

  function test(players) {
    console.log(players)
  }
  const [name, setName] = useState('')
  useEffect(() => {
    const sum = players[0].numbers.reduce((partialSum, a) => partialSum + a, 0)
    console.log(sum)
    console.log('test')
  }, [players])
  return (
    <div className="Home">
      <div className="Home-player-container">
        {PlayerTables.length < 1 ? <div>Welcome to 10 000</div> : PlayerTables}
      </div>

      {PlayerTables.length < 1 ? (
        <h1>Welcome to 10 000</h1>
      ) : (
        <div className="Home-player-container"> {PlayerTables}</div>
      )}
      {PlayerTable}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default Home
