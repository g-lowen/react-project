import "./Home.css";
import axios from "axios";
import { Field, ErrorMessage, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Home() {
  const [addPlayer, setAddPlayer] = useState(""),
    [playerName, setPlayerName] = useState(""),
    [icon, setIcon] = useState(null),
    [players, setPlayers] = useState([]);

  useEffect(() => {
    // console.log("useEffect körs!");
    // forEach på players med en inre sum
    // ^ loopa igenom players och gör en funktion som summerar
  }, [players]);
  const playerTable = (
    <div className="Home-player-container">
      {players.map((player, index) => (
        <table key={index}>
          <thead>
            <tr>
              <th>
                {/* {icon === null ? (
                  "🦄"
                ) : (
                  <img
                    className="table-icon"
                    src={icon.image}
                    alt="iconacter"
                  />
                )} */}
                {icon && (
                  <img
                    className="table-icon"
                    src={player.icon.image}
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
                      player.numbers[index] = event.target.value;
                      setPlayers(players);
                      total(player);
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
  function handleChange(event) {
    setAddPlayer(event.target.value);
  }
  function total(player) {
    const strToNum = player.numbers.map((str) => Number(str));
    const initialValue = 0;
    const sum = strToNum.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    player.sum = sum;
    setPlayers(JSON.parse(JSON.stringify(players)));
    console.log(players);
  }

  function handleSubmit(event) {
    const player = {
      name: addPlayer,
      numbers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sum: 0,
      icon,
    };
    setPlayers([...players, player]);
    console.log(players);
    fetchData();
    event.preventDefault();
  }
  function fetchData() {
    axios.get("http://hp-api.herokuapp.com/api/characters").then((res) => {
      let result = res.data;
      function filterByImage(result) {
        if (result.image !== "") {
          return true;
        }
      }
      let resultByImage = result.filter(filterByImage),
        rand = Math.floor(Math.random() * resultByImage.length),
        randIcon = resultByImage[rand];
      setIcon(randIcon);
    });
  }
  useEffect(fetchData, []);
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
  );
}

export default Home;
