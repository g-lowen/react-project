import './AddPlayer.css'
import { useState } from 'react'

function AddPlayer() {
  const [AddPlayer, setAddPlayer] = useState('')

  function onChangeHandler(event) {
    console.log(event.target.value)
  }
  return (
    <form className="AddPlayer">
      Add player
      <input placeholder="Player name" onChange={onChangeHandler} />
      <input type="submit" value={AddPlayer} />
    </form>
  )
}

export default AddPlayer
