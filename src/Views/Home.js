import "./Home.css";
import axios from "axios";
import { Field, ErrorMessage, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Home() {
  const [AddPlayer, setAddPlayer] = useState("");
  const [PlayerName, setPlayerName] = useState("");
  const [PlayerTables, setPlayerTables] = useState([]);
  const [value, setValue] = useState(null);
  const [total, setTotal] = useState(null);
  const [icon, setIcon] = useState(null);
  const [players, setPlayers] = useState([
    { name: "Test", numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sum: 0 },
    { name: "Testar", numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sum: 10 },
    { name: "Testade", numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sum: 100 },
  ]);
  // const H1 = styled.h1`
  //   text-align: center;
  // `;
  // let total = [];
  // console.log(Players);
  // const TenRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const PlayerTable = (
    <div className="Home-player-container">
      {players.map((player, index) => (
        <table key={index}>
          <thead>
            <tr>
              <th>
                {icon === null ? (
                  "Icon"
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
                      console.log(player.numbers[index]);
                      player.numbers[index] = event.target.value;
                      console.log(player.numbers[index]);
                      setPlayers(players);
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
  );
  // let PlayerTables = [];
  // PlayerTables.push(PlayerTable);
  console.log(PlayerTables);
  function handleChange(event) {
    setAddPlayer(event.target.value);
  }
  function handleSubmit(event) {
    console.log(AddPlayer);
    event.preventDefault();
    setPlayerName(AddPlayer);
    // PlayerTables.push(PlayerTable);
    // setPlayerTables(PlayerTable);
    setPlayerTables([...PlayerTables, { ...PlayerTable }]);
    // setPlayerTables([...PlayerTables, JSON.stringify(JSON.parse(PlayerTable))]);
    // fetchData();
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
  return (
    <div className="Home">
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
        {PlayerTables.length < 1 ? <div>Welcome to 10 000</div> : PlayerTables}
      </div>

      {PlayerTables.length < 1 ? (
        <h1>Welcome to 10 000</h1>
      ) : (
        <div className="Home-player-container"> {PlayerTables}</div>
      )}
      {PlayerTable}
    </div>
  );
}

export default Home;

// Gör en useEffect-funktion
