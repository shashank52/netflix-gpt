import React from 'react'
import AppAssets from '../assets/AppAssets'

const Header = () => {
  return (
    <div className='absolute px-8 py-2'>
      <img 
      className='w-52'
      src={AppAssets.logo} alt='logo'/>
    </div>
  )
}

export default Header