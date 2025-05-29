import React from 'react'
import Header from '../components/Header'
import Profile from './components/Profile'
import Settings from './components/Settings'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <Header title='Configuracion' url='/dashboard'/>
      <Profile />
      <Settings />
    </div>
  )
}

export default page
