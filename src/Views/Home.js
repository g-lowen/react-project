import "./Home.css";
import React, { useState } from "react";

// const totalTotal = 0
function Home() {
  const [AddPlayer, setAddPlayer] = useState("");
  const [PlayerName, setPlayerName] = useState("");
  const [total, setTotal] = useState("0");

  function handleChange(event) {
    // console.log(event.target.value);
    setAddPlayer(event.target.value);
  }
  function handleSubmit(event) {
    // alert(AddPlayer);
    // console.log(AddPlayer);
    setPlayerName(AddPlayer);
    event.preventDefault();
  }

  const TenRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const PlayerTable = (
    <table>
      <thead>
        <tr className="container">
          <th className="child">{PlayerName}</th>
        </tr>
      </thead>
      <tbody>
        {TenRows.map((i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>
              <input
                type="number"
                onChange={(event) => setTotal(event.target.value)}
              ></input>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Sum</td>
          <td>{total}</td>
        </tr>
      </tfoot>
    </table>
  );
  // let sum = 0
  // function testFunction() {
  //   sum += total
  //   return
  // }

  return (
    <div className="Home">
      <form className="addPlayer" onSubmit={handleSubmit}>
        <input type="submit" value="Add" />
        <input placeholder="Player name" onChange={handleChange} />
      </form>
      {PlayerTable}
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
  );
}

export default Home;
