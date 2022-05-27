import './Home.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [AddPlayer, setAddPlayer] = useState('')
  const [PlayerName, setPlayerName] = useState('')
  const [value, setValue] = useState(null)
  const [total, setTotal] = useState(null)
  const [char, setChar] = useState(null)
  // console.log(char)
  let sum = []

  const TenRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const PlayerTable = (
    <table>
      <thead>
        <tr>
          <th>
            {char === null ? (
              'Icon'
            ) : (
              <img className="table-icon" src={char.image} alt="Character" />
            )}
          </th>
          <th>{PlayerName === '' ? 'char.name' : PlayerName}</th>
        </tr>
      </thead>
      <tbody>
        {TenRows.map((i) => (
          <tr key={i}>
            <td>{i}</td>
            <td className="test-container">
              <input
                className="test"
                type="number"
                onBlur={handleValue}
              ></input>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Sum</td>
          <td>
            {value}
            {total > 0 && total}
          </td>
        </tr>
      </tfoot>
    </table>
  )
  let PlayerTables = []
  PlayerTables.push(PlayerTable)
  PlayerTables.push(PlayerTable)
  PlayerTables.push(PlayerTable)
  // PlayerTables.push(PlayerTable)
  // PlayerTables.push(PlayerTable)
  // PlayerTables.push(PlayerTable)
  // PlayerTables.push(PlayerTable)
  // PlayerTables.push(PlayerTable)
  // PlayerTables.push(PlayerTable)
  // console.log(PlayerTables.length)
  // console.log(PlayerTables)
  function handleChange(event) {
    // console.log(event.target.value);
    setAddPlayer(event.target.value)
  }

  function handleSubmit(event) {
    setPlayerName(AddPlayer)
    PlayerTables.push(PlayerTable)
    // console.log(PlayerTables.length)
    // console.log(PlayerTables)
    setTotal(Number(2))
    fetchData()

    console.log(total)
    event.preventDefault()
  }
  function handleValue(event) {
    // console.log(event.target.value)
    let obj = JSON.parse(JSON.stringify(event.target.value))
    sum.push(obj)
    sum = [...sum]
    console.log(sum)
    totallyValue()
    // setValue(totallyValue)
    // console.log(obj)
    // console.log(sum)
  }
  function totallyValue() {
    const copy = sum
    let totallySum = 0
    for (let i = 0; i < copy.length; i++) {
      totallySum += Number(copy[i])
    }
    console.log(totallySum)
    // setTotal(totallyValue)
  }
  // useEffect(() => {
  function fetchData() {
    axios.get('http://hp-api.herokuapp.com/api/characters').then((res) => {
      let result = res.data
      // console.log(result)
      // console.log(result[0].image)
      function filterByImage(result) {
        if (result.image !== '') {
          return true
        }
      }
      let resultByImage = result.filter(filterByImage),
        rand = Math.floor(Math.random() * resultByImage.length),
        randChar = resultByImage[rand]
      // console.log(randChar)
      setChar(randChar)
    })
  }

  // useEffect(fetchData, [])
  // fetchData()
  // }, [])
  return (
    <div className="Home">
      <form className="addPlayer" onSubmit={handleSubmit}>
        <div className="addPlayer-container">
          <input
            className="addPlayer-container-btn"
            type="submit"
            value="Add"
          />
          <input
            className="addPlayer-container-input"
            placeholder="Player name"
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="Home-player-container">
        {/* <div>{char === null ? 'Icon' : char.name}</div>
        <div>
          {char === null ? 'Name' : <img src={char.image} alt="Character" />}
        </div> */}
        {PlayerTables.length < 1 ? <div>Welcome to 10 000</div> : PlayerTables}
      </div>
    </div>
  )
}

export default Home
