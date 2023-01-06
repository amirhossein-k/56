import React from 'react'
import { Provider } from 'react-redux'
import Store from '../Redux/Store'
import HrmlAdd from './HrmlAdd'
// import Items from './Items'
import './Login.css'

const Login = () => {
  return (
      <Provider store={Store}>

      <div className='login'>
            <div className="inputs"><HrmlAdd/></div>
      </div>
    </Provider>
  )
}

export default Login