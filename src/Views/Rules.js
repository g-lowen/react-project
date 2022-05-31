import './Rules.css'
import { useEffect, useState } from 'react'

function Rules() {
  const [name, setName] = useState('John Doe')
  return (
    <div>
      Rules
      <label>
        Namn
        <input onChange={(event) => setName(event.target.value)} value={name} />
      </label>
      {name}
    </div>
  )
}

export default Rules
