import React from 'react'

function Signup() {
  return (
    <div className='signup'>
      
      <div className="input">
        <h1 className='reg'>Registration</h1>
        <input type="text" placeholder='Enter your name'/>
        <input type="email" placeholder='Enter your E-mail'/>
        <input type="password" placeholder='Enter your Password'/>
        <button className='submit'>Submit</button>
      </div>
    </div>
  )
}

export default Signup
