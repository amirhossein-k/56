import React from 'react'

const HrmlAdd = () => {
  return (
      <>
    <div className='users_input' style={users_input}>
      <label htmlFor="user" style={label}>Username: </label>
      <input type="text"placeholder='username' id='user'/>
      
    </div>
    <button style={btn}>log in</button>
    </>
  )
}


const label = {marginRight:  '10px'}
const users_input = {display: "flex",justifyContent: "center"}
const btn = {marginLeft:   '150px',marginTop: '10px'}

export default HrmlAdd