import React, { Component } from 'react'

export class Login extends Component {
  render () {
    return <div>
      <form>
        <div class='field'>
          <label htmlFor='email' className='label'>Email</label>
          <div class='control'>
            <input className='input' type='text' id='email' placeholder='email' />
          </div>
        </div>
        <div className='field'>
          <label htmlFor='password' className='label'>Password</label>
          <div className='control'>
            <input type='text' className='input' id='password' placeholder='password' />
          </div>
        </div>
        <input className='button is-danger' type='submit' value='Login' />
      </form>
    </div>
  }
}

export default Login
