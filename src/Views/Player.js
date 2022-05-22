import './Player.css'
import React, { useState } from 'react'
// import AddPlayer from '../Component/AddPlayer'

// const totalTotal = 0
function Player() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
    React.createElement(`input`, null)
  )
  const [total, setTotal] = useState('0')
  // let sum = 0
  // function testFunction() {
  //   sum += total
  //   return
  // }

  return (
    <div className="Player">
      {test}
      <div className="container">
        <div className="child">test</div>
      </div>
      <table>
        <thead className="container">
          <tr>
            <th className="child">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <input
                type="number"
                onChange={(event) => setTotal(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <input
                type="number"
                onChange={(event) => setTotal(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <input
                type="number"
                onChange={(event) => setTotal(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <input
                type="number"
                onChange={(event) => setTotal(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <input
                type="number"
                onChange={(event) => setTotal(event.target.value)}
              ></input>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Sum</td>
            <td>0</td>
            {/* {{ testFunction }} */}
          </tr>
        </tfoot>
      </table>
      {/* <input
        type="number"
        placeholder="1"
        onChange={(event) => setTotal(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="3"
        onChange={(event) => setTotal(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="2"
        onChange={(event) => setTotal(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="4"
        onChange={(event) => setTotal(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="5"
        onChange={(event) => setTotal(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="6"
        onChange={(event) => setTotal(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="7"
        onChange={(event) => setTotal(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="8"
        onChange={(event) => setTotal(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="9"
        onChange={(event) => setTotal(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="10"
        onChange={(event) => setTotal(event.target.value)}
      ></input> */}
      {/* {totalTotal} */}
    </div>
  )
}

export default Player
