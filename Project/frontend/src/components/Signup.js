import React from 'react'

function Signup() {
  return (
    <div className='signup'>
      <h1 className='reg'>Registration</h1>
      <div className="input">
        <input type="text" placeholder='Enter your name'/>
        <input type="email" placeholder='Enter your E-mail'/>
        <input type="password" placeholder='Enter your Password'/>
      </div>
    </div>
  )
}

export default Signup
