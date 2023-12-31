import React from 'react'
import AppAssets from '../assets/AppAssets'
import AppForm from './AppForm'
import Header from './Header'

const Login = () => {
  return (
    <div className='bg-gradient-to-b from-neutral-800'>
        <Header/>
        <div className='absolute'>
        <img className='mix-blend-overlay' src={AppAssets.loginBackground} alt='loginBackground'/>
        </div>
        
        <AppForm/>
       
    </div>
  )
}

export default Login
