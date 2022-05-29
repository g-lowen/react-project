import "./Rules.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Rules() {
  const [char, setChar] = useState(null);
  console.log(char);
  // const [char, setChar] = useState(null)
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://hp-api.herokuapp.com/api/characters")
        .then((res) => {
          let result = res.data;
          // console.log(result)
          // console.log(result[0].image)
          function filterByImage(result) {
            if (result.image !== "") {
              return true;
            }
          }
          let resultByImage = result.filter(filterByImage),
            rand = Math.floor(Math.random() * resultByImage.length),
            randChar = resultByImage[rand];
          console.log(randChar);
          setChar(randChar);
        });
    }
    fetchData();
  }, []);
  // console.log(char.name)
  // console.log(char.image)
  return (
    <div>
      Rules
      <input type="button" onClick={useEffect}></input>
      <div>{char === null ? "Name" : char.name}</div>
      <div>
        {char === null ? "Icon" : <img src={char.image} alt="Character" />}
      </div>
    </div>
  );
}

export default Rules;
