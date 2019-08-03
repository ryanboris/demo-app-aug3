import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Specials() {
  const [specials, setSpecials] = useState([])

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/ryanboris/demo-app-aug3/db')
      .then(response => {
        setSpecials(response.data.specials)
      })
      .catch(err => console.error(err))
  }, [])

  console.log('specials', specials)

  return <div>Specials!</div>
}

export default Specials
