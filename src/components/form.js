import React, { useState } from 'react'
import '../style/form.css'

const Form = () => {
  const[nama, setNama] = useState('')
  const[nim, setNim] = useState('')
  const[angkatan, setAngkatan] = useState('')
  const[hobi, setHobi] = useState('')
  const[send, setSend] = useState(false)

  function simpanData (event) {
    event.preventDefault()





  }
  return (
    <div class = 'form'>
      {send ? (
        <div className='jek'>
          <h1>nama: {nama}</h1>
          <h1>nim: {nim}</h1>
          <h1>angkatan: {angkatan}</h1>
          <h1>hobi: {hobi}</h1>
        </div>
      ):
      (
        <div class = 'container'>
        <h1>Biodata</h1>
        <div class = 'zoro'>
            <form onSubmit={simpanData}>
                <label>Nama</label>
                <input type = 'input' onChange={(event) => {
                  setNama(event.target.value);
                  }}/>
                <label>Nim</label>
                <input type = 'input' onChange={(event) => {
                  setNim(event.target.value);
                 }}/>
                <label>Angkatan</label>
                <input type = 'input' onChange={(event) => {
                  setAngkatan(event.target.value);
                 }}/>
                <label>Hobi</label>
                <input type = 'input' onChange={(event) => {
                  setHobi(event.target.value);
                }}/> 
                <button onClick={() => {
                  setSend(true)}}>SEND</button>
            </form>
        </div>
        </div>
      )}
        
    </div>
  )
}

export default Form