import './Home.css'
import axios from 'axios'
import { Field, ErrorMessage, Form, Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Home() {
  const [addPlayer, setAddPlayer] = useState(''),
    [playerName, setPlayerName] = useState(''),
    [playerTables, setPlayerTables] = useState([]),
    [value, setValue] = useState(null),
    [total, setTotal] = useState(null),
    [icon, setIcon] = useState(null),
    // [players, setPlayers] = useState([
    //   { name: 'Test', numbers: [100, 200, 300, 400, 0, 0, 0, 0, 0, 0], sum: 0 },
    //   { name: 'Testar', numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sum: 10 },
    //   { name: 'Testade', numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sum: 100 }
    // ]),
    [players, setPlayers] = useState([
      { name: String, numbers: [], sum: Number }
    ]),
    //  H1 = styled.h1`
    //   text-align: center;
    // `,
    //  TenRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [name, setName] = useState('')
  useEffect(() => {
    // const sum1 = players[0].numbers.reduce((partialSum, a) => partialSum + a, 0)
    // const sum2 = players[1].numbers.reduce((partialSum, a) => partialSum + a, 0)
    // const sum3 = players[2].numbers.reduce((partialSum, a) => partialSum + a, 0)
    // console.log(sum)
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
                  'Icon'
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
                      test(players)
                      // console.log(player.numbers[index])
                      // console.log(players)
                      // console.log(value)
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
  // let playerTables = [];
  // playerTables.push(PlayerTable);

  function handleChange(event) {
    setAddPlayer(event.target.value)
  }
  function handleSubmit(event) {
    players.name = addPlayer
    players.numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    players.sum = 0
    console.log(players)
    setPlayers(players)
    setPlayerTables(playerTable)
    // console.log(AddPlayer)
    // setPlayerName(AddPlayer)
    // playerTables.push(PlayerTable);
    // setPlayerTables(PlayerTable);
    // setPlayerTables([...playerTables, { ...playerTable }])
    // setPlayerTables([...playerTables, JSON.stringify(JSON.parse(playerTable))]);
    // fetchData();
    event.preventDefault()
  }
  function handleValue(event) {
    // console.log(event.target.value);
    // setPlayers.sum(event.target.value);
    // let obj = JSON.parse(JSON.stringify(event.target.value));
    // sum.push(obj);
    // sum = [...sum];
    // console.log(sum);
    // totallyValue();
    // setValue(totallyValue)
    // console.log(obj)
    // console.log(sum)
  }
  function totallyValue() {
    // const copy = sum;
    // let totallySum = 0;
    // for (let i = 0; i < copy.length; i++) {
    //   totallySum += Number(copy[i]);
    // }
    // console.log(totallySum);
  }
  // useEffect(() => {
  // function fetchData() {
  //   axios.get("http://hp-api.herokuapp.com/api/iconacters").then((res) => {
  //     let result = res.data;
  //     // console.log(result)
  //     // console.log(result[0].image)
  //     function filterByImage(result) {
  //       if (result.image !== "") {
  //         return true;
  //       }
  //     }
  //     let resultByImage = result.filter(filterByImage),
  //       rand = Math.floor(Math.random() * resultByImage.length),
  //       randIcon = resultByImage[rand];
  //     console.log(randIcon);
  //     setIcon(randIcon);
  //   });
  // }

  // useEffect(fetchData, [])
  // fetchData()
  // }, [])
  function test(players) {
    console.log(players)
  }
  // function test(players) {
  //   console.log(players)
  // }
  const [theArray, setTheArray] = useState([])
  const addEntryClick = () => {
    players.name = addPlayer
    players.numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    players.sum = 0
    setTheArray((oldArray) => [...oldArray, playerTable])
  }
  return (
    <div className="Home">
      <input type="button" onClick={addEntryClick} value="Add" />
      <div>
        {theArray.map((entry) => (
          <div>{entry}</div>
        ))}
      </div>
      {/* <Formik
        initialValues={{ playerName: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
        validate={(values) => {
          const errors = {};

          if (values.userName.trim() === "") {
            errors.userName = "Player name cannot be empty";
          }

          return errors;
        }}
      >
        {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
          <form className="addPlayer" onSubmit={handleSubmit}>
            <input
              className="addPlayer-container-btn"
              disabled={isSubmitting}
              type="submit"
              value="Add"
            />
            <label>
              <input
                className="addPlayer-container-input"
                name="playerName"
                onChange={handleChange}
                placeholder="Player name"
                value={values.playerName}
              />
            </label>
            </div>
            <span>{errors.userName}</span>
          </form>
        )}
      </Formik> */}
      <form className="addPlayer" onSubmit={handleSubmit}>
        <input className="addPlayer-container-btn" type="submit" value="Add" />
        <label>
          <input
            className="addPlayer-container-input"
            name="playerName"
            onChange={handleChange}
            placeholder="Player name"
          />
        </label>
      </form>
      <div className="Home-player-container">
        {playerTables.length < 1 ? <div>Welcome to 10 000</div> : playerTables}
      </div>
      {playerTables.length < 1 ? (
        <h1>Welcome to 10 000</h1>
      ) : (
        <div className="Home-player-container"> {playerTables}</div>
      )}
      {/* {playerTable} */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default Home

// Gör en useEffect-funktion
