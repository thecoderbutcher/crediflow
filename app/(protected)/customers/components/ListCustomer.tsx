import React from 'react'
import Customer from './Customer'

const customers = [
    {
        name: 'Jhon',
        lastname: 'Doe',
        totalloan: 1000,
        img: '/app/default-user.webp',
        payToday: true
    },
    {
        name: 'Carl',
        lastname: 'Peterson',
        totalloan: 3000,
        img: '/app/default-user.webp',
        payToday: false
    }
]
const ListCustomer = () => {
  return (
    <div className='flex flex-col w-full mt-2'>
        {customers.map((customer, index) => (
            <Customer key={index} {...customer} />
        ))}
    </div>
  )
}

export default ListCustomer