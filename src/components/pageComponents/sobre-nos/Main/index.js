import React, { useState } from "react"

const Main = () => {
  const [value, setValue] = useState(0)
  const onChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <form>
        <input onChange={onChange} />
        <input type="submit" value="Calcular" />
      </form>
      <h1>{value - 70}</h1>
      <p>R$70.00</p>
    </>
  )
}

export default Main
