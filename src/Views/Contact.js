import "./Contact.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import styled from "styled-components";

function Contact() {
  const [AddPlayer, setAddPlayer] = useState("");
  const [PlayerName, setPlayerName] = useState("");
  const [PlayerTables, setPlayerTables] = useState([]);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [value9, setValue9] = useState(0);
  const [value10, setValue10] = useState(0);
  const [icon, setIcon] = useState(null);
  let total =
    Number(value1) +
    Number(value2) +
    Number(value3) +
    Number(value4) +
    Number(value5) +
    Number(value6) +
    Number(value7) +
    Number(value8) +
    Number(value9) +
    Number(value10);
  // const H1 = styled.h1`
  //   text-align: center;
  // `

  const TenRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const PlayerTable = (
    <table>
      <thead>
        <tr>
          <th>
            {icon === null ? (
              "Icon"
            ) : (
              <img className="table-icon" src={icon.image} alt="Icon" />
            )}
          </th>
          <th>{PlayerName}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <input
              className="row"
              type="number"
              onChange={(event) => setValue1(event.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <input className="row" type="number" onBlur={handleValue2}></input>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Sum</td>
          <td>{Number(value1) + Number(value2)}</td>
        </tr>
      </tfoot>
    </table>
  );
  // let PlayerTables = [];
  PlayerTables.push(PlayerTable);
  function handleChange(event) {
    setAddPlayer(event.target.value);
  }
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
  function handleValue1(event) {
    setValue1(event.target.value);
  }
  function handleValue2(event) {
    setValue2(event.target.value);
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
  //       randicon = resultByImage[rand];
  //     console.log(randicon);
  //     setIcon(randicon);
  //   });
  // }

  // useEffect(fetchData, [])
  // fetchData()
  // }, [])
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="Contact">
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

      <table>
        <thead>
          <tr>
            <th>
              {icon === null ? (
                "Icon"
              ) : (
                <img className="table-icon" src={icon.image} alt="iconacter" />
              )}
            </th>
            <th>
              {/* {icon === null ? "Name" : icon.name} */}
              {PlayerName}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue1(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue2(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue3(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue4(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue5(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue6(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue7(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue8(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue9(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <input
                className="row"
                type="number"
                onBlur={(event) => setValue10(event.target.value)}
              ></input>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Sum</td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Contact;
