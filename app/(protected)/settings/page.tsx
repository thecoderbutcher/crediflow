import React from 'react'
import Header from '../components/Header'
import LogoutButton from '@/app/(auth)/logout/components/logout-button'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <Header title='Configuracion' url='/dashboard'/>
      <LogoutButton />
    </div>
  )
}

export default page
