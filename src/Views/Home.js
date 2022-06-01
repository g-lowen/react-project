import './Home.css'
import axios from 'axios'
import { Field, ErrorMessage, Form, Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Home() {
  const [addPlayer, setAddPlayer] = useState(''),
    [playerName, setPlayerName] = useState(''),
    // [playerTables, setPlayerTables] = useState([]),
    [icon, setIcon] = useState(null),
    // [players, setPlayers] = useState([
    //   { name: 'Test', numbers: [100, 200, 300, 400, 0, 0, 0, 0, 0, 0], sum: 0 },
    //   { name: 'Testar', numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sum: 0 },
    //   { name: 'Testade', numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sum: 100 }
    // ]),
    [players, setPlayers] = useState([])

  useEffect(() => {
    console.log('useEffect körs!')
  }, [players])
  const playerTable = (
    <div className="Home-player-container">
      {players.map((player, index) => (
        <table key={index}>
          <thead>
            <tr>
              <th>
                {icon === null ? (
                  '🦄'
                ) : (
                  <img
                    className="table-icon"
                    src={icon.image}
                    alt="iconacter"
                  />
                )}
              </th>
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
                      // console.log(player.numbers[index])
                      // console.log(players)
                      total(player)
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
  function handleChange(event) {
    setAddPlayer(event.target.value)
  }
  function total(player) {
    const strToNum = player.numbers.map((str) => Number(str))
    const initialValue = 0
    const sum = strToNum.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    )
    player.sum = sum
    setPlayers(players)
    console.log(sum)
    console.log(player)
    console.log(player.sum)
    console.log(players)
  }

  // console.log(players, 'utanför')
  function handleSubmit(event) {
    players.name = addPlayer
    players.numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    players.sum = 0
    const player = [...players, players]
    // console.log(player)
    // console.log(players, 'inne innan')
    setPlayers(player)
    // setPlayerTables(playerTable)
    // console.log(players, 'inne efter')
    // console.log(AddPlayer)
    // setPlayerName(AddPlayer)
    // playerTables.push(PlayerTable);
    // setPlayerTables(PlayerTable);
    // setPlayerTables([...playerTables, { ...playerTable }])
    // setPlayerTables([...playerTables, JSON.stringify(JSON.parse(playerTable))]);
    // fetchData();
    event.preventDefault()
  }
  // function fetchData() {
  //   axios.get('http://hp-api.herokuapp.com/api/iconacters').then((res) => {
  //     let result = res.data
  //     function filterByImage(result) {
  //       if (result.image !== '') {
  //         return true
  //       }
  //     }
  //     let resultByImage = result.filter(filterByImage),
  //       rand = Math.floor(Math.random() * resultByImage.length),
  //       randIcon = resultByImage[rand]
  //     console.log(randIcon)
  //     setIcon(randIcon)
  //   })
  // }
  // useEffect(fetchData, [])
  return (
    <div className="Home">
      <form className="addPlayer" onSubmit={handleSubmit}>
        <input className="addPlayer-container-btn" type="submit" value="Add" />
        <label>
          <input
            className="addPlayer-container-input"
            name="name"
            onChange={handleChange}
            placeholder="Player name"
          />
        </label>
      </form>
      {players.length < 1 ? (
        <h1 className="Home-h1">Welcome to 10 000</h1>
      ) : (
        playerTable
      )}
    </div>
  )
}

export default Home
