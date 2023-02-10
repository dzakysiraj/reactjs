import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <div className = "App">
    <p>Tambah Angka : {count}</p>
    <button onClick={()=>{setCount(count+1)}}>Tambah</button>
    <button onClick={()=>{ setCount(count-1)}}>Kurang</button>
  </div>
  )
}

export default Count