import "./Home.css";
import axios from "axios";
import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Home() {
  const [AddPlayer, setAddPlayer] = useState("");
  const [PlayerName, setPlayerName] = useState("");
  const [PlayerTables, setPlayerTables] = useState([]);
  const [value, setValue] = useState(null);
  const [total, setTotal] = useState(null);
  const [char, setChar] = useState(null);
  const H1 = styled.h1`
    text-align: center;
  `;
  let sum = [];

  const TenRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const PlayerTable = (
    <table>
      <thead>
        <tr>
          <th>
            {char === null ? (
              "Icon"
            ) : (
              <img className="table-icon" src={char.image} alt="Character" />
            )}
          </th>
          <th>
            {/* {char === null ? "Name" : char.name} */}
            {PlayerName}
          </th>
        </tr>
      </thead>
      <tbody>
        {TenRows.map((i) => (
          <tr key={i}>
            <td>{i}</td>
            <td className="row-container">
              <input className="row" type="number" onBlur={handleValue}></input>
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
  );
  // let PlayerTables = [];
  // PlayerTables.push(PlayerTable);
  function handleChange(event) {
    console.log(event.target.value);
    console.log(PlayerTables.length);
    console.log(PlayerTables);
    setAddPlayer(event.target.value);
  }
  console.log(PlayerTables.length);
  console.log(PlayerTables);
  function handleSubmit(event) {
    console.log(AddPlayer);
    setPlayerName(AddPlayer);
    PlayerTables.push(PlayerTable);
    // setPlayerTables(PlayerTable);
    // console.log(totallyValue);
    // setTotal(Number(totallyValue));
    // fetchData();
    // console.log(total);
    event.preventDefault();
  }
  function handleValue(event) {
    let obj = JSON.parse(JSON.stringify(event.target.value));
    sum.push(obj);
    sum = [...sum];
    console.log(sum);
    totallyValue();
    // setValue(totallyValue)
    // console.log(obj)
    // console.log(sum)
  }
  function totallyValue() {
    const copy = sum;
    let totallySum = 0;
    for (let i = 0; i < copy.length; i++) {
      totallySum += Number(copy[i]);
    }
    console.log(totallySum);
  }
  // useEffect(() => {
  // function fetchData() {
  //   axios.get("http://hp-api.herokuapp.com/api/characters").then((res) => {
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
  //       randChar = resultByImage[rand];
  //     console.log(randChar);
  //     setChar(randChar);
  //   });
  // }

  // useEffect(fetchData, [])
  // fetchData()
  // }, [])
  return (
    <div className="Home">
      <Formik
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
        {({ handleChange, handleSubmit, isSubmitting, values }) => (
          <form className="addPlayer" onSubmit={handleSubmit}>
            <div className="addPlayer-container">
              <input
                className="addPlayer-container-btn"
                disabled="isSubmitting"
                type="submit"
                value="Add"
              />
              <input
                className="addPlayer-container-input"
                name="playerName"
                placeholder="Player name"
                onChange={handleChange}
              />
            </div>
          </form>
        )}
      </Formik>

      <div className="Home-player-container">
        {PlayerTables.length < 1 ? <div>Welcome to 10 000</div> : PlayerTables}
      </div>

      {PlayerTables.length < 1 ? (
        <H1>Welcome to 10 000</H1>
      ) : (
        <div className="Home-player-container"> {PlayerTables}</div>
      )}
    </div>
  );
}

export default Home;
